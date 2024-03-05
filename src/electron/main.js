const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('node:path')
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
        auth.webContents.removeAllListeners('did-start-navigation'); //
      }
    };
    auth.webContents.on('did-start-navigation', handleCallback);
    auth.on('closed', () => {
      auth.webContents.removeAllListeners('did-start-navigation');
    });
  });



  createWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function() {
  app.quit()
})
