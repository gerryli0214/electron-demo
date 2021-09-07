/**
 * @description 处理前端录制音频
 */
class AudioProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    if (inputs.length === 0 || inputs[0].length === 0) return
    let chunk = this.covertBlock(inputs[0][0])
    this.port.postMessage(chunk)
    return true
  }

  covertBlock (buffer) {
    let convertBuffer = new Int16Array(buffer.length)
    for (let i = 0, len = buffer.length; i < len; i++) {
      convertBuffer[i] = buffer[i] > 0 ? parseInt(buffer[i] * (2 ** 16 - 1)) : parseInt(buffer[i] * (2 ** 16))
    }
    return convertBuffer
  }
}

registerProcessor('audio-processor', AudioProcessor)
