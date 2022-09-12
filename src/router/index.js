import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import InfoPage from '../views/InfoPage.vue'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:8000/api/'

const routes = [
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/info',
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
