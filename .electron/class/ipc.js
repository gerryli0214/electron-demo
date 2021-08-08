const electron = require('electron')
const { remote, ipcRenderer } = electron
const { BrowserWindow } = remote

const currentWindow = remote.getCurrentWindow()

let ipc = {

  __listeners: [],
  //订阅消息
  on(channel, listener) {
    let callback = (e, payload) => listener(payload)

    this.__listeners.push(callback)
    ipcRenderer.on(channel, callback)

    return { channel, callback }
  },

  //移除监听器
  off(channel, listener) {
    ipcRenderer.removeListener(channel, listener)
  },

  //发布广播消息，默认不包含自己
  send(channel, payload, exclude = true) {
    //发给主进程
    ipcRenderer.send(channel, payload)

    //发给其他应用程序
    for (let win of BrowserWindow.getAllWindows()) {
      if (!(exclude && win === currentWindow)) {//判断是否发送给当前的App
        win.webContents.send(channel, payload)
      }

    }
  },
}
module.exports = ipc