import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import InfoPage from '../views/InfoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'info-page',
    component: InfoPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
