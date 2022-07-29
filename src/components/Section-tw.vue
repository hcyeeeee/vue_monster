<template>
    <div class="layout" id="section_tw">
        <div class="layout_grid">
            <h2><i class="fa-solid fa-swords"></i> {{ title }}</h2>
            <p>{{ content }}</p>
            <div>
                <div class="layout_content" v-if="newsInfo.length > 0">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[0].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[0].Image" loading="lazy" />
                            </div>
                            <h4>{{ newsInfo[0].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[1].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[1].Image" loading="lazy" />
                            </div>
                            <h4>{{ newsInfo[1].Title }}</h4>
                        </div>
                    </a>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[2].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[2].Image" loading="lazy" />
                            </div>
                            <h4>{{ newsInfo[2].Title }}</h4>
                        </div>
                    </a>
                </div>
                <div class="btn_more">
                    <a href="https://www.ftvnews.com.tw/tag/台海影響/" target="_blank">更多新聞</a>
                </div>
            </div>
            <div class="iframe-container">
                <iframe
                    width="916"
                    height="515"
                    src="https://www.youtube.com/embed/HdGqVyZaLqI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '台海影響',
            content:
                '俄羅斯、烏克蘭開戰，儘管相隔遙遠，我國仍舊緊盯俄烏局勢發展，因為根據外媒報導，北京當局正觀察拜登政府會如何處理衝突，以作為其對台灣採取更具侵略性行動的指標。',
            newsInfo: [],
        }
    },

    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台海影響&Page=1&sp=4')
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
* {
    color: white;
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
}

.layout_grid_inner_content {
    border: 1px solid rgb(160, 160, 160);
    text-align: center;
}

.layout_grid div div:nth-last-child(1) a {
    display: inline;
    padding: 0.3rem;
    margin-top: 3rem;
    border: 1px solid white;
}

.layout_grid p {
    max-width: 600px;
    margin: 1rem auto;
    text-align: left;
}

.layout_grid {
    background-color: rgb(52, 52, 52);
    margin: 4rem auto;
}

.layout_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
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

.layout_content .layout_img_inner {
    height: 170px;
    min-width: 300px;
    overflow-y: hidden;
}

@media screen and (max-width: 768px) {
    .layout_content .layout_img_inner {
        min-height: 300px;
        min-width: 200px;
    }
}

@media screen and (max-width: 508px) {
    .layout_content .layout_img_inner {
        min-height: 200px;
        min-width: 200px;
    }
}

.fa-solid {
    color: white;
}
</style>
