const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  oauthRedirect: (clientId) => ipcRenderer.send('oauthRedirect', clientId),
  showDialog: (message) => ipcRenderer.send('showDialog', message),
  kioskMode: () => ipcRenderer.send('kioskMode'),
  onTokens: (callback) => {
    // Setup listener for the 'accessToken' event
    ipcRenderer.on('onTokens', callback);
  },
  removeAccessTokenListener: (callback) => {
    // Remove a specific listener for the 'accessToken' event
    ipcRenderer.removeListener('onTokens', callback);
  },
  updateApp: (downloadInfo) => ipcRenderer.send('updateApp', downloadInfo),
  downloadProgress: (callback) => {
    ipcRenderer.on('downloadProgress', callback);
    return () => {
      ipcRenderer.removeListener('downloadProgress', callback);
    };
  },
  refreshToken: ({ clientId, refreshToken, accessToken }) =>
    ipcRenderer.send('refreshToken', { clientId, refreshToken, accessToken }),
  restartApp: () => ipcRenderer.send('restartApp'),
  onLogout: (callback) => {
    ipcRenderer.on('onLogout', callback);
    return () => {
      ipcRenderer.removeListener('onLogout', callback);
    };
  },
});
