import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../Layout.vue'),
    children: [
      {
        path: 'voice-record',
        component: () => import('../views/voice-record/index.vue'),
        meta: {
          title: '录制声音'
        }
      },
      {
        path: 'screen-record',
        component: () => import('../views/screen-record/index.vue'),
        meta: {
          title: '录制屏幕'
        }
      },
      {
        path: 'video-record',
        component: () => import('../views/video-record/index.vue'),
        meta: {
          title: '录制视频'
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

export default router