<template>
    <div class="layout " id="section_news">
        <div>
            <h1 class="title pt-5">{{ title }}</h1>
        </div>
        <div class="layout_grid layout_content">

            <div class="mt-3 mb-3" v-for="(news, index) of newsInfo" :key="index">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + news.ID" target="_blank">
                    <div class="layout_grid_inner_content">
                        <div class="layout_img_inner">
                            <img class="news" loading="lazy" :src="news.Image" />
                        </div>
                        <h4 class="mt-2">{{ news.Title }}</h4>
                    </div>
                </a>

            </div>
        </div>
        <hr>
        <div class="layout_grid_inner container">


            <div class="layout_sort">
                <h2>尋妖誌：島嶼妖怪文化之旅</h2>
                <div class="layout_book">
                    <div>
                        <img class="book " src="../assets/book1.png" loading="lazy" />
                    </div>
                    <div class="bookcontent">
                        <p>透過台灣民俗與生活記憶中有關妖怪傳說的記憶，採取行旅與踏查的方式尋找台灣妖怪的足跡，其中規劃十一條走訪妖怪的路線，將口傳或文獻所載的妖怪一一揭露其神祕面相，提供可實際按圖索驥的便利性，並搭配行程中的小旅行，但最後呼籲，島嶼千年靈氣，妖怪法力高強，懇請膽小者勿試！
                        </p>
                        <div class="row mt-3 mt-sm-1 pt-3 pt-sm-0">

                            <a class="col-5" href="https://www.facebook.com/morningstarpublishing" target="blank">
                                <img src="../assets/晨星出版社.png" alt="">
                            </a>
                            <a class="col-7" href="https://www.facebook.com/TPE.Legend" target="blank">
                                <img src="../assets/台北異文地方工作室.png" alt="">
                            </a>
                        </div>
                        <div class="row mt-3">
                            <a href="https://bit.ly/3aYbCC2" target="blank"> <img class="col-5" src="../assets/buy.jpg"
                                    alt=""> </a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="layout_sort">
                <h2>唯妖論：臺灣神怪本事</h2>
                <div class="layout_book">
                    <div>
                        <img class="book" src="../assets/book2.png" loading="lazy" />
                    </div>
                    <div class="bookcontent">

                        <p>重新認識臺灣的過程中，最缺乏的一塊就是臺灣的妖怪神異文化。本書考察了49個臺灣妖怪神異，每個妖怪神異都包含：繪師重新賦予他們的圖像＋現代版極短篇故事＋詳盡的文獻與田野資料！讓妖怪神異與現代生活緊密相連。
                        </p>
                        <div class="row mt-5 mt-sm-1">
                            <a class="col-5" href="https://www.facebook.com/kiwifruitstudio" target="blank"> <img
                                    src="../assets/奇異果文創.png" alt=""> </a>
                            <a class="col-7" href="https://www.facebook.com/TPE.Legend" target="blank"> <img
                                    src="../assets/台北異文地方工作室.png" alt=""> </a>
                        </div>
                        <div class="row mt-3 mb-5 ">
                            <a href="https://www.books.com.tw/products/0010730758" target="blank"> <img class="col-5"
                                    src="../assets/buy.jpg" alt=""> </a>
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
    background-image: url(../assets/b3.png);
    background-size: cover;
    font-family: '華康愛情體W5';
    max-height: 100%;

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

}

@media screen and (max-width: 1024px) {
    .layout_content {
        grid-template-columns: 1fr 1fr;

    }
}

@media screen and (max-width: 768px) {
    .layout_content {
        grid-template-columns: 1fr;
        padding: 0rem 3rem
    }
}



.container {

    margin: auto;
    overflow-y: hidden;


}

.news {
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

    align-items: center;
}

.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
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

h2 {
    font-size: 40px;
    font-weight: 800;
    text-align: center;
}

a {
    color: black !important;
    text-decoration: none !important;
    display: flex !important;
    border: 1px transparent !important;
    transition: 0.3s !important;

}

p {
    height: fit-content;
    font-size: 20px;
    line-height: 36px;
    font-weight: 400;
}

.book {
    width: 200px;
    padding: 0;
    transition: 1s;

}

.layout_sort {
    margin-bottom: 5rem;
}

@media screen and (max-width: 1200px) {

    .layout_sort {
        margin-bottom: 12rem;
    }

    h2 {
        font-size: 32px;
    }

}



@media screen and (max-width: 1024px) {

    .layout_grid_inner {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        padding: 0rem 3rem;
    }

    .book {
        width: 250px;
        transition: 1s;

    }

    .layout_book {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;


    }

    .p {
        font-size: 24px;
    }

    .news {
        height: 250px;
    }

}


@media screen and (max-width: 768px) {

    .layout_grid_inner {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;

    }

    .book {
        width: 300px;
        transition: 1s;

    }

    .layout_book {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;


    }



    p {

        font-size: 20px;
        line-height: 36px;
        font-weight: 400;
    }

    .news {
        height: 250px;
    }

}


.h4 {
    font-size: 10px;

}
</style>
