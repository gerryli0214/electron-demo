const { remote, ipcRenderer } = require('electron')
const ipc = require('./class/ipc')

const shareData = remote.getGlobal('shareData')

global.$currentWindow = shareData.$currentWindow

shareData.$electron.ipcRenderer = ipcRenderer

global.$electron = shareData.$electron

global.$createWindow = shareData.$createWindow

global.$ipc = ipc
