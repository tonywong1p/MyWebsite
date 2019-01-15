<template>
  <v-card class="grey lighten-3 animated fadeIn">
    <div class="gradient darken-1">
      <v-layout wrap style="position:relative;top:30px">
        <v-flex xs12 d-flex justify-center align-center>
          <div style="text-align:center" class="white--text pb-5">
            <h3 class="display-1 mb-2">Portfolio</h3>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-card-title class="px-0 pt-0">
      <v-layout wrap>
        <v-flex xs12 class="mb-2">
          <v-tabs fixed-tabs show-arrows>
            <v-tab v-for="(filter,index) in filters" :key="index" @click="selectedFilter = index">
              {{filter}}
            </v-tab>
          </v-tabs>
          <!-- <v-btn v-for="(filter,index) in filters" :key="index" small :dark="selectedFilter==index" :class="{'blue':selectedFilter==index}" @click="selectedFilter = index">{{filter}}</v-btn> -->
        </v-flex>
        <v-flex xs12 sm6 lg4 class="pa-4" v-for="item in filteredItems" :key="item.link">
          <v-hover class="grey darken-2">
            <v-img slot-scope="{ hover }" :class="`elevation-${hover ? 6 : 1}`" class="thumbnail" :src="item.thumbnail" :aspect-ratio="16/9" @click="open(item)" style="cursor:pointer"></v-img>
          </v-hover>
          <v-layout class="mt-2" column align-center>
            <h3 style="text-align:center">{{item.title}}</h3>
            <v-layout align-center>
              <v-icon v-if="item.type!='image'" size="20" class="mr-1 grey--text">launch</v-icon>
              <v-icon v-if="item.type=='image'" size="20" class="mr-1 grey--text">collections</v-icon>
              <span style="text-align:center" class="caption grey--text">{{item.caption}}</span>
            </v-layout>
          </v-layout>
        </v-flex>
        <v-dialog v-model="dialog" :width="1500" height="2000" persistent scrollable>
          <v-card class="grey darken-4">
            <v-toolbar class="grey darken-4">
              <!-- <div v-if="zoomedImage==null" class="hidden-xs-only">
                        <v-btn v-for="i in [2,3,4]" small depressed icon @click="itemPerPage=i" :key="i" class="pa-0 yellow" :class="{'grey':itemPerPage!=i}">{{i}}</v-btn>
                      </div> -->
              <v-slider class="hidden-xs-only mt-3" prepend-icon="zoom_in" v-model="imageSize" v-if="zoomedImage==null" dark :min="50" :max="380"></v-slider>
              <div v-if="zoomedImage!=null">
                <v-btn icon dark @click="zoomedImage=null">
                  <v-icon>arrow_back</v-icon>
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon @click="closeDialog()" dark>
                <v-icon>clear</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text style="height:700px" class="scrollbar" ref="scrollWrapper">
              <div class="hidden-xs-only">
                <div v-masonry transition-duration="0.3s" item-selector=".item" v-show="zoomedImage==null">
                  <div v-masonry-tile class="item" v-for="(image,i) in selectedItem.value" :key="i">
                    <img :src="image" class="ma-3" :style="{'width':imageSize+'px'}" style="cursor:pointer" @click="zoomedImage=image">
                  </div>
                </div>
                <div v-if="zoomedImage!=null">
                  <v-img :src="zoomedImage" contain style="height:650px;width:auto" />
                </div>
              </div>
              <div class="hidden-sm-and-up">
                <v-img v-for="(image,i) in selectedItem.value" :key="i" :src="image" contain class="mb-4" :max-height="400"></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        imageSize: 200,
        zoomedImage: null,
        itemPerPage: 2,
        dialog: false,
        selectedFilter: 0,
        selectedItem: {},
        filters: ['All', 'Project Management', 'Web Development', 'Graphic Design'],
        items: [{
            filter: 1,
            title: 'Trello - Software Developmenet',
            caption: 'Project Management',
            thumbnail: require('@/assets/trello.png'),
            type: 'web',
            value: 'https://trello.com/b/9JXMPGmx/application-development-demo'
          }, {
            filter: 2,
            title: 'SayYo - Social Platform',
            caption: 'Web application',
            thumbnail: require('@/assets/sayyo.png'),
            type: 'web',
            value: 'http://sayyo.tonywsf.com'
          }, {
            filter: 2,
            title: 'Edvant - Company Website',
            caption: 'Static website',
            thumbnail: require('@/assets/edvant.png'),
            type: 'web',
            value: 'http://edvant.net'
          }, {
            filter: 2,
            title: 'Fact Checker - Online Platform',
            caption: 'Web application',
            thumbnail: require('@/assets/factchecker.png'),
            type: 'web',
            value: 'http://factchecker.tonywsf.com'
          },
          {
            filter: 2,
            title: 'Evaluate - Product Website',
            caption: 'Static website',
            thumbnail: require('@/assets/evaluate.png'),
            type: 'web',
            value: 'http://evaluate.edvant.net'
          },
          {
            filter: 3,
            title: 'MarineBio - Mobile app',
            caption: 'Graphic + UI/UX Design',
            thumbnail: require('@/assets/marine_icon.png'),
            type: 'image',
            value: [
              require('@/assets/marine_screenshot_1.jpg'),
              require('@/assets/marine_screenshot_2.jpg'),
              require('@/assets/marine_screenshot_3.jpg'),
              require('@/assets/marine_app_1.jpg'),
              require('@/assets/marine_app_2.jpg'),
              require('@/assets/marine_app_3.jpg'),
              require('@/assets/marine_app_4.jpg'),
              require('@/assets/marine_app_5.jpg'),
              require('@/assets/marine_app_6.jpg'),
              require('@/assets/marine_app_7.jpg'),
              require('@/assets/marine_app_8.jpg'),
              require('@/assets/marine_app_9.jpg'),
              require('@/assets/marine_app_10.jpg'),
              require('@/assets/marine_app_11.jpg'),
              require('@/assets/marine_icon.png'),
            ]
          }, {
            filter: 3,
            title: 'Science Mobile - Mobile app',
            caption: 'Graphic + UI/UX Design',
            thumbnail: require('@/assets/science_icon.png'),
            type: 'image',
            value: [
              require('@/assets/science_screenshot_1.jpg'),
              require('@/assets/science_screenshot_2.jpg'),
              require('@/assets/science_screenshot_3.jpg'),
              require('@/assets/science_app_1.jpg'),
              require('@/assets/science_app_2.jpg'),
              require('@/assets/science_app_3.jpg'),
              require('@/assets/science_app_4.jpg'),
              require('@/assets/science_app_5.jpg'),
              require('@/assets/science_app_6.jpg'),
              require('@/assets/science_app_7.jpg'),
              require('@/assets/science_app_8.jpg'),
              require('@/assets/science_icon.png'),
              require('@/assets/science_cover.jpg'),
            ]
          }, {
            filter: 3,
            title: 'Evaluate - Admin Panel',
            caption: 'UI/UX Design',
            thumbnail: require('@/assets/evaluate_admin_2.jpg'),
            type: 'image',
            value: [
              require('@/assets/evaluate_admin_1.jpg'),
              require('@/assets/evaluate_admin_2.jpg'),
              require('@/assets/evaluate_admin_3.jpg'),
              require('@/assets/evaluate_admin_4.jpg'),
              require('@/assets/evaluate_admin_5.jpg'),
            ]
          },
          {
            filter: 3,
            title: 'Webpage Design Proposal',
            caption: 'Graphic + UI/UX Design',
            thumbnail: require('@/assets/design proposal_demo-04.jpg'),
            type: 'image',
            value: [
              require('@/assets/design proposal_demo-01.jpg'),
              require('@/assets/design proposal_demo-02.jpg'),
              require('@/assets/design proposal_demo-03.jpg'),
              require('@/assets/design proposal_demo-04.jpg'),
              require('@/assets/design proposal_demo-05.jpg'),
              require('@/assets/design proposal_demo-06.jpg'),
              require('@/assets/design proposal_demo-07.jpg'),
              require('@/assets/design proposal_demo-08.jpg'),
              require('@/assets/design proposal_demo-09.jpg'),
              require('@/assets/design proposal_demo-10.jpg'),
              require('@/assets/design proposal_demo-11.jpg'),
            ]
          },
        ]
      }
    },
    computed: {
      filteredItems: function() {
        let temp = [];
        if (this.selectedFilter == 0) {
          temp = this.items
        } else {
          temp = this.items.filter((item) => {
            return item.filter == this.selectedFilter
          })
        }
        return temp;
      }
    },
    watch: {
      imageSize: function() {
        this.$redrawVueMasonry()
      }
    },
    methods: {
      closeDialog() {
        this.zoomedImage = null;
        this.$refs.scrollWrapper.scrollTop = 0;
        this.dialog = false;
      },
      open(item) {
        if (item.type == 'web') {
          window.open(item.value, '_blank');
        }
        if (item.type == 'image') {
          this.dialog = true;
          this.selectedItem = item;
          this.$redrawVueMasonry()
        }
      }
    }
  }
</script>

<style scoped>
  .scrollbar::-webkit-scrollbar-track {
    border-radius: 10px;
    background: none;
  }
  
  .scrollbar::-webkit-scrollbar {
    width: 8px;
    background: none;
  }
  
  .scrollbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ffab00;
  }
  
  .v-card {
    border-radius: 5px;
  }
  
  .v-btn {
    text-transform: capitalize;
  }
  
  .dialog {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
  
  .thumbnail {
    height: 200px;
    transition-duration: 0.5s;
  }
</style>
