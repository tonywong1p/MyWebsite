<template>
  <div>
    <v-card class="grey lighten-3 animated fadeIn">
      <div class="gradient darken-1 mb-3">
        <v-layout wrap style="position:relative;top:30px">
          <v-flex xs12 sm6 d-flex justify-center>
            <v-img style="max-width:300px" class="elevation-3 mb-3" src="https://avatars2.githubusercontent.com/u/25936020?s=460&v=4"></v-img>
          </v-flex>
          <v-flex xs12 sm6 d-flex justify-center align-center>
            <div style="text-align:center" class="white--text pb-5">
              <h3 class="display-1 mb-2">Tony, Wong Siu Fai</h3>
              <span class="title">IT Project Manager</span><br>
              <v-btn v-for="hyperlink in hyperlinks" :key="hyperlink.link" icon large dark class="ma-2" target="_blank" :href="hyperlink.link">
                <v-icon size="40">{{hyperlink.icon}}</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <v-card-title class="px-4">
        <v-layout wrap>
          <v-flex xs12 sm6 class="pr-3">
            <h3 class="headline">About <span class="blue--text">me</span></h3>
            <!-- <p class="body-1">Hi! My name is Tony, and I am from Hong Kong! I am now working in a IT company in HK Science Park with my nice colleagues. I was having a good time, but I have to leave since I am ready to graduate from my master degree (IT Management) and seek
              for new challenges.</p> -->
            <p class="body-1">Welcome to my world! My name is Tony Wong, a HongKonger working in IT industry for about 4 years. I was a co-founder and IT project manager of an education software company in HKSTP. I recently left after bringing the company on the right track, and I wanna to seek for new challenges for myself!
              </p>
              <p>
              Information technology is a thing that full of possibilities and imagination. I am so immersed to this and going to continue my career in this field as a management role in the future.
            </p>
            <!-- <p class="body-1">Read through my resume and profolio including personal projects and works in previous companies to understand more about what I can do.</p> -->
            <v-btn target="_blank" :href="resume">Download Resume</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-list class="transparent">
              <v-list-tile avatar v-for="item in contacts" :key="item.id">
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
        resume: require('@/assets/Resume_TonyWongSiuFai_2019.pdf'),
        hyperlinks: [{
          icon: 'fa-github',
          link: 'https://github.com/tonywong1p'
        }, {
          icon: 'fa-linkedin',
          link: 'https://www.linkedin.com/in/wong-siu-fai-tony-28186761/'
        }],
        contacts: [{
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
      };
    }
  };
</script>