import Vue from 'vue'
import Router from 'vue-router'
import VideoViewer from '@/components/VideoViewer'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoViewer',
      component: VideoViewer
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
