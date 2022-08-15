<template>
    <div id="app">
        <Header />
        <Banner />
        <Intro />
        <Section />
        <faq />
        <Video />
        <News />
        <Addition />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Banner2 from '@/components/banner2.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Section from '@/components/section.vue'
import faq from '@/components/faq.vue'
import Video from '@/components/Video.vue'
import News from '@/components/News.vue'
import Addition from '@/components/Addition.vue'
import Footer from '@/components/Footer.vue'

// 'Noto Sans TC','Helvetica Neue',Roboto,'Microsoft JhengHei',Arial,sans-serif

export default {
    name: 'App',
    components: {
        Header,
        Banner,
        Intro,
        Section,
        faq,
        Video,
        News,
        Addition,
        Footer,
    },
    mounted() {
        let lazyImg = document.querySelectorAll('img')
        lazyImg.forEach(img => {
            img.setAttribute('loading', 'lazy')
        })
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@100;300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700&display=swap');


::-webkit-scrollbar {
    width: 0;
    /* Remove scrollbar space */
    background: transparent;
    /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: transparent;
}

html {}

body {}

.row {
    --bs-gutter-x: 0 !important;
    --bs-gutter-y: 0 !important;
}

div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

a {
    color: black;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    filter: contrast(0.7);
}

a:hover {
    filter: contrast(1);
}

i {
    cursor: pointer;
}

body {

    line-height: 1.3rem;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}



#app {
    /* font-family: 華康古印體, '華康愛情體W5', 華康仿宋體, 宋體, 蘋果儷中黑, 華康粗黑體, 微軟正黑體, Avenir, Helvetica, Arial, sans-serif; */
    font-family: 'Noto Sans TC', 'Noto Serif TC', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;


}

* {
    scroll-behavior: smooth;
}

p {
    font-size: 1.3rem !important;
    line-height: 2rem;
    font-family: 'Noto Sans TC';
}

h1 {
    font-size: 5rem !important;
    line-height: 5.2rem;

    font-weight: 700 !important;
    font-family: 'Noto Serif TC';
}

h2 {

    font-size: 3.6rem !important;
    text-align: center;
    line-height: 4rem;
    font-weight: 700 !important;
    font-family: 'Noto Serif TC';
}

h3 {
    font-size: 3rem !important;
    padding: 1rem 0;
    line-height: 3.6rem;
    font-weight: 600 !important;
    font-family: 'Noto Serif TC';

}

h4 {
    line-height: 2rem;

    font-family: 'Noto Sans TC';
}


@media screen and (max-width: 768px) {

    p {
        font-size: 1.2rem !important;
    }

    h1 {
        font-size: 3.8rem !important;
    }

    h2 {
        font-size: 3.2rem !important;
    }

    h3 {
        font-size: 2.4rem !important;

    }

    h4 {}
}


@media screen and (max-width: 600px) {

    p {
        font-size: 1.1rem !important;
        line-height: 1.7rem;
    }

    h1 {
        font-size: 3.8rem !important;

        line-height: 3rem;

    }

    h2 {
        font-size: 3rem !important;
        line-height: 3.4rem;

    }

    h3 {
        font-size: 1.6rem !important;
        line-height: 2.2rem;
    }

    h4 {
        line-height: 1.7rem;
    }
}


img,
picture {
    width: 100%;
    height: auto;
}

.btn_more {
    margin-top: 3rem;
}

.fa-solid {
    color: #525b7c;
}

.layout {
    margin: auto;
}

.layout_grid {
    max-width: 1000px;
    margin: auto;
    display: grid;
    padding: 4.1rem 1rem;
}

#section_news,
#section1,
#section2,
#section3 {
    min-height: 500px;
}

@media screen and (max-width: 768px) {

    #section_news,
    #section1,
    #section2,
    #section3 {
        min-height: 500px;
    }
}

.layout_inner .layout_photo p {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 3rem 2rem !important;
}

/* 4x3 縱橫比 */
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    margin-top: 3rem;
    z-index: 1;
    width: 100%;
    min-height: 100px;
}

.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.iframe-container-4x3 {
    padding-top: 75%;
}

.pop {
    width: 1000px !important;
    height: 500px;
}
</style>
