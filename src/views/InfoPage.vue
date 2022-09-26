<template>
    <div id="info">
    <h1>This is Info page</h1>
    <post-details></post-details>
    </div>
</template>

<script>
import PostDetails from '../components/PostDetails.vue'
export default ({
  name: 'InfoPage',
  components: {
    PostDetails
  }
})
</script>
