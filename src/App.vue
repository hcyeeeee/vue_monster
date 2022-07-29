<template>
    <div id="app">
        <Header />
        <Banner />
        <Intro />
        <!-- <one /> -->
        <!-- <SectionPhoto /> -->
        <faq />
        <Video />
        <News />
        <!-- <more /> -->

        <Addition />
        <!-- <Bottom /> -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
// import one from '@/components/one.vue'
import Intro from '@/components/Intro.vue'
import faq from '@/components/faq.vue'
// import more from '@/components/more.vue'

import Video from '@/components/Video.vue'
import News from '@/components/News.vue'
import Addition from '@/components/Addition.vue'
// import Bottom from '@/components/Bottom.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'App',
    components: {
        Header,
        Banner,
        Intro,
        faq,
        Video,
        News,
        Addition,
        Footer,
    },
}
</script>

<style>
html,
body,
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
    line-height: 1;
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

h3,
h4,
p {
    line-height: 1.8rem;
}

#app {
    font-family: 華康古印體, '華康愛情體W5', 華康仿宋體, 宋體, 蘋果儷中黑, 華康粗黑體, 微軟正黑體, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
}
</style>

<style>
* {
    scroll-behavior: smooth;
}

p {
    font-size: 1.2rem;
}

h2 {
    text-align: center;
    font-size: 1.8rem;
    font-style: oblique;
    font-weight: bold;
    letter-spacing: 0.3rem;
    padding: 1rem 0 2rem 0;
}

h3 {
    display: -webkit-box;
    overflow: hidden;
    font-size: 1.2rem;
    text-align: left;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 30px;
    max-height: 50px;
    margin: auto;
    padding: 1rem 0 1rem 0.3rem;
}

h4 {
    display: -webkit-box;
    overflow: hidden;
    font-size: 1.2rem;
    text-align: left;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 30px;
    max-height: 55px;
    margin: auto;
    padding-left: 0.5rem;
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
