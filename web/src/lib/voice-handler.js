/**
 * @description 前端处理音频数据
 */
import { createWavFromBuffer } from './encode-wav'
const fs = require('fs')
const path = require('path')

class VoiceHandler {
  constructor () {
    this.init()
  }

  async init () {
    this.PENDING = 'pending'
    this.PAUSE = 'pause'
    this.STOP = 'stop'
    this.RECORDING = 'recording'
    // web端录音需要用户权限授权，仅当localhost && https服务下可用
    this.isCanRecord = !!window.navigator.mediaDevices
    // 音频处理上下文
    this.audioCtx = new AudioContext()
    this.sampleRate = this.audioCtx.sampleRate
    // 缓存录制音频
    this.cacheBuffer = new Int16Array()
    this.audioFilePath = path.resolve(__dirname, '/audio')
    if (!fs.existsSync(this.audioFilePath)) {
      fs.mkdirSync(this.audioFilePath)
    }
    // 当前录音状态
    this.recordState = this.PENDING
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
      const scriptProcessor = new AudioWorkletNode(this.audioCtx, 'audio-processor')
      mediaStream.connect(scriptProcessor)
      scriptProcessor.port.onmessage = this.handleRecordAudioBuffer.bind(this)
      this.scriptProcessor = scriptProcessor
      this.audioTracks = stream.getAudioTracks()
      this.recordState = this.RECORDING
    })
  }

  handleRecordAudioBuffer (event) {
    this.cacheBuffer = this.concatBuffer(this.cacheBuffer, event.data)
  }

  concatBuffer (buffer1, buffer2) {
    let newBuffer = new Int16Array(buffer1.length + buffer2.length)
    newBuffer.set(buffer1)
    newBuffer.set(buffer2, buffer1.length)
    return newBuffer
  }

  pause () {
    this.recordState = this.PAUSE
    this.sendMessage(this.recordState)
    this.audioCtx.suspend()
  }
  // 线程间通信
  sendMessage (message) {
    if (!this.scriptProcessor) throw new Error('未找到音频处理上下文！')
    this.scriptProcessor.port.postMessage(message)
  }

  resume () {
    this.recordState = this.RECORDING
    this.sendMessage(this.recordState)
    this.audioCtx.resume()
  }

  stop () {
    this.audioCtx.close()
    if (this.audioTracks.length > 0) this.audioTracks[0].stop()
    let audioBuffer = createWavFromBuffer(this.cacheBuffer, this.sampleRate)
    fs.writeFile(path.resolve(this.audioFilePath, `${Date.now()}.wav`), audioBuffer._buffer, err =>{
      if (err) {
        console.error(err)
      } else {
        console.log('文件写入成功!')
      }
    })
  }

}

export default VoiceHandler