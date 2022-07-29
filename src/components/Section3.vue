<template>
    <div class="layout" id="section3">
        <div class="layout_grid">
            <h2><i class="fa-solid fa-swords"></i> {{ title }}</h2>
            <div class="layout_grid_inner" v-if="newsInfo.length > 0">
                <div>
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[0].ID" target="blank">
                        <div class="layout_img">
                            <img :src="newsInfo[0].Image" loading="lazy" />
                        </div>
                        <h3>
                            {{ newsInfo[0].Title }}
                        </h3>
                    </a>
                </div>
                <div>
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
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + newsInfo[3].ID" target="blank">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img :src="newsInfo[3].Image" loading="lazy" />
                            </div>

                            <h4>{{ newsInfo[3].Title }}</h4>
                        </div>
                    </a>
                    <div class="btn_more">
                        <a href="https://www.ftvnews.com.tw/tag/各國斡旋/" target="_blank">更多新聞</a>
                    </div>
                </div>
            </div>
            <div class="iframe-container">
                <iframe
                    width="916"
                    height="515"
                    src="https://www.youtube.com/embed/zvyUTVjy7A0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: `各國斡旋`,
            newsInfo: [],
        }
    },

    methods: {},

    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=各國斡旋&Page=1&sp=4')
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
    background-image: linear-gradient(to right bottom, #ffffff, #c7dced);
}

.layout_img {
    max-height: 400px;
    min-height: 200px;
    min-width: 100px;
    overflow-y: hidden;
}

.layout_img_inner {
    max-height: 100px;
    min-width: 100px;
    overflow-y: hidden;
}

.layout_grid_inner div:nth-last-child(1) div {
    text-align: center;
}

.layout_grid_inner div:nth-last-child(1) div a {
    padding: 0.3rem;
    display: inline;
    text-align: right;
    border: 1px solid;
}

.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    min-height: 80px;
}

@media screen and (max-width: 768px) {
    .layout_grid_inner {
        grid-template-columns: 1fr;
    }
    .layout_grid_inner div:nth-child(2) {
        margin-top: 2rem;
    }
}

.layout_grid_inner_content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 1rem;
    min-height: 80px;
}

.btn_more {
    margin-top: 3rem;
}
</style>
