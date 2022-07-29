<template>
  <div class="layout" id="intro">
    <div class="layout_grid">

      <h1>台灣神怪知多少？</h1>

    </div>
    <section class="timeline">
      <!-- <ol>
        <li v-for="time in times" :key="time" >
          <div v-on:click="modal_1 = !modal_1">
            <img class="timeimg" v-bind:src="time.url" />
            <time class="time">{{ time.t }}</time>
          </div>
        </li>
      </ol> -->
      <ol>
        <li>
          <div v-on:click="modal_1 = !modal_1">
            <time class="time">康熙24年</time>
            <img class="timeimg" src="../assets/man1.png" />

          </div>
        </li>
        <li>
          <div v-on:click="modal_2 = !modal_2">
            <img class="timeimg" src="../assets/man2.png" />
            <time class="time">1887年</time>
          </div>
        </li>
        <li>
          <div v-on:click="modal_3 = !modal_3">
            <time class="time">1890年</time>
            <img class="timeimg" src="../assets/man3.png" />

          </div>
        </li>
        <li>
          <div v-on:click="modal_4 = !modal_4">
            <img class="timeimg" src="../assets/man4.png" />
            <time class="time">1936年</time>
          </div>
        </li>
        <li>
          <div v-on:click="modal_5 = !modal_5">
            <time class="time">1952年</time>
            <img class="timeimg" src="../assets/man5.png" />
          </div>
        </li>
        <li>
          <div v-on:click="modal_6 = !modal_6">
            <img class="timeimg" src="../assets/man6.png" />
            <time class="time">1965年</time>
          </div>
        </li>
      </ol>
    </section>


    <div>
      <!-- 1 -->
      <div class="c-modal container" v-show="modal_1">
        <!-- computer version -->
        <div class="row computer">
          <div class="row col-5">
            <img class="role" src="../assets/37-林投姐.jpg" alt="">
          </div>
          <div class="row col-7 content">
            <h1>林投姐姐</h1>
            <div class="row col-6">
              <h3>起源小故事</h3>
            </div>
            <div class="row">
              <p>講到台灣女鬼，許多人會想到清代府城三大奇案之一的「林投姐」。
                相傳有名台南女子和泉州商人成親後，男子帶著兩人積蓄回到中國，便再也沒有回來，經過多年等待，女子意識到自己被無情拋棄，遂自縊於林投樹，自此之後，當地民眾就流傳在林投樹林間，時常能看見披頭散髮的女子在遊蕩。
                為了地方安寧，台南仕紳集資建造一間小廟奉祀，林投姐的魂魄才不再出現；也因為林投姐的故事過於悲慘，後人還為她編撰化身厲鬼，前往中國復仇的橋段。
              </p>
              <div class="row ">
                <h3 class="col-6">出沒地區</h3>

                <div class="col-6 text"> 台南</div>
              </div>
              <div class="row ">
                <h3>尋妖之旅</h3>
              </div>
              <div class="row ">
                <p class="col-7">台南火車站
                  根據《臺灣風俗誌》記載，後人建造的林投姐祠，位於台南火車站周遭、「里見醫院」附近一帶的「凹地」內，那裡當時種滿了林投，直到日治時期為了開墾才夷為平地。

                  里見醫院為當時台南署立醫院院長里見四郎，晚年開設的私人醫院，可惜在歷史資料中無法得知正確位置，但過去民族二路是條大水溝，凹地在水溝兩側，從此可推測林投姐祠應該就在附近。
                </p>
                <img src="../assets/土亭仔步道-日月潭國家風景區網站.jpg" class="col-5 travel" alt="">
              </div>
              <div class="row">
              </div>
            </div>
          </div>
        </div>
        <!-- mobile version -->
        <div class="row mobile">
          <div class="row col-12">
            <img class="role" src="../assets/37-林投姐.jpg" alt="">
          </div>
          <div class="row col-12 content">
            <h1>林投姐</h1>
            <div class="row col-12">
              <h3>起源小故事</h3>
            </div>
            <div class="row">
              <p class="col-12">講到台灣女鬼，許多人會想到清代府城三大奇案之一的「林投姐」。<br>
                相傳有名台南女子和泉州商人成親後，男子帶著兩人積蓄回到中國，便再也沒有回來，經過多年等待，女子意識到自己被無情拋棄，遂自縊於林投樹，自此之後，當地民眾就流傳在林投樹林間，時常能看見披頭散髮的女子在遊蕩。
                <br>為了地方安寧，台南仕紳集資建造一間小廟奉祀，林投姐的魂魄才不再出現；也因為林投姐的故事過於悲慘，後人還為她編撰化身厲鬼，前往中國復仇的橋段。

              </p>
            </div>
            <div class="row ">
              <h3 class="col-6">出沒地區</h3>

              <div class="col-6 text"> 台南</div>
            </div>
            <div class="row">
              <h3>尋妖之旅</h3>
            </div>
            <div class="row ">
              <p class="col-12">台南火車站
                根據《臺灣風俗誌》記載，後人建造的林投姐祠，位於台南火車站周遭、「里見醫院」附近一帶的「凹地」內，那裡當時種滿了林投，直到日治時期為了開墾才夷為平地。

                里見醫院為當時台南署立醫院院長里見四郎，晚年開設的私人醫院，可惜在歷史資料中無法得知正確位置，但過去民族二路是條大水溝，凹地在水溝兩側，從此可推測林投姐祠應該就在附近。
              </p>
              <img src="../assets/土亭仔步道-日月潭國家風景區網站.jpg" class="col-12 travel" alt="">
            </div>
            <div class="row">
              <p>台南火車站示意圖</p>
            </div>
          </div>
        </div>
      </div>



    </div>
    <div class="bg" v-show="modal_1" v-on:click="modal_1 = !modal_1"></div>
    <!-- 2 -->
    <div class="c-modal container" v-show="modal_2">
      <div class="row">
        <div class="row col-5">
          <img class="role" src="../assets/45-陳守娘.jpg" alt="">
        </div>
        <div class="row col-7 content">
          <h1>林投姐</h1>
          <div class="row col-6">
            <h3>起源小故事</h3>
          </div>
          <div class="row">
            <p>講到台灣女鬼，許多人會想到清代府城三大奇案之一的「林投姐」。
              相傳有名台南女子和泉州商人成親後，男子帶著兩人積蓄回到中國，便再也沒有回來，經過多年等待，女子意識到自己被無情拋棄，遂自縊於林投樹，自此之後，當地民眾就流傳在林投樹林間，時常能看見披頭散髮的女子在遊蕩。
              為了地方安寧，台南仕紳集資建造一間小廟奉祀，林投姐的魂魄才不再出現；也因為林投姐的故事過於悲慘，後人還為她編撰化身厲鬼，前往中國復仇的橋段。
            </p>
            <div class="row ">
              <h3 class="col-6">出沒地區</h3>

              <div class="col-6 text"> 台南</div>
            </div>
            <div class="row ">
              <h3>尋妖之旅</h3>
            </div>

            <p class="col-7 row">
              台南火車站<br>
              根據《臺灣風俗誌》記載，後人建造的林投姐祠，位於台南火車站周遭、「里見醫院」附近一帶的「凹地」內，那裡當時種滿了林投，直到日治時期為了開墾才夷為平地。

              里見醫院為當時台南署立醫院院長里見四郎，晚年開設的私人醫院，可惜在歷史資料中無法得知正確位置，但過去民族二路是條大水溝，凹地在水溝兩側，從此可推測林投姐祠應該就在附近。
            </p>


            <div class="row">
              <img src="../assets/土亭仔步道-日月潭國家風景區網站.jpg" class="mt-2 col-5 travel" alt="">

            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="bg" v-show="modal_2" v-on:click="modal_2 = !modal_2"></div>
    <!-- 3 -->
    <div class="c-modal" v-show="modal_3">
      <img src="../assets/story3.png" alt="">
    </div>
    <div class="bg" v-show="modal_3" v-on:click="modal_3 = !modal_3"></div>
    <!-- 4 -->
    <div class="c-modal" v-show="modal_4">
      <img src="../assets/story4.png" alt="">
    </div>
    <div class="bg" v-show="modal_4" v-on:click="modal_4 = !modal_4"></div>
    <!-- 5 -->
    <div class="c-modal" v-show="modal_5">
      <img src="../assets/story5.png" alt="">
    </div>
    <div class="bg" v-show="modal_5" v-on:click="modal_5 = !modal_5"></div>
    <!-- 6 -->
    <div class="c-modal" v-show="modal_6">
      <img src="../assets/story6.png" alt="">
    </div>
    <div class="bg" v-show="modal_6" v-on:click="modal_6 = !modal_6"></div>
  </div>


</template>

<script>
export default {
  name: 'Intro',
  isHidden: false,
  data() {

    return {
      // 背景  
      modal_1: false,
      modal_2: false,
      modal_3: false,
      modal_4: false,
      modal_5: false,
      modal_6: false,
      title: [
        `台灣神怪小百科`,
      ],
      times: [
        { t: '康熙24年', url: require('../assets/monster1.png'), modal: false, },
        { t: '1887', url: require('../assets/monster2.png'), modal: false, },
        { t: '1890', url: require('../assets/monster3.png'), modal: false, },
        { t: '1936', url: require('../assets/monster1.png'), modal: false, },
        { t: '1952', url: require('../assets/monster2.png'), modal: false, },
        { t: '1965', url: require('../assets/monster3.png') },

      ],
      images: [
        { url: '../assets/monster1.png' },
        { url: '../assets/monster2.png' },
        { url: '../assets/monster3.png' },

      ]

    }
  },
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    },
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
    }
  }
}
</script>

<style scoped>
* {
  font-family: '華康愛情體W5';
}

.content {
  padding-left: 3rem;
  padding-top: 1rem;
  padding-right: 0rem;
  padding-bottom: 4rem;
}

.travel {}

.role {
  width: 100% 100%;



  padding: 2rem 1.5rem 1rem 3rem;

}

.c-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 85vw;
  height: 85vh;

  color: rgb(7, 7, 7);

  border-radius: 5px;
  background-image: url('../assets/底2.jpg');
  background-size: 100%;
  z-index: 10001;
  opacity: 1;
  transition: .6s;
  overflow: scroll;
}

.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  z-index: 10000;
  opacity: 1;
  transition: .3s;
}

#list li {
  cursor: pointer;
}

.layout {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url('../assets/底1.png');
  background-size: 100% 100%;
  padding: 0rem 0;
  width: 100%;
  height: 100%;
  color: white;

  /* background-image: url('../assets/妖怪網頁_computer\ banner.jpg'); */
}

div {
  font-family: 黑體;
}

picture {
  max-width: 1000px;
  max-height: auto;

  min-height: 20px;
  max-width: 1000px;
}

.timeimg {

  margin-bottom: 1rem;

  filter: saturate(.2);

  cursor: pointer;
}

.timeimg:hover {

  width: 110%;
  filter: saturate(1);
  transition: .5s;
}


.layout p {
  text-align: left;
}

.layout_grid {
  grid-template-columns: 1fr;

  padding: 1rem;
  margin-bottom: 1.2rem;
  text-align: left;
  min-height: 200px;
}

.layout_grid p {
  /* max-width: 600px; */
  padding: 1rem 0;
  /* font-size: ; */
  font-size: 48px;
  margin: auto;
}

.layout_grid img {
  width: 70%;
  height: auto;
  margin: 1rem auto;
}

@media screen and (max-width: 500px) {
  .layout_grid img {
    width: 100%;
  }
}

.fa-triangle {
  color: white;
  text-align: center;
}



/* timeline */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.time {

  color: white;

}



/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline {
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  margin-top: -5.5rem;

}

.timeline ol {
  margin-top: 8rem;
  font-size: 0;
  width: 100vw;
  padding: 200px 0;
  transition: all 1s;

}

.timeline ol li {
  position: relative;
  display: inline-block;
  list-style-type: none;
  width: 200px;
  height: 3px;
  background: rgb(255, 255, 255);
  margin-bottom: 7rem;
}

.timeline ol li:after {
  width: 20px;
}

.timeline ol li:not(:first-child) {
  margin-left: px;
}

/* timelinedot */
.timeline ol li::after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(50% + 1px);
  bottom: 0;
  width: 13px;
  height: 13px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #e4e4e4;
  border: 1px solid grey;
  cursor: pointer;
}

.timeline ol li:hover::after {
  width: 15px;
  height: 15px;
  transition: 1s;
  background: #e5c523;
}



/* 對話筐樣式 */
.timeline ol li div {
  position: absolute;
  left: calc(100% - 12rem);
  width: 200px;
  padding: 15px;
  font-size: 1rem;
  white-space: normal;
  color: black;

}

.timeline ol li div::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
}


.timeline ol li:nth-child(even) div {
  top: -16px;
  transform: translateY(-100%);
}

.timeline ol li:nth-child(even) div::before {
  top: 100%;
  border-color: transparent;
}

.timeline ol li:nth-child(odd) div {
  top: calc(100% + 16px);
}

.timeline ol li:nth-child(odd) div::before {
  top: -8px;
  border-color: transparent;
}

.timeline time {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 華康古印體;
}

h1 {
  margin-top: 35px;
  text-align: start;
  font-size: 70px;


}

h3 {
  color: white;
  background: #333333;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin: 5px;
}

.text {
  font-size: 28px;
  padding: 0.5rem 1rem;
  width: fit-content;
  font-family: '華康愛情體w5';
}



@media screen and (max-width: 500px) {
  .computer {
    display: none;
  }

  .content {
    text-align: center;
    margin-top: -2rem;
  }

  h3 {
    color: white;
    background: #333333;
    padding: 0.5rem 1rem;
    font-size: 24px;
    width: fit-content;
    margin: 10px;
  }

  .role {
    width: 100% 100%;



    margin: auto;

  }

  .travel {
    margin-top: 20px;
  }

  .role {
    width: 100% 100%;



    padding: 2rem 1.5rem 0rem 3rem;

  }

  p {
    font-size: 18px;
    line-height: 28px;
  }


}
</style>
