<template>
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
              <br /><br /><br /><br />
              <v-row 
                align="center"
                justify="center"
              >
                <v-img
                  class="mx-2"
                  src="https://www.transparentpng.com/thumb/tool/tools-hammer-spanner-pictures-11.png"
                  max-height="200"
                  max-width="200"
                  contain
                >
                </v-img>
              </v-row>
              <br /><br /><br />
                  <p class="font-italic text-xl-center"> ARFIX solutions is an app intended to help people solve their home appliance issues
                    with the help of an expert using Augmented Reality. Users can utilise this application
                    to help solve their appliance woes.
                  </p>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
}
</script>

<style>
  p {
    font-size: 150%;
  }
</style>

