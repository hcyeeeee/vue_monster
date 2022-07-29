<template>
    <div class="layout">
        <div class="layout_grid">
            <h1>關於台灣鬼怪：你可能想問......</h1>
            <h5 class="mt-3">
                《民視新聞網》專訪了《唯妖論》及《尋妖誌》的作者─臺北地方異聞工作室，從台灣鬼怪傳說深入了解民俗文化、在地風俗，試著窺探前現代的歷史脈絡。
            </h5>
            <div class="_question">
                <div class="_question_item" v-for="(ques, index) of questions" :key="index">
                    <div class="_question_grid" @click="turnOn(index)">
                        <img class="man" src="../assets/ghost.png" alt="有鬼" />
                        <div class="_question_inner_grid">
                            <i class="fa-solid fa-caret-left fa-2x"></i>
                            <p>{{ ques.q }}</p>
                            <p :v-if="'modal_' + index">{{ ques.a }}</p>
                            <a :href="ques.link">深度文章</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row rowww mt-5" id="faq">
                <div class="col-12 col-md-6 col-lg-4 mb-4 grid" @click="turnOn(1)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="q1" src="../assets/q1.png" alt="" />
                </div>

                <div class="col-12" id="modal_1" v-show="modal_1">
                    <img class="col-8" src="../assets/a1.png" alt="" />
                    <img class="col-3" src="../assets/ghost.png" alt="" />
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-4 grid" @click="turnOn(2)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="q2" src="../assets/q2.png" alt="" />
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4 grid" @click="turnOn(3)">
                    <img class="man" src="../assets/ghost.png" alt="" />

                    <img class="q3" src="../assets/q3.png" alt="" />
                </div>
            </div>
            <div class="row roww">
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(4)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="row2" src="../assets/q4.png" alt="" />
                </div>
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(5)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="row2" src="../assets/q5.png" alt="" />
                </div>
            </div>
            <div class="row roww">
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(6)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="row2" src="../assets/q6.png" alt="" />
                </div>
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(7)">
                    <img class="man" src="../assets/ghost.png" alt="" />
                    <img class="row2" src="../assets/q7.png" alt="" />
                </div>
            </div> -->
            <!-- <div class="row mt-2 mb-5">
                    <div class="col-12 col-sm-6 grid" @click="turnOn(6)">
                        <img class="man" src="../assets/ghost.png" alt="">
                        <img src="../assets/q6.png" alt="">
                    </div>
                    <div class="col-12 col-sm-6 grid" @click="turnOn(7)">
                        <img class="man" src="../assets/ghost.png" alt="">
                        <img src="../assets/q7.png" alt="">
                    </div>
                </div> -->
        </div>
        <!-- <div class="row ans mb-5">
            <div class="col-12" id="modal_1" v-show="modal_1">
                <img class="col-9 mes" src="../assets/a1.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_2" v-show="modal_2">
                <img class="col-9 mes" src="../assets/a2.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_3" v-show="modal_3">
                <img class="col-9 mes" src="../assets/a3.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_4" v-show="modal_4">
                <img class="col-9 mes" src="../assets/a4.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_5" v-show="modal_5">
                <img class="col-9 mes" src="../assets/a5.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_6" v-show="modal_6">
                <img class="col-9 mes" src="../assets/a6.png" alt="" />
                <img class="col-3 man2" src="../assets/ghost.png" alt="" />
            </div>
            <div class="col-12" id="modal_7" v-show="modal_7">
                <img class="col-10 mes2" src="../assets/a7.png" alt="" />
                <img class="col-2 man3 mb-3" src="../assets/ghost.png" alt="" />
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    q: `Q1：人類社會為何都會不約而同衍生出妖怪或魔物的傳說呢？`,
                    a: `臺北地方異聞工作室：妖怪或魔物的形成原因很多，而其中最主要的原因就是「恐懼」。不只是對難以解釋的自然的恐懼，心理上的恐懼影響也很大；譬如在漫長的演化中，人們也對「不潔」產生不快甚至恐懼，因為不潔很可能是疫病的溫床。在過去，因為致病原是肉眼無法看到的，有些疫病就有了妖魔的形象……`,
                    link: `javascript:;`,
                },
                {
                    q: `Q2：承上，這些傳說或怪談，對生活在其中的人們有什麼意義？`,
                    a: `臺北地方異聞工作室：人們透過「創造怪物」，提高了自己的生存率；人們將自然環境、實際活著的人視為妖怪，追根究底是為了讓自己習慣的環境不受破壞，避免提高生存成本，無論對方是不是真的會傷害他。`,
                    link: `javascript:;`,
                },
                {
                    q: `Q3：似乎不少知名鬼怪都是女性的形象，為什麼呢？`,
                    a: `臺北地方異聞工作室：妖怪的出現，或是被妖怪化的人類，都跟社會邊緣，或是被貶低的位階、位置有關。女性容易以鬼怪形象出現，自然也是兩性不平等的現實造成的。在台灣，最顯著的例子是姑婆不入宗祠，傳統社會將女性當成生小孩的工具，因此未婚女性死後不會被祭拜，必將成為孤魂野鬼……`,
                    link: `javascript:;`,
                },
                {
                    q: `Q4：當科技與科學思想越發達，妖怪或靈異傳說是否會越來越少？`,
                    a: `臺北地方異聞工作室：人類是感性的動物。許多科學家鑽研科學到最後，反而更加信仰上帝，現代人享受著科學帶來的各種便利，卻也仍舊在創造迷信（台灣「綠色乖乖」的傳說在科技業大行其道，甚至登上了BBC）。說到底，科學思想只是一種理解世界的方式，不一定站在神怪傳說的對立面；因此要神怪傳說徹底消失，是不太現實的……`,
                    link: `javascript:;`,
                },
                {
                    q: `Q5：民間傳說中，歷史人物與神怪傳聞往往互相參雜，例如鄭成功斬妖除魔等屢見不鮮，為什麼會這樣呢？`,
                    a: `臺北地方異聞工作室：在民間傳說中，有許多歷史人物成了神怪故事的主角，而這些傳說會流傳，不見得都跟史實密切結合，但都在某種程度上反映了時代氛圍，民間會以他們作為故事主角，是值得去追究的；譬如鄭成功到處斬妖除魔的傳說，很可能與鄭成功信仰隨著漢人移民移動有關。除此之外，林爽文也有神異事蹟，其中甚至有不少跟鄭成功重疊……`,
                    link: `javascript:;`,
                },
                {
                    q: `Q6：日本鬼怪傳說深植人心，甚至發展成漫畫電影等各種商業創作，但台灣的在地傳說卻相對低調，我們的文化推廣是不是遇到什麼困境呢？`,
                    a: `臺北地方異聞工作室：日本的民俗學、妖怪學已經發展百年以上，而台灣卻是民俗學式微，妖怪學才正要開始發展；當日本就像西方，已經將民俗想像視覺化，而且已經有百年以上的經驗，而台灣卻還在高呼現代化，將宮廟文化視為低俗。民俗原本是生活的重心，卻被現代性給驅除；說到底，台灣還沒有好好處理現代化之後與前現代的關係……`,
                    link: `javascript:;`,
                },
                {
                    q: `Q7：台灣有些影視娛樂、藝術作品融合了妖怪文化，您們也曾推出書籍、遊戲、展覽等，推廣台灣民俗與怪談文化不遺餘力，未來您們還有哪些相關計畫呢？`,
                    a: `臺北地方異聞工作室：近期的話，以台灣都市傳說和靈異節目為主題的桌遊《談鬼俱樂部》募資剛結束，正在準備出貨；除此之外，過去我們做的妖怪研究，也有進一步的發展與修正，估計將會出版新的妖怪專著……`,
                    link: `javascript:;`,
                },
            ],
            modal_0: false,
            modal_1: false,
            modal_2: false,
            modal_3: false,
            modal_4: false,
            modal_5: false,
            modal_6: false,
            title: `關於台灣鬼怪：你可能想問......`,
            newsInfo: [],
            value1: true,
            value2: false,

            name: 'Vue.js | Methods',
        }
    },

    methods: {
        show() {
            // Setting text in element

            document.getElementById("view")
                .innerHTML[1] = "123 "
                    .innerHTML[2] = "456 "

        },
        turnOn(i) {
            console.log(this.modal_1);
            switch (i) {
                case 1:
                    this.modal_1 = true
                    this.modal_2 = false
                    this.modal_3 = false
                    this.modal_4 = false
                    this.modal_5 = false
                    this.modal_6 = false
                    this.modal_7 = false
                    break
                case 2:
                    this.modal_1 = false
                    this.modal_2 = true
                    this.modal_3 = false
                    this.modal_4 = false
                    this.modal_5 = false
                    this.modal_6 = false
                    this.modal_7 = false
                    break
                case 3:
                    this.modal_1 = false
                    this.modal_2 = false
                    this.modal_3 = true
                    this.modal_4 = false
                    this.modal_5 = false
                    this.modal_6 = false
                    this.modal_7 = false
                    break
                case 4:
                    this.modal_1 = false
                    this.modal_2 = false
                    this.modal_3 = false
                    this.modal_4 = true
                    this.modal_5 = false
                    this.modal_6 = false
                    this.modal_7 = false
                    break
                case 5:
                    this.modal_1 = false
                    this.modal_2 = false
                    this.modal_3 = false
                    this.modal_4 = false
                    this.modal_5 = true
                    this.modal_6 = false
                    this.modal_7 = false
                    break
                case 6:
                    this.modal_1 = false
                    this.modal_2 = false
                    this.modal_3 = false
                    this.modal_4 = false
                    this.modal_5 = false
                    this.modal_6 = true
                    this.modal_7 = false
                    break
                case 7:
                    this.modal_1 = false
                    this.modal_2 = false
                    this.modal_3 = false
                    this.modal_4 = false
                    this.modal_5 = false
                    this.modal_6 = false
                    this.modal_7 = true
                    break
            }
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

    background-image: url(../assets/bg3.png);
    background-size: 100% 100%;
    padding: 1rem 0;
    width: 100%;
    height: 100%;
    color: white;
    font-family: '華康愛情體W5';

}

.layout_grid {
    max-width: 1500px;
}

.layout_grid h5 {
    max-width: 1100px;
    text-align: left;
    margin: auto;
    font-size: 22px;
}

.container {
    display: flex;
    margin: auto;
    margin-top: 12rem;
}


.rowww {
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 30px;
    margin-top: -1rem;

}

.roww {

    align-items: center;
    justify-content: center;
    margin: auto;
    width: 105%;
    margin-top: -1rem;
    margin-right: 30px;
    margin-bottom: 30px;
    padding-right: 20px;

}

.ans {
    margin-top: -4rem;
}

.rowww img {
    height: 85px;

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



h4 {
    background-image: url('../assets/qa.jpg');
    margin-left: 1px;
}

.qa {
    width: 300px;
}

.dialog-bottom {
    background: #f8f9fa;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin-bottom: 10px;
    position: relative;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 1rem;
    border-radius: 10px;
}

.dialog-bottom::after {
    border-color: #ffffff #ffffff rgb(0 0 0 / 8%) transparent;
    border-style: solid solid solid solid;
    border-width: 10px 19px;
    /* bottom: -20px; */
    top: 10%;
    left: -20px;
    content: "";
    height: 0px;
    position: absolute;
    left: -38px;
    left: px;
    width: 0px;
}

.ans {
    text-align: center;
    align-items: center;
    margin: auto;
    width: 800px;
    margin-top: -5rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 0.5rem;
    cursor: pointer;

}

.man {
    border-radius: 100px;
    width: 100px;
}

.man2 {
    border-radius: 100px;
    width: 140px;
    margin-left: 1rem;
}

.man3 {
    border-radius: 100px;
    width: 80px;
    margin-left: 1rem;
}

h1 {
    font-family: 華康古印體;
    font-size: 70px;
}

.mes {
    width: 600px;
    margin-top: 3rem;
}

.mes2 {
    width: 680px;
    margin-top: 3rem;
}
</style>
