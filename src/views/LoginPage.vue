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
        <button v-on:click="login()" class="button">Login</button>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
        <p v-if="showOutput">Please Enter username and password</p>
    </div>
</template>

<script>
import router from '../router/index.js'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['allUsers'])
  },
  methods: {
    login () {
      /* this.$store.dispatch('LOGIN', {
        username: this.input.username,
        password: this.input.password
      })
        .then(success => {
          this.$router.push('/')
        }) */
      const username = this.input.username
      const password = this.input.password

      if (username !== '' && password !== '') {
        if (username === 'saikiran' && password === 'pass@123') {
          // store the username and password in vuex store
          this.$store.dispatch('LOGIN', {
            username: username,
            password: password
          })
          const name = this.$store.getters.storeUsers.username
          const password1 = this.$store.getters.storeUsers.password
          console.log(name)
          console.log(password1)
          router.push('info')
        } else {
          console.log('The Username or password is incorrect')
        }
      } else {
        console.log('Please Enter username and password')
        this.showOutput = true
      }
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
