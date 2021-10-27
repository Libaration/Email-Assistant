const { app, BrowserWindow } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
  });

  win.loadURL('http://localhost:3000');
  win.webContents.openDevTools();
};

(async () => {
  await app.whenReady();
  createWindow();
})();
