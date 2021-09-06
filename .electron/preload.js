(function () {
  const { remote, ipcRenderer, desktopCapturer, shell } = require('electron')
  const ipc = require('./class/ipc.js')
  const shareData = remote.getGlobal('shareData')

  global.$currentWindow = remote.getCurrentWindow()

  shareData.$electron.ipcRenderer = ipcRenderer
  shareData.$electron.desktopCapturer = desktopCapturer
  shareData.$electron.shell = shell

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
