// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// jquery
import $ from 'jquery'  
Vue.prototype.$ = $
// 引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// 引入手机端适配css
import './assets/css/normalize.css'
// 引入国际化插件
import i18n from './i18n/i18n'
// 引入请求路径
import RequestApi from '../config/urlconfig.js'  
Vue.prototype.reqpath = RequestApi.requrl()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
