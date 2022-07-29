<template>
    <div class="layout" id="section2">
        <div class="layout_grid">

            <h5>《民視新聞網》專訪了《唯妖論》及《尋妖誌》的作者─臺北地方異聞工作室，從台灣鬼怪傳說深入了解民俗文化、在地風俗，試著窺探前現代的歷史脈絡。</h5>
            <div class="layout_grid_inner" v-if="newsInfo.length > 0">

                <div class="row">
                    <a @click="show()">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img class="qa" src="../assets/qa.png" alt="">
                                <div class="mobileans">123</div>
                            </div>

                        </div>
                    </a>
                    <a @click="show()">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img class="qa" src="../assets/monster3.png" alt="">
                            </div>

                        </div>
                    </a>
                    <a @click="show()">
                        <div class="layout_grid_inner_content">
                            <div class="layout_img_inner">
                                <img class="qa" src="../assets/monster3.png" alt="">
                            </div>

                        </div>
                    </a>


                </div>
            </div>
            <div class="desktopans">123</div>

        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: `台灣神怪與我們的距離`,
            newsInfo: [],
            value1: true,
            value2: false,


        }
    },

    methods: {
        show: function () {
            // Setting text in element

            document.getElementById("view")
                .innerHTML[1] = "123 "
                    .innerHTML[2] = "456 "

        }
    },



    mounted() {
        // eslint-disable-next-line no-undef
        axios
            .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=美國介入&Page=1&sp=4')
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

    background-image: url(../assets/台灣神怪與我們的距離.png);
    background-size: 100% 100%;
    padding: 1rem 0;
    width: 100%;
    height: 100vh;
    color: white;


}

/* .layout_img {
    max-height: 400px;
    min-height: 200px;
    min-width: 100px;
    overflow-y: hidden;
}

.layout_img_inner {
    max-height: 100px;
    min-width: 100px;
    overflow-y: hidden;
    
} */
img {
    border-radius: 100px;
}

.layout_grid_inner div:nth-child(1) div {
    text-align: center;
}

.layout_grid_inner div:nth-child(1) div a {
    padding: 0.3rem;
    display: block;
    text-align: right;
    border: 1px solid;
}

.layout_grid_inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;


}


@media screen and (max-width: 768px) {
    .layout_grid_inner {
        grid-template-columns: 1fr;
    }

    .roww:nth-child(1) {
        order: 2;
        margin-top: 2rem;
    }

    .roww:nth-child(2) {
        order: 1;
    }
}

.layout_grid_inner_content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-bottom: 1rem;
    min-height: 80px;

}

.btn_more {
    margin-top: 3rem;
}

h5 {
    margin-top: 7rem;

}

h4 {
    background-image: url('../assets/qa.jpg');
    margin-left: 1px;
}

.qa {
    width: 330px;
}

.ans {
    text-align: center;
    align-items: center;
    margin: auto;
}
</style>
