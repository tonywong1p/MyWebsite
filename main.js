var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnlA72YblNlty80IWD7kGw1PLw2ysdxcw&channelId=UCZ13HxNrNT1E2AExSk62ing&part=snippet,id&order=date&maxResults=20';

var App = new Vue({
    el: '#app',
    data: {
        test: 'It is a test',
        videos: [],
        imageURL: 'http://kplant.biodiv.tw/%E9%95%B7%E6%98%A5%E8%8A%B1/%E9%95%B7%E6%98%A5%E8%8A%B1-%E8%8A%B144.JPG'
    },
    mounted() { // when the Vue app is booted up, this is run automatically.
        var self = this // create a closure to access component in the callback below
        this.$http.get(url).then((res) => {
            self.videos = res.body.items;
        });
    },
    computed: {
        timeago: function() {
            return 'haha'
        }
    }
})