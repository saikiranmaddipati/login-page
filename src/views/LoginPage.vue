<template>
    <div id="login-page">
        <h1>Login Page</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username"/>
        <input type="password" name="password" v-model="input.password" placeholder="Password"/>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>

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
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.input.password) {
          console.log('Login successful')
        } else {
          console.log('The Username or password is incorrect')
        }
      } else {
        console.log('Please Enter username and password')
      }
    }
  }
})
</script>
