<template>
  <div id='app' class="full">
    <h1>Test 窗口</h1>
    <div class="message" v-text="msg"></div>
  </div>
</template>

<script>
  
  export default{
    name: 'test',
    data () {
      return {
        msg: ''
      }
    },
    mounted () {
      $ipc.on('TEST_SEND_MESSAGE', this.handleMessage)
      window.onbeforeunload = this.handleBeforeUnload
    },
    beforeDestroy () {
      $ipc.off('TEST_SEND_MESSAGE', this.handleMessage)
    },
    methods: {
      handleMessage (params) {
        this.msg = params
      },
      handleBeforeUnload () {
        $ipc.send('TEST_WINDOW_CLOSE')
      }
    }
  }
</script>