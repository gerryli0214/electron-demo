(function () {
  const { remote, ipcRenderer } = require('electron')
  const ipc = require('./class/ipc')
  const shareData = remote.getGlobal('shareData')

  global.$currentWindow = remote.getCurrentWindow()

  shareData.$electron.ipcRenderer = ipcRenderer

  global.$electron = shareData.$electron

  global.$createWindow = shareData.$createWindow

  global.$ipc = ipc

  window.addEventListener('keyup', e => {
    if (e.ctrlKey && e.keyCode === 80) {
      let currentWindow = remote.getCurrentWindow()
      currentWindow.webContents.toggleDevTools()
    }
  })
})()
