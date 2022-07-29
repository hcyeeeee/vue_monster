<template>
    <div class="layout_addition" @scroll="scroll">
       
        <div v-if="scrollY > 100">
            <i @click="scrollTop" id="toTop" class="fa-solid fa-square-arrow-up fa-3x"></i>
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
/* .layout_addition {
    height: 100px;
} */

.layout_grid {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 300px;
}

a,
span {
    display: block;
    margin: auto;
    cursor: pointer;
    filter: contrast(1);
}

a:hover {
    background-color: #ffffff00;
}

.addition {
    position: fixed;
    top: 5%;
    right: 1px;
    border-radius: 15px;
    padding: 10px 5px;
    background-color: #f7f7f5;
    box-shadow: 1px 2px 3px black;
    z-index: 999;
}

#social_line,
#social_facebook,
#social_link {
    display: block;
    background-size: 36px;
    width: 36px;
    height: 41px;
    background-image: url('../assets/icon_social.png');
    background-repeat: no-repeat;
}

#social_line {
    background-position-y: 0px;
}

#social_facebook {
    background-position-y: -41px;
}

#social_link {
    background-position-y: -81px;
}

.fa-square-arrow-up {
    position: fixed;
    right: 1rem;
    bottom: 4rem;
    z-index: 9999;
    color: #525a7d;
}
</style>
