const { remote } = require('electron')

const shareData = remote.getGlobal('shareData')

global.$currentWindow = shareData.$currentWindow

global.$electron = shareData.$electron