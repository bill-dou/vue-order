import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Chart from '@/components/page/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos,
      meta: { keepAlive: true }
    },
    {
      path: '/Pos',
      name: 'Pos',
      component: Pos,
      meta: { keepAlive: true }
    },
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
