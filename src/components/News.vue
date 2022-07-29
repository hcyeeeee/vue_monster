<template>
    <div class="layout " id="section_news">
        <div class="layout_grid ">
            <h1 class>{{ title }}</h1>
            <div class="mt-3 mb-3">
                <div class="layout_content" v-if="newsInfo.length > 0">
                    <!-- <a :href="'https://www.ftvnews.com.tw/news/detail/' + this.newsInfo[0].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[0].Image" loading="lazy" />
                            </div>
                            <h4>{{ newsInfo[0].Title }}</h4>
                        </div>
                    </a>   -->
                     <a :href="'https://www.ftvnews.com.tw/news/detail/2022718W0198'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                               <img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/c5f5b156-3d73-4170-abd9-3573322275c9.jpg" alt="南美館地獄展看不過癮？全台十大熱門鬼屋讓你背脊發冷">
                            </div>
                            <h4>南美館地獄展看不過癮？全台十大熱門鬼屋讓你背脊發冷</h4>
                        </div>
                    </a>
                      <a :href="'https://www.ftvnews.com.tw/news/detail/2022715W0160'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                               <img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/e7598bd6-fcca-4006-990a-7a7829c9634c.jpg" alt="台中木乃伊是「真屍」！科博館證實存在20年&nbsp;網嚇壞：難怪經過頭暈">
                            </div>
                            <h4>台中木乃伊是「真屍」！科博館證實存在20年&nbsp;網嚇壞：難怪經過頭暈</h4>
                        </div>
                   
                    </a>
                      <a :href="'https://www.ftvnews.com.tw/news/detail/2022714W0181'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/2366f127-36c6-45ea-b116-5b3206ede907.jpg" alt="「殭屍天團」現身九份老戲院？一字排開網嚇壞：比台南還可怕！">
                              
                            </div>
                            <h4>「殭屍天團」現身九份老戲院？一字排開網嚇壞：比台南還可怕！</h4>
                        </div>
                   
                    </a>
                      <a :href="'https://www.ftvnews.com.tw/news/detail/2022725W0270'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">

<img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/1c5ddfb1-8eec-4220-b592-709c10fc57d7.jpeg" alt="鬼月來臨「22項民俗禁忌」大彙整&nbsp;少用「這1字」以防觸怒好兄弟">
                            </div>
                            <h4>鬼月來臨「22項民俗禁忌」大彙整&nbsp;少用「這1字」以防觸怒好兄弟</h4>
                        </div>
                   
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/2022701W0140'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/fa686647-59c1-4a3b-8a89-fe5a7e91ee96.jpg" alt=" 台灣真的有殭屍？傳48年前曾有「屍體蒸發奇案」政府嚇到宣布宵禁">
                            </div>
                            <h4>台灣真的有殭屍？傳48年前曾有「屍體蒸發奇案」政府嚇到宣布宵禁</h4>
                        </div>
                   
                    </a>
                     <a :href="'https://www.ftvnews.com.tw/news/detail/2022701W0041'" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img loading="lazy" src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/997f49b8-8fa4-41c7-a0bb-ec864cb9a013.jpg" alt="南美館殭屍正夯！高雄50年前也曾有「蔭屍」請出媽祖才解決">

                            </div>
                            <h4>南美館殭屍正夯！高雄50年前也曾有「蔭屍」請出媽祖才解決</h4>
                        </div>
                   
                    </a>
                </div>
            </div>
            <hr>
            <div class="layout_grid_inner">


                <div class="layout_sort">
                    <div class="layout_book">
                        <div class="layout_img_inner">
                            <img class="book" src="../assets/book1.png" loading="lazy" />
                        </div>
                        <div class="bookcontent">
                            <h2>尋妖誌：島嶼妖怪文化之旅</h2>
                            <p>透過台灣民俗與生活記憶中有關妖怪傳說的記憶，採取行旅與踏查的方式尋找台灣妖怪的足跡，其中規劃十一條走訪妖怪的路線，將口傳或文獻所載的妖怪一一揭露其神祕面相，提供可實際按圖索驥的便利性，並搭配行程中的小旅行，但最後呼籲，島嶼千年靈氣，妖怪法力高強，懇請膽小者勿試！
                            </p>
                            <div class="row">
 
                                <a class="col-5" href="https://www.facebook.com/morningstarpublishing" target="blank">
                                    <img  src="../assets/晨星出版社.png" alt=""> 
                                    </a>
                                <a  class="col-7" href="https://www.facebook.com/TPE.Legend" target="blank"> 
                                    <img src="../assets/台北異文地方工作室.png" alt=""> 
                                    </a>
                            </div>
                            <div class="row mt-2">
                                <a href="https://bit.ly/3aYbCC2" target="blank"> <img class="col-5"
                                        src="../assets/buy.jpg" alt=""> </a>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="layout_sort">
                    <div class="layout_book">
                        <div class="layout_img_inner">
                            <img class="book" src="../assets/book2.png" loading="lazy" />
                        </div>
                        <div class="bookcontent">
                            <h2>唯妖論：臺灣神怪本事</h2>
                            <p>重新認識臺灣的過程中，最缺乏的一塊就是臺灣的妖怪神異文化。本書考察了49個臺灣妖怪神異，每個妖怪神異都包含：繪師重新賦予他們的圖像＋現代版極短篇故事＋詳盡的文獻與田野資料！讓妖怪神異與現代生活緊密相連。
                            </p>
                            <div class="row">
                                <a class="col-5" href="https://www.facebook.com/kiwifruitstudio" target="blank"> <img 
                                        src="../assets/奇異果文創.png" alt=""> </a>
                                <a class="col-7" href="https://www.facebook.com/TPE.Legend" target="blank"> <img 
                                        src="../assets/台北異文地方工作室.png" alt=""> </a>
                            </div>
                            <div class="row mt-2">
                                <a href="https://www.books.com.tw/products/0010730758" target="blank"> <img
                                        class="col-5" src="../assets/buy.jpg" alt=""> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>



</template>

<script>
export default {
    data() {
        return {
            title: '意猶未盡？瞭解更多',
            newsInfo: [],
        }
    },

    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=俄烏衝突&Page=1&sp=10')
            .then((response) => {
                // console.log(response)
                let data = response.data.ITEM
                data.forEach((item) => {
                    this.newsInfo.push(item)
                })
            })
            .catch((error) => {
                console.log('error' + error)
            })
    },
}
</script>

<style scoped>
.layout {
    background-image: url(../assets/b3.png);
    background-size: cover;
    font-family: '華康愛情體W5';

}

@media screen and (max-width: 768px) {
    .section_news {
        min-height: 2200px;
    }
}


picture {
    max-width: 400px;
    min-height: 300px;
    display: block;
    margin: auto;
}

h4 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 30px;
    max-height: 70px;
    padding: 0 0.3rem;
    text-align: center;
}

.layout_grid div div:nth-last-child(1) a {
    display: inline;
    padding: 0.3rem;
    border: 1px solid;
}

.layout_grid p {
    max-width: 600px;
    margin: 1rem auto;
}

.layout_grid {
    max-width: 1000px;
}

.layout_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;
    margin: 1rem 0;
}

@media screen and (max-width: 1024px) {
    .layout_content {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .layout_content {
        grid-template-columns: 1fr;
    }
}

.layout_img_inner {
    max-width: 500px;
    max-height: 300px;
    min-height: 200px;
    margin: auto;
    overflow-y: hidden;
    height: 200px;
   
    
}

.layout_img_inner img{
    
    margin: auto;
    overflow-y: hidden;
    height: 180px;
    
}


@media screen and (max-width: 1024px) {
    .layout_img_inner {
        min-height: 200px;
        min-width: 200px;
    }
}

@media screen and (max-width: 768px) {
    .layout_img_inner {
        min-height: 260px;
    }
}

@media screen and (max-width: 500px) {
    .layout_img_inner {
        min-height: 200px;
    }
}

h1 {
      font-family: 華康古印體;
    font-size: 70px;
}

hr {
    border: 2px solid rgb(0, 0, 0);
    opacity: .9;
    width: 1000px;
}

.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
}

.layout_book {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;


}

.bookcontent {
    text-align: left;
}

h2 {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
}

a {
    color: black !important;
    text-decoration: none !important;
    display: flex !important;
    border: 1px transparent !important;
    transition: 0.3s !important;

}

p{
    height: 200px;
    font-size: 16px;
    font-weight: 400;
}


@media screen and (max-width: 500px) {
    
.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 1rem;
}

.book{  width: 300px;
 transition:1s;

}

.layout_book {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;


}

}

.h4{   
   font-size: 10px;
    
}


</style>
