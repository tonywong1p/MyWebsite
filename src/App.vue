<template>
  <v-app>
    <v-content class="grey lighten-2">
      <v-container>
        <v-layout wrap justify-center>
          <v-flex xs12 md10 lg8>
            <v-toolbar class="elevation-0 transparent">
              <v-toolbar-title>Tony <span class="blue--text">Wong</span></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn v-for="page in pages" :key="page" class="transparent elevation-0 grey--text" :class="{'selected':$route.name==page}" @click="navigateTo(page)">{{page}}</v-btn>
            </v-toolbar>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        pages: ['Home', 'Resume', 'Portfolio', 'Contact']
      };
    },
    methods: {
      navigateTo(page) {
        this.$router.push({
          name: page
        })
      }
    }
  };
</script>

<style scoped>
  .selected {
    border-bottom: none !important;
    background-color: rgb(252, 205, 50) !important;
    color: black !important
  }
  
  .v-btn {
    border-radius: 20px;
  }
</style>

<style>
  .v-card {
    border-radius: 15px;
  }
  
  .gradient {
    background: #1488CC;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2B32B2, #1488CC);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
