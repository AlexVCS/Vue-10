<template>
  <div id="app">
    <div class="nav">
        <router-link class="link" to="/">Home</router-link> 
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/members">Members</router-link>
    </div>
    <router-view />
  </div>
</template>



<style>
:root {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav {
    display: flex;
    justify-content: center;
}

.link {
    padding: 3em;
    text-decoration: none;
    color: #000;
}
</style>
