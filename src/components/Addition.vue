<template>
    <div class="layout_addition" @scroll="scroll">
        <div class="layout_grid">
            <div class="icon" id="icon">
                <!-- line -->
                <a
                    href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/warm/"
                    target="_blank"
                >
                    <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/warm/">
                        <img src="../assets/line.png" alt="" width="60px"
                    /></span>
                </a>
                <br />
                <!-- facebook -->
                <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Fwarm%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore"
                >
                    <img src="../assets/fb.png" alt="" width="60px"
                /></a>
                <br />
                <!-- localUrl -->
                <a target="_blank" @click="getLocalUrl" class="fb-xfbml-parse-ignore">
                    <img src="../assets/share.png" alt="" width="60px"
                /></a>
                <br />
            </div>
        </div>

        <div v-if="scrollY > 100">
            <i @click="scrollTop" id="toTop" class="fa-solid fa-square-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: '',
        }
    },
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=euwar&utm_medium=copybutton'
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
.fa-solid {
    font-size: 40px;
    position: fixed;
    color: white;
    bottom: 10px;
    right: 18px;
}
</style>
