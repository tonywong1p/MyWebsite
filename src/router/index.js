import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Resume from '@/pages/Resume.vue';
import Portfolio from '@/pages/Portfolio.vue';
import Media from '@/pages/Media.vue';
import Contact from '@/pages/Contact.vue';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    }, {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    }, {
        path: '/media',
        name: 'Media',
        component: Media,
    },{
        path: '/contact',
        name: 'Contact',
        component: Contact,
    }],
    mode: 'hash',
});