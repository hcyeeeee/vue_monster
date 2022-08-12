<template>
    <div class="layout " id="section_news">
        <div class="bg">
            <div>
                <h2 class="title pt-5 pb-3">意猶未盡?<br>瞭解更多</h2>
                <h2 class="title2 pt-5 pb-3">意猶未盡?瞭解更多</h2>
            </div>
            <div class="layout_grid layout_content">

                <div class="" v-for="(news, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img class="news" loading="lazy" :src="news.Image" alt="news" />
                            </div>
                            <p class="">{{ news.Title }}</p>
                        </div>
                    </a>

                </div>
            </div>
            <hr>
            <div class="layout_grid_inner">


                <div class="layout_sort">
                    <h3>尋妖誌：島嶼妖怪文化之旅</h3>
                    <div class="layout_book">


                        <a href="https://bit.ly/3aYbCC2" target="blank">
                            <img class="book " src="../assets/book1.png" loading="lazy" />

                        </a>
                        <div class="bookcontent">
                            <p>透過台灣民俗與生活記憶中有關妖怪傳說的記憶，採取行旅與踏查的方式尋找台灣妖怪的足跡，其中規劃十一條走訪妖怪的路線，將口傳或文獻所載的妖怪一一揭露其神祕面相，提供可實際按圖索驥的便利性，並搭配行程中的小旅行，但最後呼籲，島嶼千年靈氣，妖怪法力高強，懇請膽小者勿試！
                            </p>
                            <div class="layout_icon">

                                <a href="https://www.facebook.com/morningstarpublishing" target="blank">
                                    <img src="../assets/晨星出版社.png" alt="晨星出版社">
                                </a>
                                <a href="https://www.facebook.com/TPE.Legend" target="blank">
                                    <img src="../assets/台北異文地方工作室.png" alt="台北異文地方工作室">
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="layout_sort">
                    <h3>唯妖論：臺灣神怪本事</h3>
                    <div class="layout_book">
                        <a href="https://www.books.com.tw/products/0010730758" target="blank">
                            <img class="book" src="../assets/book2.png" loading="lazy" /></a>

                        <div class="bookcontent">

                            <p>重新認識臺灣的過程中，最缺乏的一塊就是臺灣的妖怪神異文化。本書考察了49個臺灣妖怪神異，每個妖怪神異都包含：繪師重新賦予他們的圖像＋現代版極短篇故事＋詳盡的文獻與田野資料！讓妖怪神異與現代生活緊密相連。
                            </p>
                            <div class="layout_icon">

                                <a href="https://www.facebook.com/kiwifruitstudio" target="blank">
                                    <img src="../assets/奇異果文創.png" alt="奇異果文創"> </a>
                                <a href="https://www.facebook.com/TPE.Legend" target="blank"> <img
                                        src="../assets/台北異文地方工作室.png" alt="台北異文地方工作室"> </a>



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

            newsInfo: [],
        }
    },

    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=民俗月&Page=1&sp=6')
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
    background-image: url(../assets/底2.jpg);





}

a {
    width: 100%;
    display: flex;
    justify-content: center;
}

.bg {
    max-width: 1000px;
    margin: auto;
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



.layout_grid div div:nth-last-child(1) a {
    display: inline;
    padding: 0.3rem;
    border: 1px solid;
}

.layout_grid p {
    max-width: 600px;
}

.layout_grid {
    max-width: 1000px;
}

.layout_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;

}

@media screen and (max-width: 1024px) {
    .layout_content {
        grid-template-columns: 1fr 1fr;

    }
}




.container {

    margin: auto;
    overflow-y: hidden;


}

.news {
    height: 180px;
}

/* @media screen and (max-width: 1024px) {
    .layout_img_inner {
        min-height: 260px;
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


} */



hr {
    border: 2px solid rgb(0, 0, 0);
    opacity: .9;

    align-items: center;
}

.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 1rem;
}

.layout_book {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;


}

.bookcontent {
    height: 300px;
    text-align: left;
    margin-bottom: 5rem;
}



a {
    color: black !important;
    text-decoration: none !important;
    display: flex !important;
    border: 1px transparent !important;
    transition: 0.3s !important;

}


.book {
    width: 220px;
    width: 100%;
    height: 230px;
    padding: 0;


}

.layout_sort {
    margin-bottom: 5rem;
}

.layout_icon {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;


}



@media screen and (max-width: 1024px) {


    .book {
        width: 200px;



    }

    .layout_book {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;



    }

    .layout_content {
        padding: 2rem;
        width: 100%;
        grid-gap: 2rem;

    }


    .news {
        height: 220px;
    }

    .layout_icon {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;


    }


}


@media screen and (max-width: 600px) {

    .layout_grid_inner {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem;
        padding: 0rem 3rem;

    }

    .book {}



    .layout_icon {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;



    }

    .news {
        height: 220px;
    }

    .layout_sort {}

    p {
        font-size: 1.4rem !important;
        line-height: 2.2rem;


    }

    h3 {
        font-size: 2.5rem !important;
    }


}


.title {
    display: none;
}

.title2 {
    display: block;
}


@media screen and (max-width: 500px) {
    .layout_content {
        grid-template-columns: 1fr;
        padding: 1rem 3rem
    }

    h2 {
        color: rgb(6, 6, 6);

    }

    p {
        font-size: 1.2rem !important;
        line-height: 2rem;
        text-align: left;
        padding: 0rem;

    }

    .news {
        height: 200px;
    }

    .layout_sort {
        margin-bottom: 20px;
    }

    .layout_icon {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    h3 {
        text-align: left;
        font-size: 2.4rem !important;

    }

    .book {
        width: 180px;



    }

    .title2 {
        display: none;
    }

    .title {
        display: block;
    }


}

h3 {}

h3 {
    font-size: 2.4rem !important;

}
</style>
