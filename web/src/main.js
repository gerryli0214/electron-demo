import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './styles/common.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI);

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})