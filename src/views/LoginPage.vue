<template>
    <div id="login-page">
      <h1>Login Page</h1>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="input.username" placeholder="Username"/>
      </div>
        <br/>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="input.password" placeholder="Password"/>
      </div>
        <br/>
        <button type="submit" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import router from '../router/index.js'
export default ({
  name: 'LoginPage',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const username = this.input.username
      const password = this.input.password

      if (username !== '' && password !== '') {
        if (username === password) {
          router.push('info')
        } else {
          console.log('The Username or password is incorrect')
        }
      } else {
        console.log('Please Enter username and password')
      }
    },
    newUser: function () {
      this.$store.commit('addUser', {
        username: this.username,
        password: this.password
      })
    }
  }
})
</script>
