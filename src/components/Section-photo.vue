<template>
    <div class="layout" id="section_photo">
        <div class="layout_grid">
            <h2><i class="fa-solid fa-swords"></i> {{ title }}</h2>
            <div class="layout_inner">
                <div class="layout_photo" v-for="(photo, index) of photos" :key="index">
                    <img :src="photo.img" :alt="photo.title" />
                    <h3>
                        {{ photo.title }}
                        <i class="fa-solid fa-link" @click="linkHandler(photo.href)"></i>
                    </h3>
                    <div class="layout_content" v-html="photo.intro"></div>

                    <template v-if="index === toggleModal">
                        <div class="layout_content" v-html="photo.content"></div>
                    </template>
                    <button class="btn_more" @click="moreHandler(index)">看更多</button>
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '戰地故事',
            photos: [
                {
                    title: '烏克蘭國民女兵戰死',
                    img: require('../assets/photo/國民女兵.jpg'),
                    href: `https://www.facebook.com/ftvnews53/photos/10159633188770901`,
                    intro: `
                    <p>
                        有「國民女兵」之稱的烏克蘭士兵Iryna Tsvila，在戰爭中不幸於基輔近郊陣亡殉國。直到生命的最後一刻，Tsvila都還心繫家鄉，在社群平台上向世界喊話，「誰願意來幫忙捍衛基輔」，成了她的遺言。
                    </p>
                    `,
                    content: `
                    <p>
                        據了解，Tsvila育有5個小孩，過去的職業是老師，曾志願參與烏東頓巴斯的戰事，並將經歷寫成文章，為書籍《戰爭之聲》的作者之一。
                    </p>
                    <p>
                        當俄烏戰事爆發，她主動回歸軍隊，想不到開戰第一天，卻在擊退俄軍裝甲部隊時，命喪炮火之下，讓當地人民感到相當不捨，尊稱Tsvila為「烏克蘭女英雄」。
                    </p>
                    `,
                    isShow: false,
                },
                {
                    title: '俄羅斯的良心',
                    img: require('../assets/photo/媒體良心.jpg'),
                    href: `https://www.ftvnews.com.tw/news/detail/2022315W0029`,
                    intro: `
                    <p>
                        俄羅斯入侵烏克蘭，俄國內部反戰聲浪不斷，一名女子在當地時間週一晚上，闖入俄羅斯官媒「第一頻道」電視台新聞直播現場，高舉反戰標語「俄國人反對戰爭」，更要俄羅斯人民別相信政府，「他們正在欺騙你們」。
                    </p>
                    `,
                    content: `
                    <p>
                        官方火速將畫面切回俄羅斯遭到制裁的悲憤新聞，只留下女子持續抗議的背景音。事實上，這名抗議的反戰女子正是任職於「第一頻道」的編輯，奧賽亞尼柯娃（Marina Ovsyannikova）。
                    </p>
                    <p>
                        奧賽亞尼柯娃行動前公布一段預錄的「自白影片」，她提到自己的父親是烏克蘭人，母親是俄羅斯人，他們從來就不是敵人，「過去幾年我任職於『第一頻道』，為克里姆林宮宣傳，對此我感到羞恥，我允許自己透過電視螢幕說謊，我曾默許讓俄國人被愚弄，對此我感到羞恥，終結這起瘋狂行徑，決定權掌握在你我手上」。
                    </p>
                    <p>
                        奧賽亞尼柯娃呼籲俄羅斯民眾勇敢站出來、加入抗爭，她堅定表示「不必害怕！他們不能關押我們每一個人！」
                    </p>
                    `,
                    isShow: false,
                },
                {
                    title: '溫馨接送烏克蘭難民',
                    img: require('../assets/photo/溫馨接送烏克蘭難民.jpg'),
                    href: `https://www.facebook.com/ftvnews53/photos/10159649543535901`,
                    intro: `
                    <p>
                        俄羅斯對烏克蘭開戰，身為一個外國平民，你覺得自己可以怎麼幫上忙？來自西班牙的Héctor Pérez和他的朋友Paulo Ribeiro，一起做出了很好的示範──「自掏腰包開車載送難民」。
                    </p>
                    `,
                    content: `
                    <p>
                        Pérez表示：「看到他們（俄軍）在小鎮上展開屠殺嚇到我了，然後我就決定要採取行動」。於是兩人開著兩台車，從西班牙的加利西亞一路開到了位於波蘭東南方，與烏克蘭相鄰的城鎮梅狄卡（Medyka），尋找想要前往西班牙的烏克蘭人。
                    </p>
                    <p>
                        在這項援助行動中，對他們來說遇到最複雜的事情，就是與烏克蘭人的溝通，因為他們不會說烏克蘭語、俄語，而當地許多人甚至不會說英語。幸好後來透過會講西語的當地人幫助下，他們找到了9位需要搭車順路離開的烏克蘭人。
                    </p>
                    <p>
                        兩人用4天的時間，開車來回跑了超過6400公里，大概是繞行台灣7圈的距離，也希望這麼做能夠引起其他人仿效。整趟路程花費約900歐元，Pérez受訪時認為，花大概200歐元就能救一條人命很值得，對於自己和朋友的善舉，他則表示：「你不用很有錢也能支持他們，你只需要有想幫忙的心」。
                    </p>
                    `,
                    isShow: false,
                },
                {
                    title: '令人敬佩的灰狼上校',
                    img: require('../assets/photo/灰狼上校.jpg'),
                    href: `https://www.facebook.com/ftvnews53/photos/a.10150159841020901/10159653305820901/`,
                    intro: `
                    <p>
                        代號「灰狼」的烏克蘭空軍上校Oleksandr Oksanchenko，是當地最優秀的戰鬥機飛行員之一。面對俄羅斯入侵，Oksanchenko義無反顧加入保家衛國行列，卻不幸於2月25日戰死殉國。總統澤倫斯基日前追授「烏克蘭英雄」稱號，紀念勇敢的灰狼上校。
                    </p>
                    `,
                    content: `
                    <p>
                        Oksanchenko飛行時數逾2000個小時，2013年到2018年間，擔任烏克蘭空軍「側衛」飛行表演隊成員，為國家的重要門面。歷年來也經常出席多項國際航空活動，是航空界十分有名的戰機特技飛行員。
                    </p>
                    <p>
                        2018年Oksanchenko退役，但他仍自願留營培訓後輩；如今國家有難，Oksanchenko義無反顧申請重返現役，多次為國起飛，奮力在劣勢中與俄羅斯空軍交戰。其中在一場保衛首都的戰役中，Oksanchenko不幸於基輔上空被俄軍防空飛彈擊墜，在生命的最後仍堅守保護國家，傳奇一生就此劃下句點。
                    </p>
                    `,
                    isShow: false,
                },
                {
                    title: '11歲男孩獨自跨越烏克蘭',
                    img: require('../assets/photo/烏克蘭11歲男童.jpg'),
                    href: ` https://www.ftvnews.com.tw/news/detail/2022306W0166`,
                    intro: `
                    <p>
                        俄烏戰亂，不少烏克蘭民眾紛紛收拾行囊逃離家園。而一名11歲的烏克蘭男童，僅帶著護照、背包，手上寫著電話號碼，就獨自跨過半個烏克蘭入境鄰國斯洛伐克，也被當地政府稱為「當晚最大的英雄」。
                    </p>
                    `,
                    content: `
                    <p>
                        斯洛伐克內政部表示「志工發現後帶他到溫暖的地方，提供食物和飲料給他。孩子用他的笑容、無畏與值得成為真正英雄的決心，感動了所有人。感謝他手上號碼和護照中的一張紙，讓他能順利聯絡到親人，讓整個故事圓滿結束」。
                    </p>
                    `,
                    isShow: false,
                },
                {
                    title: '心痛撫屍的烏克蘭父親',
                    img: require('../assets/photo/烏克蘭父親.jpg'),
                    href: `https://www.ftvnews.com.tw/news/detail/2022304W0009`,
                    intro: `
                    <p>
                        俄羅斯入侵烏克蘭，戰事期間也不斷有平民傷亡。除了烏克蘭首都基輔遭受攻擊，位於烏克蘭南部的鎮港市馬里烏波爾（Mariupol）也遭俄軍不斷攻擊，現面臨斷水、斷電、沒糧食的慘況。
                    </p>
                    `,
                    content: `
                    <p>
                        戰火逢寒冬，連暖氣也停工，當地婦女、孩童都安置到地下室，但還有許多來不及逃生的市民被轟炸身亡，許多身亡民眾也僅能用白布遮蓋，暫停放在地下室。
                    </p>
                    <p>
                        一名烏克蘭駐地記者Ｍstyslav Chernov透過Instagram上傳一張讓人心碎的影片，畫面中擔架上覆蓋著白布，而1名中年男子坐在擔架旁痛哭，該記者表示，又一個馬里烏波爾的青少年在無情戰火下失去生命，而這名少年的父親只能對著少年屍體痛哭。
                    </p>
                    `,
                    isShow: false,
                },
            ],
            toggleModal: false,
        }
    },

    methods: {
        linkHandler(link) {
            window.open(link)
        },
        moreHandler(index) {
            if (index == this.toggleModal) {
                this.toggleModal = false
            } else {
                this.toggleModal = index
            }
        },
    },
}
</script>

<style scoped>
.layout_inner {
    column-count: 2;
    column-gap: 1rem;
}

@media screen and (max-width: 768px) {
    .layout_inner {
        column-count: 1;
    }
}

.layout_inner .layout_photo {
    overflow: hidden;
    transition: 0.3s;
    position: relative;
    background-color: #fbfbfb;
    break-inside: avoid;
    margin-bottom: 1rem;
    box-shadow: 5px 20px 20px gray;
}

.layout_inner .layout_photo:hover {
    background-color: #f0f0f0;
}

.layout_inner .layout_photo h3 {
    text-align: center;
    font-size: 1.2rem !important;
    font-weight: bolder;
    color: #31455b;
}

.layout_inner .layout_photo button {
    width: 100%;
    border: none;
    background-color: #fff;
}

.btn_more {
    background-color: #e3e3e3;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0px 10px 60px #7b7b7b;
}
</style>
