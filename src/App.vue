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
      <v-toolbar-title @click="$router.push('/')" class="ml2" >
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
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="blue darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="blue lighten-2">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              color="blue lighten-3"
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              color="blue lighten-3"
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
};
</script>
