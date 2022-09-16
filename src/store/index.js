import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        username: null,
        password: null
      }
    ]
  },
  getters: {
    storeUsers: state =>
      state.users
  },
  mutations: {
    addUser (state, payload) {
      state.users.username = payload.username
      state.users.password = payload.password
    }
  },
  actions: {
    LOGIN: ({ commit }, payload) => {
      commit('addUser', payload)
    }
  },
  modules: {
  }
})
