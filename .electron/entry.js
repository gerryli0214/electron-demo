const { app, BrowserWindow, Notification, dialog, ipcMain } = require('electron')
// const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
const path = require('path')
const minimist = require('minimist')
const fs = require('fs')

const args = minimist(process.argv.slice(1))

global.shareData = {
    $currentWindow: null,
    $electron: {
        Notification,
        dialog
    },
    $nodejs: {
        fs,
        path
    },
    $createWindow: createWindow
}
// 设置开机自启动
if (args.mode !== 'development') {
    app.setLoginItemSettings({
        openAtLogin: true,
        openAsHidden:false,
        path: process.execPath
    })
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
    let filePath = args.mode === 'development' ? 'http://localhost:8080/main.html' : path.resolve(__dirname, '../webPackage/main.html')
    createWindow(filePath)
    // installExtension(VUEJS_DEVTOOLS)
    // .then((name) => console.log(`Added Extension:  ${name}`))
    // .catch((err) => console.log('An error occurred: ', err))
}

function getDefaultOption () {
    return {
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // 允许渲染进程使用node
            enableRemoteModule: true, // 可以启用webRTC
            webSecurity: false, // 禁用浏览器安全协议，否则打不开本地文件
            preload: path.resolve(__dirname, './preload.js')
        }
    }
}

app.on('ready', () => {
    init()
})

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
})

const httpPattern = /^http:\/\//

function createWindow (filePath, options) {
    let currentOptions = Object.create(getDefaultOption())
    Object.assign(currentOptions, options)
    console.log('打开页面')
    if (!httpPattern.test(filePath)) {
        filePath = path.resolve(__dirname, filePath)
    }
    const win = new BrowserWindow(currentOptions)
    console.log(`load file path-----> ${filePath}`)
    win.loadURL(filePath)
    // 打开开发者工具
    if (args.mode === 'development') {
        win.webContents.openDevTools({
            mode: 'bottom'
        })
    }
    return win
}
