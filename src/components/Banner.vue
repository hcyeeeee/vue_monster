<template>
    <div class="layout  bg--main">
        <picture>
            <!-- <source srcset="../assets/mobilebanner.png" media="(max-width: 500px)" />
            <source srcset="../assets/mobilebanner.png" media="(max-width: 768px)" />
            <source srcset="../assets/mobilebanner.png" media="(max-width: 1024px)" /> -->
            <!-- <img src="../assets/banner1.jpg" loading="lazy" /> -->
        </picture>
        <div class="title">

            <h1>台灣民俗月專題</h1>
            <h2>台灣鬼怪不只林投姐與魔神仔？揭密台灣本土鬼怪傳說</h2>
            <p>你知道台灣也有自己的鬼怪文化嗎？民視新聞網特別製作台灣民俗月專題，用心理測驗跟專家訪談介紹台灣的本土文化、揭密台灣豐富的妖怪傳說。</p>
            <a href="#section">了解更多</a>
        </div>

    </div>
</template>
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"
></script>
<script>
export default {
  data() {
   
    
    },
  
    
    };
</script>
<style scoped>
* {
    font-family: "華康愛情體W5";
    
}



.title {
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    z-index: 99;
    position: absolute;
    top: 100px;
    justify-content: center;
word-break: keep-all;
}

picture {
    max-width: 80%;

}

.bg--main {
    background-image: url('../assets/banner1.jpg');
    height: 480px;
}

a {
    padding: 0.5rem 1.2rem;
    color: black;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    filter: contrast(0.7);
    font-size: 22px;
    background-color: #ffffff;
    width: fit-content;
    margin: auto;
    margin-top: 20px;

}


h1 {
    font-size: 100px;
}

h2 {
    font-size: 34px;
    font-style: unset;

}

@media screen and (max-width: 768px) {

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1rem;
        word-break: keep-all;
    }

    p {
        display: none;
    }
}
</style>
