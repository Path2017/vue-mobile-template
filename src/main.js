// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入jquery
import $ from 'jquery'  
Vue.prototype.$ = $
// 引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// 引入vue-i18n
import VueI18n from 'vue-i18n'  
Vue.use(VueI18n)
const i18n = new VueI18n({  
  locale: 'zh', // 语言标识  
  messages: {  
    'zh': require('./assets/lang/zh'),  
    'en': require('./assets/lang/en')  
  }  
})
// 引入urlconfig.js
import RequestApi from '../config/urlconfig.js'  
Vue.prototype.reqpath = RequestApi.requrl()  
// 引入手机端适配css
import './assets/css/normalize.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
