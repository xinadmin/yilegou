// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/js/mui.min.js'
import './assets/css/base.css'
import './assets/css/mui.css'
import './assets/css/icons-extra.css'
// import './assets/css/ionic.min.css'
Vue.config.productionTip = false
Vue.prototype.mui = mui
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
