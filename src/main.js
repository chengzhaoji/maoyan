import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import Vant from 'vant'
import VueJsonp from 'vue-jsonp'
import { post, get, patch, put } from './http'
// import Vconsole from 'vconsole'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import './assets/stylus/reset.styl'
import 'amfe-flexible'
var VueTouch = require('vue-touch')
Vue.use(VueJsonp)

Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.use(Vant)

Vue.config.productionTip = false
// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line no-unused-vars
//   let vConsole = new Vconsole()
// }
Vue.use(VueTouch, { name: 'v-touch' })
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
