import Vue from 'vue'
import Router from 'vue-router'

import Li1 from '@/components/Li-1'
import Li2 from '@/components/Li-2'
import Li3 from '@/components/Li-3'
import Li4 from '@/components/Li-4'
import Li211 from '@/components/Li-211'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [{
    path: '/li-1', name: 'Li-1', component: Li1
  },{
    path: '/li-2', name: 'Li-2', component: Li2  
  },{
    path: '/li-3', name: 'Li-3', component: Li3
  },{
    path: '/li-4', name: 'Li-4', component: Li4
  },{
    path: '/li-211',name: 'Li-211', component: Li211
  }]
})
