const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const url = require('url');
let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 1350,
    height: 800,
    webPreferences: {
      nodeIntegrationtion: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#171923',
    show: false,
    titleBarStyle: 'hiddenInset',
    minWidth: 1200,
    title: 'Email Assistant - Ashland Auction',
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  win.once('ready-to-show', () => {
    win.show();
  });
};

(async () => {
  await app.whenReady();
  createWindow();
})();

ipcMain.on('show-dialog', (event, message) => {
  dialog.showErrorBox('Error', message.msg);
});
