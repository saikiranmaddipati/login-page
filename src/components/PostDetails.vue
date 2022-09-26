<template>
    <div>
        <h1>post details</h1>
        <div v-for="post in postDetails" :key="post.id">
            <div class="background-container mb-3">
              <h1 class="heading">{{post.id}}. {{post.title}}</h1>
              <p class="paragraph">{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'PostDetails',
  data () {
    return {
      postDetails: []
    }
  },
  mounted () {
    this.getPostDetails()
  },
  methods: {
    getPostDetails () {
      Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.postDetails = response.data
      })
    }
  }
}
</script>

<style scoped>
.background-container{
    background-color: #ffffff;
    margin: 15px;
    padding: 20px;
    border-width: 2px;
}
.heading{
    font-family: "Roboto";
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
}
.paragraph{
    font-family: "Roboto";
    font-size: 25px;
    color: lightblue;
    text-align: left;
}
</style>
