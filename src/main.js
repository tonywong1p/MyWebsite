import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/router';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')