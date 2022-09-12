import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    newUser: (state) => state.users.unshift()
  },
  actions: {
    async LogIn ({ commit }, state) {
      const response = await axios.post('jsonplaceholder.typicode.come/users', state.users)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      commit('newUser', response.data)
    }
  },
  modules: {
  }
})
