<template>
  <div class="full">
    <button @click="sendMessageToMainProcess">主进程与渲染进程间通信</button>
    <button @click="openNewWindow">打开新窗口</button>
    <button @click="sendMessageToRenderProcess">渲染进程与渲染进程通信</button>
  </div>
</template>

<script>
  import VoiceHandler from '../../lib/voice-handler.js'
  const { ipcRenderer } = $electron
  export default {
    name: 'voiceRecord',
    data () {
      return {
        voiceInstance: null,
        winInstance: null
      }
    },
    mounted() {
      this.voiceInstance = new VoiceHandler()
      if (!this.voiceInstance.isCanRecord) {
        this.$message.error('当前浏览器不支持录音')
        return
      }
      this.voiceInstance.getRecordList()

      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
      })
    },
    methods: {
      openNewWindow () {
        if (this.winInstance) return
        let filePath = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/test.html' : '../webPackage/main.html'
        $createWindow(filePath)
      },
      sendMessageToMainProcess () {
        ipcRenderer.send('asynchronous-message', 'ping')
      },
      sendMessageToRenderProcess () {
        $ipc.send('TEST_SEND_MESSAGE', 'hello world')
      }
    }
  }
</script>