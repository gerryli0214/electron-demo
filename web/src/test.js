import Vue from 'vue'
import Test from './Test.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './styles/common.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(Test)
})