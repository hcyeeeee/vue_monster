<template>
    <div class="layout bg--main">
        <div class="title">
            <h1>台灣民俗月專題</h1>
            <h3>台灣鬼怪不只林投姐與魔神仔？<br>揭密台灣本土鬼怪傳說</h3>
            <p>你知道台灣也有自己的鬼怪文化嗎？民視新聞網特別製作台灣民俗月專題，用心理測驗跟專家訪談介紹台灣的本土文化、揭密台灣豐富的妖怪傳說。</p>
            <a href="#section">了解更多</a>
            <br>
            <a href="#aaa">心理測驗</a>
        </div>

    </div>
</template>

<style scoped>


.bg--main {
    background-image: url('../assets/banner1.jpg');
    background-size: cover;
}

.bg--main>* {
    color: white;
}

.title {
    padding: 5.5rem 3rem;
    max-width: 1000px;
    margin: auto;
}

.title a {
    background-color: #fff;
    color: #333;
    display: inline-block;
    padding: 0.5rem 1.2rem;
    font-size: 20px;
    text-decoration: none;
    margin-top: 2rem;
}

@media screen and (max-width: 768px) {
    .title {
        padding: 7rem 3rem 5.5rem;

    }

    h1 {
        font-size: 3.6rem !important;
        line-height: 5rem;

    }

    h3 {
        font-size: 1.3rem !important;
        line-height: 2.2rem;
    }

    .bg--main {
        background-image: url('../assets/mobilebanner.jpg');
        background-size: cover;
    }

}
</style>
