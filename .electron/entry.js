const { app, BrowserWindow, Notification, dialog } = require('electron')
const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
const path = require('path')
// const minimist = require('minimist')

// const args = minimist(process.argv.slice(1))

global.shareData = {
    $currentWindow: null,
    $electron: {
        Notification,
        dialog
    }
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function init () {
    createWindow()
    installExtension(VUEJS_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err))
}

function getDefaultOption () {
    return {
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // 允许渲染进程使用node
            enableRemoteModule: true, // 可以启用webRTC
            webSecurity: false, // 禁用浏览器安全协议，否则打不开本地文件
            preload: path.join(__dirname, 'preload.js')
        }
    }
}

app.on('ready', () => {
    init()
})

function createWindow (options) {
    let currentOptions = Object.create(getDefaultOption())
    Object.assign(currentOptions, options)
    console.log('打开页面')
    const win = new BrowserWindow(currentOptions)
    // win.loadFile('index.html')
    win.loadURL('http://localhost:8080')
    // 打开开发者工具
    win.webContents.openDevTools({
        mode: 'bottom'
    })
}
