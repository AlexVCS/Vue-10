<template>
  <div class="hello">
    <img class="yogaPic" src="../assets/yogaPose.jpg" alt="Woman doing a yoga pose">
    <h1>{{ msg }}</h1>
    <p>
      We provide the best yoga information for folks in the Tampa Bay Florida area!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
}
.yogaPic {
  border-radius: .5em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
