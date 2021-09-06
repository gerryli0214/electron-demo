<template>
  <div class="full">
    <!-- <button>开始录制</button> -->
    <el-form :inline='true' size="small">
      <el-form-item label="录音设备：">
        <el-select placeholder="请选择..." v-model="recordParams.deviceId">
          <el-option v-for="(item, index) in recordList" :key="index" :value="item.deviceId" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <div class="container">
      <button @click="startRecord">开始</button>
      <button @click='stopRecord'>结束</button>
      <button @click='openFile'>打开文件</button>
    </div>
  </div>
</template>

<script>
  import VoiceHandler from '../../lib/voice-handler.js'
  const { shell } = $electron
  export default {
    name: 'voiceRecord',
    data () {
      return {
        voiceInstance: null,
        recordList: [],
        recordParams: {
          deviceId: ''
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      async init () {
        this.voiceInstance = new VoiceHandler()
        this.recordList = await this.voiceInstance.getRecordList()
        if (this.recordList.length > 0) {
          this.recordParams.deviceId = this.recordList[0].deviceId
        }
      },
      startRecord () {
        this.voiceInstance.start()
      },
      stopRecord () {
        this.voiceInstance.stop()
      },
      openFile () { // 用系统默认程序打开文件
        // shell.openExternal('https://baidu.com')
        shell.openPath('D:\\现代Web开发中TypeScript的价值体现.pptx')
      }
    }
  }
</script>

<style scoped lang='scss'>
.full{
  box-sizing: border-box;
  padding: 24px;
}
</style>