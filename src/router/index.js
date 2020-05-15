import Vue from 'vue'
import Router from 'vue-router'
import Li1 from '@/components/Li-1'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [{
    path: '/li-1', name: 'Li-1', component: Li1
  }]
})
