import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.prototype.axios=axios
Vue.use(MintUI)
Vue.use(Vant);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
