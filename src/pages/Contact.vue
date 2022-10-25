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
    <v-card-title class="px-0">
      <v-layout wrap>
        <v-flex xs12 md6 class="mt-2 px-4">
          <h3 class="headline mb-2">Keep in <span class="blue--text">Touch</span></h3>
          <iframe height="250" frameborder="0" style="width:100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3_kQiSHZMWXVyf4beMIqhdXExt-CvKA0
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
        <v-flex xs12 md6 class="mt-2 px-4">
          <h3 class="headline mb-2">Contact <span class="blue--text">Me</span></h3>
          <form action="mailto:tonywong1p89@gmail.com" method="post" enctype="text/plain">
            <v-text-field box prepend-icon="face" label="Full Name" type="text" name="fullname" required></v-text-field>
            <v-text-field box prepend-icon="email" label="Email" type="email" name="email" required></v-text-field>
            <v-textarea box label="Tell me what you think..." prepend-icon="message" name="message"></v-textarea>
            <v-btn type="submit">Send Message</v-btn>
          </form>
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
            value: "tonywong1p@outlook.com"
          }
        ]
      }
    }
  }
</script>
