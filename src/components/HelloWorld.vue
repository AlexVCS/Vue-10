<template>
  <v-container>
    <v-row class="text-center">
    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mt-3 mb-1">
        {{ msg }}
      </h1>
    </v-col>
      <v-col cols="12">
        <div class="hello">
          <img class="yogaPic" src="../assets/yogaPose.jpg" alt="Woman doing a yoga pose">
          <p>
            We provide the best yoga information for folks in the Tampa Bay Florida area!
          </p>
        </div>
      </v-col>


      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Want to do Yoga at Home?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in yogaAtHome"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      yogaAtHome: [
        {
          text: 'Beginner Guide to Home Yoga',
          href: 'https://yogainternational.com/article/view/the-beginners-guide-to-home-yoga-practice',
        },
        {
          text: 'Yoga with Adriene',
          href: 'https://www.youtube.com/user/yogawithadriene',
        },
        {
          text: 'Boho Beautiful',
          href: 'https://www.youtube.com/c/bohobeautiful/featured',
        },
      ],
    }),
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