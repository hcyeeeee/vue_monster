<template>
    <div class="layout" id="faq">
        <div class="layout_grid">
            <h2>關於台灣鬼怪：你可能想問......</h2>
            <h4 class="mt-3">
                《民視新聞網》專訪了《唯妖論》及《尋妖誌》的作者─臺北地方異聞工作室，從台灣鬼怪傳說深入了解民俗文化、在地風俗，試著窺探前現代的歷史脈絡。
            </h4>
            <div class="_question">
                <div class="_question_item" v-for="(ques, index) of questions" :key="index" @click="turnOn(index)">
                    <div class="_question_grid">
                        <img class="man" v-bind:src="ques.url" alt="有鬼" />
                        <div class="_question_inner_grid">
                            <i class="fa-solid fa-caret-left fa-2x"></i>
                            <p>{{ ques.q }} </p>
                            <br>
                            <i :id="'hand_' + index" class=" fa-regular fa-hand-pointer "></i>
                            <br>
                            <p :id="'modal_' + index" class="noShow">{{ ques.a }}
                                <br>
                                <a :href="ques.link" target="blank">(深度回覆請點此)</a>
                            </p>

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
            questions: [
                {
                    q: `Q1：人類社會為何都會不約而同衍生出妖怪或魔物的傳說呢？`,
                    a: `A：妖怪或魔物的形成原因很多，而其中最主要的原因就是「恐懼」。不只是對難以解釋的自然的恐懼，心理上的恐懼影響也很大；譬如在漫長的演化中，人們也對「不潔」產生不快甚至恐懼，因為不潔很可能是疫病的溫床。在過去，因為致病原是肉眼無法看到的，有些疫病就有了妖魔的形象……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0153`,
                    url: require('../assets/g1.jpg')
                },
                {
                    q: `Q2：承上，這些傳說或怪談，對生活在其中的人們有什麼意義？`,
                    a: `A：人們透過「創造怪物」，提高了自己的生存率；人們將自然環境、實際活著的人視為妖怪，追根究底是為了讓自己習慣的環境不受破壞，避免提高生存成本，無論對方是不是真的會傷害他。`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0153`,
                    url: require('../assets/g2.jpg')
                },
                {
                    q: `Q3：似乎不少知名鬼怪都是女性的形象，為什麼呢？`,
                    a: `A：妖怪的出現，或是被妖怪化的人類，都跟社會邊緣，或是被貶低的位階、位置有關。女性容易以鬼怪形象出現，自然也是兩性不平等的現實造成的。在台灣，最顯著的例子是姑婆不入宗祠，傳統社會將女性當成生小孩的工具，因此未婚女性死後不會被祭拜，必將成為孤魂野鬼……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0169`,
                    url: require('../assets/g3.jpg')
                },
                {
                    q: `Q4：當科技與科學思想越發達，妖怪或靈異傳說是否會越來越少？`,
                    a: `A：人類是感性的動物。許多科學家鑽研科學到最後，反而更加信仰上帝，現代人享受著科學帶來的各種便利，卻也仍舊在創造迷信（台灣「綠色乖乖」的傳說在科技業大行其道，甚至登上了BBC）。說到底，科學思想只是一種理解世界的方式，不一定站在神怪傳說的對立面；因此要神怪傳說徹底消失，是不太現實的……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0165`,
                    url: require('../assets/g4.jpg')
                },
                {
                    q: `Q5：民間傳說中，歷史人物與神怪傳聞往往互相參雜，例如鄭成功斬妖除魔等屢見不鮮，為什麼會這樣呢？`,
                    a: `A：在民間傳說中，有許多歷史人物成了神怪故事的主角，而這些傳說會流傳，不見得都跟史實密切結合，但都在某種程度上反映了時代氛圍，民間會以他們作為故事主角，是值得去追究的；譬如鄭成功到處斬妖除魔的傳說，很可能與鄭成功信仰隨著漢人移民移動有關。除此之外，林爽文也有神異事蹟，其中甚至有不少跟鄭成功重疊……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0176`,
                    url: require('../assets/g5.jpg')
                },
                {
                    q: `Q6：日本鬼怪傳說深植人心，甚至發展成漫畫電影等各種商業創作，但台灣的在地傳說卻相對低調，我們的文化推廣是不是遇到什麼困境呢？`,
                    a: `A：日本的民俗學、妖怪學已經發展百年以上，而台灣卻是民俗學式微，妖怪學才正要開始發展；當日本就像西方，已經將民俗想像視覺化，而且已經有百年以上的經驗，而台灣卻還在高呼現代化，將宮廟文化視為低俗。民俗原本是生活的重心，卻被現代性給驅除；說到底，台灣還沒有好好處理現代化之後與前現代的關係……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0182`,
                    url: require('../assets/g6.jpg')
                },
                {
                    q: `Q7：台灣有些影視娛樂、藝術作品融合了妖怪文化，您們也曾推出書籍、遊戲、展覽等，推廣台灣民俗與怪談文化不遺餘力，未來您們還有哪些相關計畫呢？`,
                    a: `A：近期的話，以台灣都市傳說和靈異節目為主題的桌遊《談鬼俱樂部》募資剛結束，正在準備出貨；除此之外，過去我們做的妖怪研究，也有進一步的發展與修正，估計將會出版新的妖怪專著……`,
                    link: `https://www.ftvnews.com.tw/news/detail/2022721W0182`,
                    url: require('../assets/g7.jpg')
                },
            ],


            // times: [
            //   { t: '康熙24年', url: require('../assets/monster1.png'), modal: false, },
            //   { t: '1887', url: require('../assets/monster2.png'), modal: false, },
            //   { t: '1890', url: require('../assets/monster3.png'), modal: false, },
            //   { t: '1936', url: require('../assets/monster1.png'), modal: false, },
            //   { t: '1952', url: require('../assets/monster2.png'), modal: false, },
            //   { t: '1965', url: require('../assets/monster3.png') },

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
            control: 0,


            name: 'Vue.js | Methods',
        }
    },

    methods: {
        turnOn(i) {
            let checkItem = document.querySelector('#modal_' + i)
            let hand = document.querySelector('#hand_' + i)

            if (this.control) {
                checkItem.classList.remove('isShow')
                hand.classList.remove('noShow')
                this.control = 0

            } else {

                for (let j = 0; j < 7; j++) {
                    document.querySelector('#modal_' + j).classList.remove('isShow')
                    document.querySelector('#hand_' + j).classList.remove('noShow')
                }

                checkItem.classList.add('isShow')
                hand.classList.add('noShow')
                this.control = 1
            }

        },

    }


}
</script>

<style scoped>
/* ADD:0728 */





@keyframes mymove {

    0%,

    100% {
        transform: translateY(-2px);
    }

    40% {
        transform: translateY(-7px);
    }

    60% {
        transform: translateY(-2px);
    }
}

.fa-hand-pointer {

    position: relative;
    animation: mymove 1.2s infinite;

}

.noShow {
    display: none;
}

.isShow {
    display: block;
}

.fa-caret-left {
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
}

._question {
    padding: 3rem;
}

._question_item {
    display: inline-block;
    max-width: 500px;
    cursor: pointer;
}

._question_item ._question_grid {
    display: flex;
    align-items: center;
    margin: 1rem;
}

._question_item ._question_grid ._question_inner_grid {
    background: #fff;
    color: black;
    border-radius: 30px;
    position: relative;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

._question_item ._question_grid ._question_inner_grid p:nth-child(3) {
    color: #77261d;
}

/* END */
.layout {
    background-image: url(../assets/bg3.jpg);
    background-size: 100% 100%;
    padding: 1rem 0;
    width: 100%;
    height: 100%;
    color: white;

}

.layout_grid {
    max-width: 1200px;
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

    ._question {
        padding: 0rem;
    }

    h4 {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    h2 {
        font-size: 2.9rem !important;
        line-height: 3.7rem;
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

/* h4 {
    background-image: url('../assets/qa.jpg');
    margin-left: 1px;
} */

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
    content: '';
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
    height: 100px;
}

.man2 {
    border-radius: 100px;
    width: 140px;
    margin-left: 1rem;
    height: 140px;
}

.man3 {
    border-radius: 100px;
    width: 80px;
    margin-left: 1rem;
}


.mes {
    width: 600px;
    margin-top: 3rem;
}

.mes2 {
    width: 680px;
    margin-top: 3rem;
}

a {
    text-decoration: none;
    cursor: pointer;
    padding: 10px;
    font-weight: 700;
    color: rgb(39, 55, 69);

}

h4 {
    font-size: 1.2rem;
    line-height: 1.8rem;
}
</style>
