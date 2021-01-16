import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    component: () => import('./views/Layout.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export default router