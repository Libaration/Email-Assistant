const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  session,
  shell,
} = require('electron');
const path = require('path');
const { download } = require('electron-dl');
const isDev = require('electron-is-dev');
const url = require('url');
let win;
let auth;
let progressWindow;

const createWindow = async () => {
  win = new BrowserWindow({
    kiosk: false,
    width: 1350,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#171923',
    show: false,
    titleBarStyle: 'hiddenInset',
    minWidth: 1200,
    title: 'Email Assistant - Ashland Auction',
  });
  auth = new BrowserWindow({
    backgroundThrottling: true,
    modal: true,
    parent: win,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#171923',
    show: false,
    titleBarStyle: 'hiddenInset',
    minWidth: 800,
    minimizable: false,
    maximizable: false,
    resizable: false,
    closable: false,

    title: 'Email Assistant - Ashland Auction',
  });

  progressWindow = new BrowserWindow({
    frame: false,
    width: 300,
    height: 300,
    alwaysOnTop: true,
    visualEffectState: 'followWindow',
    titlebarStyle: 'hidden',
    show: false,
    fullscreenable: false,
    isMovable: false,
    closable: false,
    resizable: false,
    customButtonsOnHover: true,
    vibrancy: 'hud',
    transparent: true,
    opacity: 0.5,
    webPreferences: {
      nodeIntegration: true,
      contextBridge: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    const url = new URL(
      'file://' + path.join(__dirname, '../build/index.html')
    );
    win.loadURL(url.toString());
  }

  win.once('ready-to-show', () => {
    win.show();
  });
};

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.whenReady().then(() => {
  //* This is because CORS is enabled on the Salesforce API and we need to bypass it in development.
  //* Cors is mad annoying and I hate it. `Access-Control-Allow-Origin` is the bane of my existence.
  //* It's just a pain and FOR WHAT?! FOR WHY?!
  //* END CORS RANT
  //* i'm not sorry for the rant because it's true

  if (isDev) {
    const filter = {
      urls: ['https://ashlandauction.my.salesforce.com/*'],
    };

    session.defaultSession.webRequest.onBeforeSendHeaders(
      filter,
      (details, callback) => {
        details.requestHeaders['Origin'] = 'http://localhost:3000';
        details.requestHeaders['Authorization'] =
          `Bearer ${process.env.REACT_APP_MOCK_TOKEN}`;
        details.requestHeaders['Content-Type'] = 'application/json';
        callback({ requestHeaders: details.requestHeaders });
      }
    );

    session.defaultSession.webRequest.onHeadersReceived(
      filter,
      (details, callback) => {
        details.responseHeaders['Access-Control-Allow-Origin'] = [
          'http://localhost:3000',
        ];
        details.responseHeaders['Access-Control-Allow-Headers'] = [
          'Authorization',
        ];
        details.responseHeaders['Access-Control-Allow-Headers'] = [
          'Authorization',
          'Content-Type',
        ];
        callback({ responseHeaders: details.responseHeaders });
      }
    );
  }

  ipcMain.on('kioskMode', () => {
    win.kiosk = !win.kiosk;

    const videoPath = isDev ? 'http://localhost:3000/egg.html' :  'file://' + path.join(__dirname, '../build/egg.html'); 
    win.loadURL(videoPath);
  });

  ipcMain.on('showDialog', (event, message) => {
    dialog.showErrorBox('Error', message);
  });

  ipcMain.on('updateApp', (event, downloadInfo) => {
    if (progressWindow.isVisible()) {
      return;
    }
    const downloadLink = downloadInfo.assets[0].browser_download_url;
    const releaseNotes = downloadInfo.html_url;
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update Available',
        message: `A new version of Email Assistant is available: ${downloadInfo.tag_name} \n Do you want to download it?`,
        detail: `Changelog: \n ${downloadInfo.body}`,
        buttons: ['Download', 'View Release Notes', 'Cancel'],
      })
      .then((response) => {
        if (response.response === 0) {
          console.log('Downloading update:', downloadLink);
          downloadUpdate(downloadLink);
          let url = new URL(
            'file://' +
              path.join(__dirname, '../build/index.html/#/progressBar')
          ).toString();
          if (isDev) {
            url = 'http://localhost:3000/#/progressBar';
          }

          progressWindow.loadURL(url);

          progressWindow.once('ready-to-show', () => {
            progressWindow.show();
          });
        }
        if (response.response === 1) {
          shell.openExternal(releaseNotes);
        } else {
          progressWindow.destroy();
        }
      });
  });

  ipcMain.on('oauthRedirect', (event, url) => {
    auth.loadURL(url);

    auth.once('ready-to-show', () => {
      if (!isDev) {
        auth.show();
      }
    });

    const handleCallback = (event, url) => {
      if (isDev) {
        const newURL = `about:blank/?success#access_token=${process.env.REACT_APP_MOCK_TOKEN}`;
        url = newURL;
      }
      if (!url.includes('success')) {
        return;
      }
      const [_baseUrl, fragment] = url.split('#');
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');
      if (accessToken) {
        win.webContents.send('accessToken', accessToken);
        auth.webContents.removeAllListeners('did-start-navigation');
        auth.destroy();
      }
    };
    auth.webContents.on('did-start-navigation', handleCallback);
  });

  createWindow();
});

function downloadUpdate(downloadLink) {
  download(win, downloadLink, {
    directory: app.getPath('temp'),
    onProgress: (progress) => {
      win.webContents.send('downloadProgress', progress.percent);
      progressWindow.webContents.send('downloadProgress', progress.percent);
    },
  })
    .then((dl) => {
      console.log('Download complete:', dl.getSavePath());
      shell.trashItem(dl.getSavePath()); // This is just a placeholder for now
      console.log('Downloaded file has been trashed:', dl.getSavePath());
      progressWindow.destroy();
      let countdown = 5;

      // Start the countdown before showing the message box
      // const interval = setInterval(() => {
      //   console.log('Restarting in', countdown);
      //   countdown--;
      //   if (countdown === 0) {
      //     clearInterval(interval);
      //     app.relaunch();
      //     app.quit();
      //   }
      // }, 1000);

      const messageBox = new BrowserWindow({
        parent: win, // Set parent window if needed
        modal: true,
        show: false,
        width: 400,
        height: 200,
        resizable: false,
        title: 'Download Complete',
        webPreferences: {
          nodeIntegration: true,
        },
      });

      const componentPath = path.join(__dirname, 'path/to/your/component.html');
      const componentURL = isDev
        ? 'http://localhost:3000/#/updateComplete'
        : new URL(`file://${componentPath}`).toString();

      messageBox.loadURL(componentURL);

      messageBox.once('ready-to-show', () => {
        messageBox.show();
      });
    })
    .catch((error) => {
      dialog.showErrorBox('Error', error);
      console.error('Error downloading update:', error);
      progressWindow.destroy();
    });
}
