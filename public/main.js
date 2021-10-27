const { app, BrowserWindow } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1350,
    height: 800,
    webPreferences: {},
    backgroundColor: '#171923',
    show: false,
    titleBarStyle: 'hiddenInset',
  });

  win.loadURL('http://localhost:3000');
  win.once('ready-to-show', () => {
    win.show();
  });
};

(async () => {
  await app.whenReady();
  createWindow();
})();
