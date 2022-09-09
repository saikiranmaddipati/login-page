import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        username: 'saikiran',
        password: 'saikiran'
      }
    ]
  },
  getters: {
    users (state) {
      return state.users
    }
  },
  mutations: {
    addUser (state, newUser) {
      if (typeof newUser.username === 'string' && typeof newUser.password === 'string') {
        state.users.push({
          username: newUser.username,
          password: newUser.password
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
