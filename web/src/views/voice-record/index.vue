<template>
  <div class="full">
    
  </div>
</template>

<script>
  import VoiceHandler from '../../lib/voice-handler.js'
  export default {
    name: 'voiceRecord',
    data () {
      return {
        voiceInstance: null
      }
    },
    mounted() {
      this.voiceInstance = new VoiceHandler()
      if (!this.voiceInstance.isCanRecord) {
        this.$message.error('当前浏览器不支持录音')
        return
      }
      this.voiceInstance.getRecordList()
    },
  }
</script>