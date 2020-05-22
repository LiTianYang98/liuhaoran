// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../static/style.css'  // 外部static样式

//import iView from 'iview'
import 'iview/dist/styles/iview.css'
 
//Vue.use(iView)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
