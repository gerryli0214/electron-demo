/**
 * @description 前端处理音频数据
 */
class VoiceHandler {
  constructor () {
    this.init()
  }

  init () {
    this.voiceRecordDeviceList = []
    // web端录音需要用户权限授权，仅当localhost && https服务下可用
    this.isCanRecord = !!window.navigator.mediaDevices
  }

  async getRecordList () {
    if (!this.isCanRecord) return this.voiceRecordDeviceList
    let devices = await window.navigator.mediaDevices.enumerateDevices()
    let result = []
    for (let index = 0; index < devices.length; index++) {
      const element = devices[index];
      if (!element.audioinput) continue
      let pattern = new RegExp()
      let label = element.label.replace()
      let item = {
        groupId: element.groupId,
        label
      }
    }
  }

}

export default VoiceHandler