/**
 * @description 处理前端录制音频
 */
class AudioProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    let chunk = this.covertBlock(inputs[0][0])
    this.port.postMessage(chunk)
    return true
  }

  covertBlock (buffer) {
    var incomingData = new Uint8Array(buffer);
    var i, l = incomingData.length;
    var outputData = new Float32Array(incomingData.length);
    for (i = 0; i < l; i++) {
        outputData[i] = (incomingData[i] - 128) / 128.0;
    }
    return outputData;
  }
}

registerProcessor('audio-processor', AudioProcessor)
