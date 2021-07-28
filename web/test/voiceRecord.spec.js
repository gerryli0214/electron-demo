import Vue from 'vue'
import ElementUI from 'element-ui'
import VoiceRecord from '../src/views/voice-record/index.vue'
import { shallowMount } from '@vue/test-utils'

Vue.use(ElementUI)

describe('Test VoiceRecord.vue', function () {
  this.timeout(0)
  const wrapper = shallowMount(VoiceRecord)
  it('should not record in server side', function () {
    expect(wrapper.vm.voiceInstance.isCanRecord).to.be(false)
  })
})