const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('node:path');
const url = require('url');
let win;
let auth;
const createWindow = () => {
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

  if (isDev) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  win.once('ready-to-show', () => {
    win.show();
  });
};

app.whenReady().then(() => {
  ipcMain.on('kioskMode', () => {
    win.kiosk = !win.kiosk;
    if (win.kiosk === false) {
      win.loadURL(
        url.format({
          pathname: path.join(__dirname, 'index.html'),
          protocol: 'file:',
          slashes: true,
        })
      );
    } else {
      win.loadURL('about:blank');
      win.webContents.once('did-stop-loading', () => {
        win.webContents.executeJavaScript(`
  function setBodyBackground() {
    document.body.style.background = 'url(https://i.etsystatic.com/42091295/r/il/a2a028/4915276466/il_fullxfull.4915276466_q01d.jpg) no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
  }

  function addHeader() {
    const header = document.createElement('h1');
    header.style.color = 'white';
    header.style.textAlign = 'center';
    header.style.fontSize = '3rem';
    header.style.marginTop = '40vh';
    header.textContent = 'HI 😊';
    document.body.appendChild(header);
  }

  function loadImages() {
    const repeatCount = 6;
    for (let i = 0; i < repeatCount; i++) {
      const img = new Image();
      const imageUrl = 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/385050296_10224863003626503_6522126715045590030_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JMZxnPTPHQ8AX8WuzdZ&_nc_ht=scontent-iad3-2.xx&oh=00_AfCJ8eXASeepvw4TMFdo86Icopf07hDXVqhCe9h0eW3ICQ&oe=65EBFC0B';
      img.src = imageUrl;
      img.style.width = '500px';
      img.style.height = '500px';
      img.style.objectFit = 'cover';
      img.style.position = 'relative';
      img.style.zIndex = '99';

      img.onload = () => {
        document.body.appendChild(img);
      };
    }
  }

  function playAudio() {
    const eggurl = 'https://p.scdn.co/mp3-preview/9b7635464dc2caea3837fcc5680d0f5f5d39ab03?cid=1c95731b08e849f7a88a7348be1d3afd';
    const audioElement = new Audio();
    audioElement.controls = true;
    audioElement.autoplay = true;
    audioElement.hidden = true;
    
    const sourceElement = document.createElement('source');
    sourceElement.src = eggurl;
    sourceElement.type = 'audio/mp3';
    
    audioElement.appendChild(sourceElement);

    audioElement.oncanplaythrough = () => {
      document.body.appendChild(audioElement);
    };
  }

  setBodyBackground();
  addHeader();
  loadImages();
  playAudio();
`);
      });
    }
  });

  ipcMain.on('showDialog', (event, message) => {
    dialog.showErrorBox('Error', message);
  });

  ipcMain.on('oauthRedirect', (event, url) => {
    auth.loadURL(url);
    if (auth.webContents.isLoading()) {
      auth.webContents.once('did-stop-loading', () => {
        auth.show();
      });
    }
    const handleCallback = (event, url) => {
      if (!url.includes('success')) {
        return;
      }
      const [_baseUrl, fragment] = url.split('#');
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');
      if (accessToken) {
        auth.close();
        win.webContents.send('accessToken', accessToken);
        auth.webContents.removeAllListeners('did-start-navigation');
      }
    };
    auth.webContents.on('did-start-navigation', handleCallback);
    auth.on('closed', () => {
      auth.webContents.removeAllListeners('did-start-navigation');
    });
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  app.quit();
});
