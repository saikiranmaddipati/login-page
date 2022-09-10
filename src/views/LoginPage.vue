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
        <button type="submit" v-on:click="login()" class="button">Login</button>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
        <p v-if="showOutput">Please Enter username and password</p>
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
      },
      showError: false,
      showOutput: false
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
          this.showError = true
        }
      } else {
        console.log('Please Enter username and password')
        this.showOutput = true
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

<style scoped>
.button{
  height: 40px;
  width: 120px;
  background-color: blue;
  font-family: "Roboto";
  font-size: 20px;
  border-radius: 10px
}
</style>
