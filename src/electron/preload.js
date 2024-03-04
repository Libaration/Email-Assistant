const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  oauthRedirect: (url) => ipcRenderer.send('oauthRedirect', url),
  showDialog: (message) => ipcRenderer.send('showDialog', message),
  onAccessToken: (callback) => {
    // Setup listener for the 'accessToken' event
    ipcRenderer.on('accessToken', callback);
  },
  removeAccessTokenListener: (callback) => {
    // Remove a specific listener for the 'accessToken' event
    ipcRenderer.removeListener('accessToken', callback);
  },
});
