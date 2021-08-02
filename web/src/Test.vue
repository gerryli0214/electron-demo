<template>
  <div id='app' class="full">
    123
  </div>
</template>

<script>
  
  export default{
    name: 'test',
    mounted () {
       $ipc.on('TEST_SEND_MESSAGE', this.handleMessage)
    },
    beforeDestroy () {
      $ipc.off('TEST_SEND_MESSAGE', this.handleMessage)
    },
    methods: {
      handleMessage (params) {
        console.log(params)
      }
    }
  }
</script>