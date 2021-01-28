import Vue from 'vue'
import router from './router'
import App from './views/App.vue'
import './styles/public.css'
import vDebounceThrottle from 'v-debounce-throttle'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(vDebounceThrottle)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})