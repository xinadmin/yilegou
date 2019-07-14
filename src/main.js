// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from "axios"
import router from './router'
import mui from './assets/js/mui.min.js'
import './assets/css/base.css'
import './assets/css/mui.css'
import './assets/css/icons-extra.css'
// import { post, get, patch, put } from './utils/http'
import Dialog from '@/components/Dialog'
// 将axios添加到原型链上
// Vue.prototype.$axios = axios
// // 定义全局变量
// Vue.prototype.$post = post
// Vue.prototype.$get = get
// Vue.prototype.$patch = patch
// Vue.prototype.$put = put
// import './assets/css/ionic.min.css'
Vue.prototype.mui = mui
Vue.prototype.$Dialog = Dialog;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
