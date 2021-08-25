<template>
  <div class="full">
    <button @click="sendMessageToMainProcess">主进程与渲染进程间通信</button>
    <button @click="openNewWindow">打开新窗口</button>
    <button @click="sendMessageToRenderProcess">渲染进程与渲染进程通信</button>
    <div class="container">
      <Carousel v-model="value1" style="width: 500px;height: 200px;background: #ccc;">
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
  import VoiceHandler from '../../lib/voice-handler.js'
  const { ipcRenderer, Menu, MenuItem } = $electron
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

      $ipc.on('TEST_WINDOW_CLOSE', this.handleTestWindowClose)

      var menu = new Menu();
      menu.append(new MenuItem({ label: '测试1', click: function() { console.log('item 1 clicked'); } }));
      menu.append(new MenuItem({ type: 'separator' }));
      menu.append(new MenuItem({ label: '测试2', type: 'checkbox', checked: true }));

      window.oncontextmenu = function (e) {
        e.preventDefault();
        menu.popup($currentWindow);
      }
    },
    methods: {
      openNewWindow () {
        if (this.winInstance) {
          alert('Test窗口已打开')
          this.winInstance.moveTop()
          return
        }
        let filePath = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/test.html' : '../resources/app.asar/webPackage/test.html'
        this.winInstance = $createWindow(filePath)
      },
      sendMessageToMainProcess () {
        ipcRenderer.send('asynchronous-message', 'ping')
      },
      sendMessageToRenderProcess () {
        $ipc.send('TEST_SEND_MESSAGE', 'hello world')
      },
      handleTestWindowClose () {
        this.winInstance = null
      }
    }
  }
</script>