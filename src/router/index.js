import Vue from 'vue'
import Router from 'vue-router'

import Li1 from '@/components/Li-1'
import Li2 from '@/components/Li-2'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [{
    path: '/li-1', name: 'Li-1', component: Li1
  },{
    path: '/li-2', name: 'LI-2', component: Li2  
  }]
})
