const { contextBridge, ipcRenderer } = require('electron');

// Expose functionality to the renderer process
contextBridge.exposeInMainWorld('api', {
  // Example: Add functions or variables to expose here
  example: () => 'Hello from preload!',
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
});
