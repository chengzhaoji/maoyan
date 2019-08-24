import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Footer from "./components/footer/Footer.vue"
import Header from "./components/header/Header.vue"
import Home1 from "./views/Home/Home1.vue"
import Movie from "./views/Movie/Movie.vue"
import Theater from "./views/Theater/Theater.vue"
import Cinema from "./views/Cinema/Cinema.vue"
import Mine from "./views/Mine/Mine.vue"
import Search from "./views/Search"
import Home2 from "./views/Home2.vue"

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/Search', component: Search },
    { path: '/Home2', component: Home2 },
    { path: '/Home1', component: Home1 },
    { path: '/Movie', component: Movie },
    { path: '/Theater', component: Theater },
    { path: '/Cinema', component: Cinema },
    { path: '/Mine', component: Mine },
    { path: '/Header', component: Header },
    { path: '/Footer', component: Footer },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
