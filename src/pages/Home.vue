<template>
  <div>
    <v-card class="grey lighten-3">
      <div class="gradient darken-1 mb-3">
        <v-layout wrap style="position:relative;top:30px">
          <v-flex xs12 sm6 d-flex justify-center>
            <v-img style="max-width:300px" class="elevation-3" src="https://avatars2.githubusercontent.com/u/25936020?s=460&v=4"></v-img>
          </v-flex>
          <v-flex xs12 sm6 d-flex justify-center align-center>
            <div style="text-align:center" class="white--text pb-5">
              <h3 class="display-1 mb-2">Tony, Wong Siu Fai</h3>
              <span class="title">IT Project Manager</span>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <v-card-title class="pa-5">
        <v-layout>
          <v-flex xs12 sm6 class="pr-3">
            <h3 class="headline">About <span class="blue--text">me</span></h3>
            <p class="body-1">Hi! My name is Tony, and I am from Hong Kong! I am now working in a IT company in HK Science Park with my nice colleagues. I was having a good time, but I have to leave since I am ready to graduate from my master degree (IT Management) and seek
              for new challenges.</p>
            <v-btn>Download Resume</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-list class="transparent">
              <v-list-tile avatar v-for="item in items" :key="item">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            icon: "person",
            value: "26 years old"
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
      };
    }
  };
</script>