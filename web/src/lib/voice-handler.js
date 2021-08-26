/**
 * @description 前端处理音频数据
 */
class VoiceHandler {
  constructor () {
    this.init()
  }

  async init () {
    // web端录音需要用户权限授权，仅当localhost && https服务下可用
    this.isCanRecord = !!window.navigator.mediaDevices
    // 音频处理上下文
    this.audioCtx = new AudioContext()
  }
  // 获取录音设备列表
  async getRecordList () {
    if (!this.isCanRecord) return []
    let devices = await window.navigator.mediaDevices.enumerateDevices()
    let result = []
    for (let index = 0; index < devices.length; index++) {
      const element = devices[index];
      if (element.kind !== 'audioinput') continue
      if (result.some(vv => vv.groupId === element.groupId)) continue
      let item = {
        deviceId: element.deviceId,
        groupId: element.groupId,
        label: element.label
      }
      result.push(item)
    }
    return result
  }

  start (deviceId) {
    navigator.mediaDevices.getUserMedia({
      audio: {
        exact: true,
        deviceId
      }
    }).then(async stream => {
      let mediaStream = this.audioCtx.createMediaStreamSource(stream)
      await this.audioCtx.audioWorklet.addModule('js/audio-processor.js').catch(err => {
        console.error(err)
      })
      const ScriptProcessor = new AudioWorkletNode(this.audioCtx, 'audio-processor')
      debugger
      mediaStream.connect(ScriptProcessor)
    })
  }

}

export default VoiceHandler