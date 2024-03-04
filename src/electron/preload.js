const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // setTitle: (title) => ipcRenderer.send('set-title', title)
  oauthRedirect: (url) => ipcRenderer.send('oauthRedirect', url),
  showDialog: (message) => ipcRenderer.send('showDialog', message),
})
