import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { reject, resolve } from 'core-js/fn/promise'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        username: 'kiran',
        password: 'kiran'
      },
      {
        username: 'sai',
        password: 'sai'
      }
    ]
  },
  getters: {
    allUsers: (state) => state.users
  },
  mutations: {
    newUser: (state, user) => state.users.unshift(user)
  },
  actions: {
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios.post('login_check', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
