<template>
  <v-card class="grey lighten-3 animated fadeIn">
    <div class="gradient darken-1">
      <v-layout wrap style="position:relative;top:30px">
        <v-flex xs12 d-flex justify-center align-center>
          <div style="text-align:center" class="white--text pb-5">
            <h3 class="display-1 mb-2">Media</h3>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-card-title class="px-0 pt-0">
      <v-layout wrap>
        <v-flex xs12 sm6 lg4 class="pa-4" v-for="item in items" :key="item.link">
          <v-hover class="black darken-2" :class="{'gradient':item.type!='video'}">
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 6 : 1}`" class="thumbnail">
              <v-img v-if="item.type=='image'" class="thumbnail" :src="item.link" :aspect-ratio="16/9"></v-img>
              <video v-if="item.type=='video'" class="thumbnail" :src="item.link" :aspect-ratio="16/9">
                          </video>
              <v-layout justify-center align-center class="thumbnail" style="position:absolute;top:0;cursor:pointer;background-color:rgba(0,0,0,0.2)" @click="open(item)">
                <v-icon v-if="item.type=='image'" size="60" color="white">photo</v-icon>
                <v-icon v-if="item.type=='video'" size="60" color="white">play_circle_filled</v-icon>
              </v-layout>
            </v-card>
          </v-hover>
          <v-layout class="mt-2" column align-center>
            <h3 style="text-align:center">{{item.title}}</h3>
            <v-layout align-center>
              <span style="text-align:center" class="caption grey--text">{{item.caption}}</span>
            </v-layout>
          </v-layout>
        </v-flex>
        <v-dialog v-model="dialog" :width="1500" height="2000" persistent scrollable>
          <v-card class="grey darken-4">
            <v-toolbar class="grey darken-4">
              <v-layout align-center class="hidden-xs-only">
                <a :href="selectedItem.hyperlink" target="_blank" class="white--text title" style="text-align:center">{{selectedItem.title}}</a>
                <span class="caption grey--text ml-3 lighten-3">{{selectedItem.caption}}</span>
              </v-layout>
              <v-spacer></v-spacer>
              <v-btn icon @click="closeDialog()" dark>
                <v-icon>clear</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text style="height:700px" class="scrollbar" ref="scrollWrapper">
              <v-layout justify-center align-center>
                <v-img v-if="selectedItem.type=='image'" :src="selectedItem.link" contain style="max-height:650px;width:auto"></v-img>
                <video v-if="selectedItem.type=='video'" style="max-height:650px;max-width:100%" controls>
                                  <source :src="selectedItem.link" type="video/mp4">
                                </video>
              </v-layout>
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
        dialog: false,
        selectedItem: {},
        items: [{
            title: 'Economic Digest - StartUp Zone',
            caption: '25 January 2019',
            hyperlink: 'https://www.edigest.hk/86821/%E5%89%B5%E6%A5%AD/%E5%89%B5%E6%A5%AD-%E9%9B%BB%E5%AD%90%E5%AD%B8%E7%BF%92-90%E5%BE%8C-%E4%B8%AD%E6%96%87%E5%A4%A7%E5%AD%B8-%E8%AA%B2%E5%AE%A4%E6%BA%9D%E9%80%9A%E8%BB%9F%E4%BB%B6-ureply/',
            link: require('@/assets/edigest_2019.mp4'),
            type: "video"
          },
          {
            title: 'Economic Digest - StartUp Zone',
            caption: '25 January 2019',
            hyperlink: 'https://www.edigest.hk/86821/%E5%89%B5%E6%A5%AD/%E5%89%B5%E6%A5%AD-%E9%9B%BB%E5%AD%90%E5%AD%B8%E7%BF%92-90%E5%BE%8C-%E4%B8%AD%E6%96%87%E5%A4%A7%E5%AD%B8-%E8%AA%B2%E5%AE%A4%E6%BA%9D%E9%80%9A%E8%BB%9F%E4%BB%B6-ureply/',
            link: require('@/assets/edigest_2019.jpg'),
            type: "image"
          }, {
            title: 'SmartBiz Expo',
            caption: "December 2018",
            hyperlink: 'https://www.facebook.com/edvanthk/photos/we-will-be-attending-smartbiz-expo-2018-organised-by-hong-kong-trade-development/1899379950098027/',
            link: require('@/assets/Smartbiz_2018.jpg'),
            type: "image"
          }, {
            title: 'Poster Award, Teaching and Learning Innovation Expo',
            caption: "December 2017",
            hyperlink: require('@/assets/poster_award.pdf'),
            link: require('@/assets/cuhkexpo_2017.jpeg'),
            type: "image"
          }, {
            title: 'InnoDesignTech Expo',
            caption: "December 2016",
            link: require('@/assets/InnoDesignTech_2016.jpg'),
            type: "image"
          }, {
            title: 'Worlddidac Asia',
            caption: "June 2016",
            link: require('@/assets/Worlddidacasia_2016.jpg'),
            type: "image"
          },
        ]
      }
    },
    methods: {
      closeDialog() {
        this.selectedItem = {};
        this.$refs.scrollWrapper.scrollTop = 0;
        this.dialog = false;
      },
      open(item) {
        this.dialog = true;
        this.selectedItem = item;
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
    width: 100%;
    transition-duration: 0.5s;
  }
</style>
