<template>
    <div class="layout_header">



    </div>
</template>

<script>
// import { ScaleDown } from 'vue-burger-menu'

export default {
    name: 'Header',
    components: {
        // ScaleDown,
    },
    data() {
        return {
            title: `民視新聞網`,
            logo: require('../assets/logo_ftv.svg'),
            active: true,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        scroll() {
            window.addEventListener('scroll', () => {
                this.moveBar('transparent')
            })
        },

        moveBar(color = 'transparent') {
            let bar = document.querySelector('.progress')
            let w = Math.ceil(
                (Math.round(window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100
            )
            bar.style.width = w + '%'
            bar.style.background = color
        },

        linkToHome() {
            window.open('https://www.ftvnews.com.tw/', '_blank')
        },

        getLocalUrl() {
            let e = document.createElement('input'),
                // t = window.location.href + '?utm_source=topicpage&utm_medium=copybutton'
                t = window.location.href
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功!')
        },



    },

    mounted() {
        this.burger()
        this.scroll()
        this.moveBar()
    },
}
</script>

<style scoped>
.layout_header {
    width: 100%;
    --layout_max_width: 100vw;
    z-index: 222 !important;
    position: fixed;
    margin-top: -10px;
    top: 3rem;
    z-index: -9999;
}

.fixed {
    display: none;
}

.layout_grid {
    padding: var(--layout_padding);
    height: 100px;
    margin: 0;
    margin-top: -1.3rem;
    z-index: -100 !important;
    /* background-color: var(--header_background); */
}

p {
    font-size: var(--font_h2);
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
}

p img {
    width: 32px;
}

/* 進度條 */
/* .progress {
    position: fixed;
    bottom: 53px;
    width: 0.5%;
    height: 10px;
    z-index: 999;
} */

/* 社群分享 */

i {
    color: var(--main_color);
    display: block;
    margin: 20px;
    font-size: 45px;
}

#icon {
    margin-top: 9rem;
    z-index: 999;
    position: fixed;
    width: 50px;
    right: 0;
    margin-right: 1rem;

}

span {
    color: rgb(10, 50, 110);
    margin-top: -2.4rem;
    font-size: 30px;
}

.logo {
    margin-top: -1rem;

    height: 140px;
}

a {
    text-decoration: none;
    color: black;
}

.sub {
    display: flex;
    flex-direction: column;
    color: #232020;
    text-align: center;
    margin-top: -2rem;
    margin-left: -3rem;
}

.sub a {
    color: #1d1d1d;
    font-size: 23px;

    line-height: 44px;
    text-decoration: none;
}

.sub img {
    margin-top: -2px;
    width: 44px;
}

#social_link {
    margin-top: -1px;
}

@media screen and (max-width: 768px) {
    .fixed {
        margin-top: -3rem;
        z-index: 999;
        position: fixed;
        right: 0;
        margin-right: 0rem;
    }
}

.titleicon {
    margin-bottom: -16px;
}
</style>
