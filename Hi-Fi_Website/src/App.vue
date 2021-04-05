<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="blue lighten-3"
      flat
    >
      <v-img
        class="mx-2"
        src="https://www.transparentpng.com/thumb/tool/tools-hammer-spanner-pictures-11.png"
        max-height="40"
        max-width="40"
        contain
      >
      </v-img>
      <v-toolbar-title class="ml2" >
        <span class="display-1 text-uppercase font-weight-medium">ARFiX</span>
        <span class="display-1 text-uppercase font-weight-medium">IT</span>
      </v-toolbar-title>

      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'cyan darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="cyan darken-2"
      >
        <v-tab @click="$router.push('/about')">
          About
        </v-tab>
        <v-tab v-if="isLogged" @click="$router.push('/home')">
          Home
        </v-tab>
        <v-tab v-if="!isLogged" @click="logUser">
          Login
        </v-tab>
        <v-tab v-if="!isLogged" @click="$router.push('/signup')">
          Sign Up
        </v-tab>
        <v-tab v-if="isLogged" @click="logUserOut">
          Logout
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="blue darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="blue lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  data: () => ({
    isLogged: false
  }),
  mounted() {
    this.isLogged = localStorage.logged;
  },
  methods: {
    logUser() {
      this.$router.push('/login');
    },
    logUserOut() {
      this.isLogged = false;
      this.$router.push('/login');
    }
  }
};
</script>
