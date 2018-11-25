<template>
  <v-card class="grey lighten-3 animated fadeIn">
    <div class="gradient darken-1">
      <v-layout wrap style="position:relative;top:30px">
        <v-flex xs12 d-flex justify-center align-center>
          <div style="text-align:center" class="white--text pb-5">
            <h3 class="display-1 mb-2">Resume</h3>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-card-title class="px-3">
      <v-layout wrap>
        <v-flex xs12 md6 class="mt-2">
          <h3 class="headline">Experience</h3>
          <v-timeline dense>
            <v-timeline-item v-for="experience in experiences" :key="experience.id" left small color="orange lighten-2">
              <v-card class="elevation-2 mr-3">
                <v-card-title>
                  <div>
                    <span class="title mb-1">{{experience.title}}</span><br>
                    <span class="grey--text"><span class="blue--text">{{experience.year}}</span> <span class="mx-1">|</span>{{experience.company}}</span>
                  </div>
                </v-card-title>
                <v-card-text>
                  {{experience.duties}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
        <v-flex xs12 md6 class="mt-2">
          <h3 class="headline">Education</h3>
          <v-timeline dense>
            <v-timeline-item v-for="education in educations" :key="education.id" left small color="orange lighten-2">
              <v-card class="elevation-2 mr-3">
                <v-card-title>
                  <div>
                    <span class="title mb-1">{{education.title}}</span><br>
                    <span class="grey--text"><span class="blue--text">{{education.year}}</span> <span class="mx-1">|</span>{{education.institution}}</span>
                  </div>
                </v-card-title>
                <v-card-text>
                  {{education.courses}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        experiences: [{
            title: 'IT Project Manager',
            company: 'Edvant Company Limited',
            year: 'June 2015 to Dec 2018',
            duties: ['fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg', 'fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg', 'fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg']
          },
          {
            title: 'Research Assistant',
            company: 'Chinese University of Hong Kong',
            year: '2015',
            duties: ['fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg', 'fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg', 'fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg']
          }
        ],
        educations: [{
          title: 'MSc in Information and Technology Management',
          institution: 'Chinese University of Hong Kong',
          year: '2015',
          courses: ['fghsfgdfg', 'fghsfgdfg']
        }, {
          title: 'BEng in Electronic Engineering',
          institution: 'Chinese University of Hong Kong',
          year: '2015',
          courses: ['fghsfgdfg', 'fghsfgdfg']
        }]
      }
    }
  }
</script>
