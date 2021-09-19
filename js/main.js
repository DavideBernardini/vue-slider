const app = new Vue({
    el: '#slider',
    data: {
        images: [
            {
                'url': 'img/rome_italy.jpg',
                'alt': 'Rome'
            },
            {
                'url': 'img/milan_italy.jpg',
                'alt': 'Milan'
            },
            {
                'url': 'img/lecce-italy.jpg',
                'alt': 'Lecce'
            },
            {
                'url': 'img/florence_italy.jpg',
                'alt': 'Florence'
            },
            {
                'url': 'img/italy_venice.jpg',
                'alt': 'Venice'
            }
        ],
        imageIndex: 0,
        interval: 0
    },
    methods: {
        prevImage: function() {
            ( this.imageIndex <= 0 ) ? this.imageIndex = this.images.length - 1 : this.imageIndex--;
        },
        nextImage: function() {
            ( this.imageIndex >= this.images.length - 1 ) ? this.imageIndex = 0 : this.imageIndex++;
        },
        isBulletActive: function(bulletIndex) {
            return (this.imageIndex == bulletIndex) ? 'active' : null;
        },
        goToImage: function(i) {
            this.imageIndex = i;
        },
        autoPlay: function() {
            interval = setInterval( function() {
                ( app.imageIndex >= app.images.length - 1 ) ? 
                app.imageIndex = 0 : app.imageIndex++;
            }, 3000);
        },
        pauseAutoPlay: function() {
            clearInterval(interval);
        }
    },
    mounted() {
        this.autoPlay();
    }
})
