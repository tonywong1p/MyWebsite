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
    <v-card-title>
      <v-layout wrap>
        <v-flex xs12 class="mb-3">
          <v-btn v-for="filter in filters" :key="filter" small :dark="selectedFilter==filter" :class="{'blue':selectedFilter==filter}" @click="selectedFilter = filter">{{filter}}</v-btn>
        </v-flex>
        <v-flex xs12 sm4 class="pa-3" v-for="item in filteredItems" :key="item.link" @click="popUp(item)" style="cursor:pointer">
          <v-img class="thumbnail" :src="item.thumbnail"></v-img>
          <div class="mt-2">
            <h3 style="text-align:center">{{item.caption}}</h3>
            <h3 style="text-align:center" class="caption grey--text">{{item.type}}</h3>
          </div>
        </v-flex>
        <v-dialog v-model="dialog" :fullscreen="true" persistent>
          <div style="height:100%;width:100%; background: rgba(0, 0, 0, 0.5);position:absolute"></div>
          <v-img :src="selectedItem.thumbnail" :contain="true" height="100%">
            <v-layout row>
              <v-spacer></v-spacer>
              <v-btn icon color="grey" @click="dialog=false" class="ma-4">
                <v-icon>clear</v-icon>
              </v-btn>
            </v-layout>
          </v-img>
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
        selectedFilter: 'All',
        selectedItem: {},
        filters: ['All', 'Web apps' ,'Website', 'UI/UX Design', 'Graphic'],
        items: [{
          type: 'Web apps',
          caption: 'Social Platform',
          thumbnail: require('@/assets/sayyo.png'),
          link: 'http://sayyo.tonywsf.com',
        }, {
          type: 'Website',
          caption: 'Company Website',
          thumbnail: require('@/assets/edvant.png'),
          link: 'http://edvant.net',
        }]
      }
    },
    computed: {
      filteredItems: function() {
        let temp = [];
        if (this.selectedFilter == 'All') {
          temp = this.items
        } else {
          temp = this.items.filter((item) => {
            return item.type == this.selectedFilter
          })
        }
        return temp;
      }
    },
    methods: {
      popUp(item) {
        this.selectedItem = item;
        if (item.type == 'Web apps' || item.type == 'Website') {
          window.open(item.link, '_blank');
        } else {
          this.dialog = true
        }
      }
    }
  }
</script>

<style scoped>
  .v-btn {
    text-transform: capitalize;
  }
  
  .dialog {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3
  }
  
  .thumbnail {
    height:200px;
    opacity: 0.5;
    transition-duration: .5s
  }
  
  .thumbnail:hover {
    opacity: 1;
  }
</style>
