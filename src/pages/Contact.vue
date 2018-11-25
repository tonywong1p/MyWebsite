<template>
  <v-card class="grey lighten-3 animated fadeIn">
    <div class="gradient darken-1">
      <v-layout wrap style="position:relative;top:30px">
        <v-flex xs12 d-flex justify-center align-center>
          <div style="text-align:center" class="white--text pb-5">
            <h3 class="display-1 mb-2">Contact</h3>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-card-title class="px-5">
      <v-layout wrap>
        <v-flex xs12 md6 class="mt-2">
              <h3 class="headline">Keep in <span class="blue--text">Touch</span></h3>
          <iframe height="200" frameborder="0" style="width:100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3_kQiSHZMWXVyf4beMIqhdXExt-CvKA0
              &q=Hong+Kong" allowfullscreen></iframe>
          <v-list class="transparent">
            <v-list-tile avatar v-for="item in items" :key="item.id">
              <v-list-tile-avatar>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>{{item.value}}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            icon: "person",
            value: new Date().getFullYear() - 1992 + " years old"
          },
          {
            icon: "location_on",
            value: 'Hong Kong'
          },
          {
            icon: "phone",
            value: "(+852) 6771-0852"
          },
          {
            icon: "email",
            value: "tonywong1p@msn.com"
          }
        ]
      }
    }
  }
</script>
