const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('node:path')
const url = require('url');
let win;
let auth;


const createWindow = () => {
  auth = new BrowserWindow({
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
    title: 'Email Assistant - Ashland Auction',
  });

  win = new BrowserWindow({
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
  ipcMain.on('showDialog', (event, message) => {
    dialog.showErrorBox('Error', message);
  });
  ipcMain.on('oauthRedirect', (event, message) => {
    auth.loadURL(message.url);
    auth.show();
    auth.webContents.on('did-redirect-navigation', (event, url) => {
      const token = url.split('access_token=')[1].split('&')[0];
      win.webContents.send('oauth_redirect', token);
    });
    auth.hide();
  });
  createWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function() {
  app.quit()
})
