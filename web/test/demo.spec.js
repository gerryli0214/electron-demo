import Vue from 'vue'
import ElementUI from 'element-ui'
import TestDemo from '../src/components/test-demo.vue'
import { shallowMount } from '@vue/test-utils'

Vue.use(ElementUI)

describe('Test test-demo.vue', function () {
  this.timeout(0)
  const wrapper = shallowMount(TestDemo)
  wrapper.vm.count = 1
  it('should summary === 1', function () {
    expect(wrapper.vm.summary).to.be(1)
  });
})