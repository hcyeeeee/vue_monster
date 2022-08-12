<template>
    <div class="layout_addition" @scroll="scroll">
        <div class="layout_grid">
            <div class="icon" :class="{ fixed: active }" id="icon">
                <!-- line -->
                <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/taiwanghost/"
                    target="_blank">
                    <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/taiwanghost/">
                        <img src="../assets/line.png" alt="line" width="60px" /></span>
                </a>
                <br />
                <!-- facebook -->
                <a target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Ftaiwanghost%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore">
                    <img src="../assets/fb.png" alt="facebook" width="60px" /></a>
                <br />
                <!-- localUrl -->
                <a target="_blank" @click="getLocalUrl" class="fb-xfbml-parse-ignore">
                    <img src="../assets/share.png" alt="share" width="60px" /></a>
                <br />
            </div>
        </div>

        <div v-if="scrollY > 100">
            <i @click="scrollTop" id="toTop" class="fa-solid fa-square-arrow-up"></i>
        </div>
    </div>
</template>

<script>
console.log();
export default {
    data() {
        return {
            scrollY: '',
        }
    },

    methods: {
        handleScroll() {

            this.active = window.scrollY > 1800 ? true : false
        },
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功!')
        },
        linkToHome() {
            window.open('https://www.ftvnews.com.tw/', '_blank')
        },

        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },

        scroll() {
            this.scrollY = window.scrollY
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('scroll', this.scroll)
    },
}
</script>

<style scoped>
.layout_addition {
    position: fixed;
    right: 0;
    top: 0;
    width: 70px;
}

@media screen and (max-width: 500px) {
    .layout_addition {
        position: fixed;
        right: -10px !important;
        top: 0;
        width: 70px;
    }
}

.fixed {
    display: none;
}

.fa-solid {
    font-size: 40px;
    position: fixed;
    color: white;
    bottom: 10px;
    right: 10px;
}
</style>
