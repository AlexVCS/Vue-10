<template>
  <div class="home">
    <HelloWorld msg="Welcome to St. Pete Yoga Club"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>