<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div>
        <h1 class="header">SPYC</h1>
      </div>

      <div class="nav">
        <router-link class="link" to="/">Home</router-link> 
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/members">Members</router-link>
      </div>

      <v-spacer></v-spacer>
        <v-switch
          :value="darkMode"
          @change="toggleDarkMode"
          :label="`toggle ${switchLabel} mode`"
          class="colorSwitch"
        ></v-switch>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    darkMode: false
  }),
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
    computed: {
      switchLabel: function () {
        return this.darkMode ? 'light' : 'dark'
      }
    }
};
</script>

<style scoped>
:root {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
    display: flex;
    justify-content: center;
    align-content: center;
}
.link {
    padding: 3em;
    text-decoration: none;
    color: #fff;
}

@media (max-width: 715px) {
  .header {
    font-size: 1.5em;
  }
  .link {
    padding: .5em;
  }
}
</style>