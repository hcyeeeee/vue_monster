<template>
    <div class="layout" id="game">


        <section class=" bg--main game__wrap ">


            <div class="row">
                <div v-show="end">
                    <div :class="[{ isQuiz: start }]"></div>
                    <div class="game__desc" v-if="!start">
                        <div class="title">
                            <h3 class="">鬼怪愛情診斷書<br>你的愛情觀屬於哪種台灣鬼怪?</h3>

                            <p class="">農曆七月，也是俗稱的「鬼月」，講到妖魔鬼怪，你第一個會聯想到什麼？是殭屍、魔神仔，還是紅衣小女孩？

                                現在就來做個心理測驗，看看你在愛情中，屬於哪個台灣鬼怪？
                            </p>
                            <a class="startbtn" id="" v-on:click="startQuiz(); start = !start; ">立即檢測</a>
                        </div>
                    </div>


                    <div class="row mt-5  game">
                        <div class="game__quiz">
                            <div class="Q">
                                <div class="num">
                                    第<span>{{ q_data[q_no].t }}</span>則 情境題
                                </div>
                                <div class="ques">{{ q_data[q_no].ques }}</div>
                            </div>

                            <!-- <img src="" class="city" alt="" /> -->

                            <div class="ans__wrap row " v-show="q_no == 0">
                                <img class="img__wrap col-6" src="../assets/Q4pic.jpg">
                                <div class=" ans col-6">
                                    <label>
                                        <input @click="next" type="radio" name="quesA" v-model="quesA"
                                            :value="q_data[q_no].value[0]" />
                                        {{ q_data[q_no].ans[0] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesA" v-model="quesA"
                                            :value="q_data[q_no].value[1]" />
                                        {{ q_data[q_no].ans[1] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesA" v-model="quesA"
                                            :value="q_data[q_no].value[2]" />
                                        {{ q_data[q_no].ans[2] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesA" v-model="quesA"
                                            :value="q_data[q_no].value[3]" />
                                        {{ q_data[q_no].ans[3] }}
                                    </label>
                                </div>
                            </div>

                            <div class="ans__wrap row" v-show="q_no == 1">
                                <img class="img__wrap col-6" src="../assets/Q1pic.jpg">
                                <div class="ans col-6">
                                    <label>
                                        <input @click="next" type="radio" name="quesB" v-model="quesB"
                                            :value="q_data[q_no].value[0]" />
                                        {{ q_data[q_no].ans[0] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesB" v-model="quesB"
                                            :value="q_data[q_no].value[1]" />
                                        {{ q_data[q_no].ans[1] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesB" v-model="quesB"
                                            :value="q_data[q_no].value[2]" />
                                        {{ q_data[q_no].ans[2] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesB" v-model="quesB"
                                            :value="q_data[q_no].value[3]" />
                                        {{ q_data[q_no].ans[3] }}
                                    </label>
                                </div>
                            </div>

                            <div class="ans__wrap row" v-show="q_no == 2">
                                <img class="img__wrap col-6" src="../assets/Q2pic.jpg">
                                <div class=" ans col-6">
                                    <label>
                                        <input @click="next" type="radio" name="quesC" v-model="quesC"
                                            :value="q_data[q_no].value[0]" />
                                        {{ q_data[q_no].ans[0] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesC" v-model="quesC"
                                            :value="q_data[q_no].value[1]" />
                                        {{ q_data[q_no].ans[1] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesC" v-model="quesC"
                                            :value="q_data[q_no].value[2]" />
                                        {{ q_data[q_no].ans[2] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesC" v-model="quesC"
                                            :value="q_data[q_no].value[3]" />
                                        {{ q_data[q_no].ans[3] }}
                                    </label>
                                </div>
                            </div>

                            <div class="ans__wrap row" v-show="q_no == 3">
                                <img class="img__wrap col-6" src="../assets/Q3pic.jpg" alt="">
                                <div class="ans col-6">
                                    <label>
                                        <input @click="next" type="radio" name="quesD" v-model="quesD"
                                            :value="q_data[q_no].value[0]" />
                                        {{ q_data[q_no].ans[0] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesD" v-model="quesD"
                                            :value="q_data[q_no].value[1]" />
                                        {{ q_data[q_no].ans[1] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesD" v-model="quesD"
                                            :value="q_data[q_no].value[2]" />
                                        {{ q_data[q_no].ans[2] }}
                                    </label>
                                    <label>
                                        <input @click="next" type="radio" name="quesD" v-model="quesD"
                                            :value="q_data[q_no].value[3]" />
                                        {{ q_data[q_no].ans[3] }}
                                    </label>
                                </div>
                            </div>



                            <button class="back" v-if="q_no != 0" @click="back()">
                                <span>回上一題</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end會到此 -->
                <div id="result_img" class=" result computer " v-show="result_">
                    <p id="sum">{{ quesA }}+{{ quesB }}+{{ quesC }}+{{ quesD }}</p>
                    <img src="" class="result__img" />
                    <div class="resultbtn row">
                        <a class="col-12 col-md-4 " href="#intro"><img src="../assets/台灣神怪知多少btn.png" alt="" />
                        </a>
                        <a class="col-12 col-md-4" href="#faq"><img src="../assets/QAbtn.png" alt="" />
                        </a>
                        <a class="col-12 col-md-4" href=""><img src="../assets/重新測驗btn.png" alt="" />
                        </a>
                    </div>
                    <!-- <div class="share row">
                        <a class="col-4" target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Ftaiwanghost%2F&amp;src=sdkpreparse"><img
                                src="../assets/fb.png" alt="" />
                        </a>
                        <a class="col-3" href="#intro">
                            <img src="../assets/ig.png" alt="" />
                        </a>
                        <a class="col-4"
                            href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/taiwanghost/"
                            target="_blank">
                            <img src="../assets/line.png" alt="" />
                        </a>
                        <a class="col-4" target="_blank" @click="getLocalUrl">
                            <img src="../assets/share.png" alt="" />
                        </a>
                    </div> -->
                </div>

            </div>


        </section>
    </div>
</template>
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"
></script>
<script>
export default {
  data() {
    return {
      result_img1: require("../assets/ans1.png"),
      result_img2: require("../assets/ans2.png"),
      result_img3: require("../assets/ans3.png"),
      result_img4: require("../assets/ans4.png"),
      result_img5: require("../assets/ans5.png"),
      result_img6: require("../assets/ans6.png"),
        result_img7: require("../assets/ma1.png"),
      result_img8: require("../assets/ma2.png"),
      result_img9: require("../assets/ma3.png"),
      result_img10: require("../assets/ma4.png"),
      result_img11: require("../assets/ma5.png"),
      result_img12: require("../assets/ma6.png"),


      start: false,
      end: true,
      result_: false,
      quesA: 0,
      quesB: 0,
      quesC: 0,
      quesD: 0,
      talk: "",
      man: "",
      resultQuote: "",
      resultDesc: "",
      ogimg: "",
      q_no: 0,
      q_data: [

        {
       
          ques: "遇到喜歡的對象時，你會怎麼做？",
          ans: [
            " 默默暗戀對方，不敢行動 ",
            " 主動約對方見面，製造相處機會 ",
            " 關注對方喜好，送禮表達心意 ",
            " 喜歡就要說出口，直球告白 ",
          ],
          value: [1, 3, 5, 7],
          t: "一",
        },
        {
          ques: "你選擇伴侶時，最重視的特質？",
          ans: [" 誠實 ", " 共同興趣 ", "有上進心 ", " 外貌 "],
          value: [1, 3, 5, 7],
          t: "二",
        },
        {
          ques: "你最喜歡的約會模式？",
          ans: [
            " 一起待在家裡 ",
            " 一起看場電影 ",
            " 一起逛街購物 ",
            " 一起挑戰刺激戶外活動 ",
          ],
          value: [1, 3, 5, 7],
          t: "三",
        },
        {
          ques: "和情人吵架時，你會怎麼做？",
          ans: [
            " 放低姿態，先向對方求和 ",
            " 迴避衝突，希望雙方冷靜過後再談 ",
            " 就事論事，找出爭執的原因 ",
            " 要求道歉，無論自己是否理虧 ",
          ],
          value: [1, 3, 5, 7],
          t: "四",
        },
      ],
    };
  },
  methods: {
    startQuiz() {
      $(".game__quiz").fadeIn(500);
      $(".game__wrap").removeClass("bg--main");
      $(".game__wrap").addClass("bg--main2");

      console.log(this.q_no); // 0
      $(".ans__wrap").eq(this.q_no).fadeIn();

      console.log("當前第幾題：", this.q_no + 1);
    },

    next() {
      if (this.q_no == 3) {
        this.print();
      } else {
        this.q_no++;
        console.log("當前第幾題：", this.q_no + 1);
      }

      $(".ans__wrap")
        .eq(this.q_no - 1)
        .hide(); //0
      $(".ans__wrap").eq(this.q_no).fadeIn(); //1
    },

    back() {
      this.q_no--; //0
      console.log("當前第幾題：", this.q_no + 1);
      $(".ans__wrap")
        .eq(this.q_no + 1)
        .hide();
      $(".ans__wrap").eq(this.q_no).fadeIn();
    },

    print() {
      setTimeout(() => {
        let sum = document.querySelector("#sum").innerHTML.split("+"); // 將所有值以符號＋切開 可以看137行的p標籤
        let result = sum.reduce((a, b) => Number(a) + Number(b)); // 將所有值轉成數字再加總
var W = window.innerWidth;
console.log(window.innerWidth);
this.end = false;
        this.result_ = true;
if(W > 768){
        if (result <= 7) {
          document.querySelector("#result_img > img").src = this.result_img1;
        }
         else if (result >= 8 && result <= 11) {
          document.querySelector("#result_img > img").src = this.result_img2;
        } else if (result >= 12 && result <= 15) {
          document.querySelector("#result_img > img").src = this.result_img3;
        } else if (result >= 16 && result <= 19) {
          document.querySelector("#result_img > img").src = this.result_img4;
        } else if (result >= 20 && result <= 23) {
          document.querySelector("#result_img > img").src = this.result_img5;
        } else {
          document.querySelector("#result_img > img").src = this.result_img6;
        }
      }else{
         if (result <= 7) {
          document.querySelector("#result_img > img").src = this.result_img7;
        }
         else if (result >= 8 && result <= 11) {
          document.querySelector("#result_img > img").src = this.result_img8;
        } else if (result >= 12 && result <= 15) {
          document.querySelector("#result_img > img").src = this.result_img9;
        } else if (result >= 16 && result <= 19) {
          document.querySelector("#result_img > img").src = this.result_img10;
        } else if (result >= 20 && result <= 23) {
          document.querySelector("#result_img > img").src = this.result_img11;
        } else {
          document.querySelector("#result_img > img").src = this.result_img12;
        }
      }},1000);
    },

    getLocalUrl() {
      let e = document.createElement("input"),
        // t = window.location.href + '?utm_source=topicpage&utm_medium=copybutton'
        t = window.location.href;
      document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand("copy"),
        document.body.removeChild(e),
        alert("網址複製成功!");
    },
    // delimiters: ['{{','}}']
  },
};
</script>
<style scoped>
* {
    font-family: "華康愛情體W5";
}

.layout {
    width: 100%;
    min-height: 200px;

}


.Q {
    margin: auto;
    width: 820px;
}

@media screen and (max-width: 1000px) {
    .Q {
        margin: auto;

    }
}

@media screen and (max-width: 500px) {
    .Q {
        margin: auto;
        width: 500px;
    }
}


/* title */
.title {
    width: fit-content;
    z-index: 99;
    top: 10px;
    margin: auto;
    position: relative;
    max-width: 1000px;
    padding: 3rem;

}

h3 {
    text-align: start;
}




@media screen and (max-width: 1000px) {
    .title {
        width: fit-content;
        z-index: 99;

        margin: auto;
        position: relative;
        max-width: 800px;

        padding: 0rem 3rem;

    }


}

@media screen and (max-width: 600px) {
    .Q {
        margin: auto;
        width: 500px;
        font-size: 50px
    }


    .title {
        width: fit-content;
        z-index: 99;

        margin: auto;
        position: relative;
        /* max-width: 500px; */

        padding: 0rem 2rem;
    }

    /* .titleh1 {
        font-family: "華康古印體";
        color: #000000;
        text-align: left;
        font-size: 2rem;
        margin-bottom: -4px;

    }

    .titleh2 {
        font-family: "華康古印體";
        color: #000000;
        text-align: left;
        font-size: 1.6rem;
        margin-bottom: -4px;

    }


    .titlep {
        display: none;


    }
 */


}




/* titleend */
.startbtn {

    padding: 0.5rem 1.2rem;
    color: rgb(255, 255, 255);
    text-decoration: none;
    display: block;
    transition: 0.3s;
    filter: contrast(0.7);
    font-size: 20px;
    background-color: #333333;
    width: fit-content;
    margin: auto;
    cursor: pointer;
    margin-top: 20px;
    overflow: auto !important;
}





.ans__wrap {
    height: 100%;
    width: fit-content;
    position: relative;
    margin: auto;

}

.ans__wrap img {
    margin-top: 30px;
    height: 350px;

}

@media screen and (max-width: 1000px) {
    .ans__wrap img {
        display: none;


    }
}

.share {
    width: 280px;
    cursor: pointer;
    position: absolute;
    top: 400px;
    left: 620px;
}

img {
    pointer-events: none;
}


.btn1 {
    width: 200px;
    /* border-radius: 1px;
    font-size: 20px;
    position: absolute;
    top: 11px;
    background-color: #ffffff;
    color: var(--main_color); */
    color: #333333;

}

.btn3 {
    position: absolute;
    bottom: 10rem;
    background-color: #333333;
    padding: 0.5rem 1rem;
    left: 30.5rem;
}

/* 繼續閱讀btn */

div p {
    text-align: left;
}

.intro {}





.btn2 {
    width: 200px;
    padding: 0.3rem 0.8rem;
    border-radius: 1px;
    font-size: 20px;
    position: absolute;
    bottom: -37.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333333;
    /* color: var(--main_color); */
    color: #ffffff;
}



@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500|Noto+Sans:wght@700|Roboto:400,700&display=swap);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);


html {
    padding: 0 !important;
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


section {
    display: block;
}

body {
    margin: 0;
    padding: 0 !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans TC", "PingFang TC", "Helvetica Neue",
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

main {
    display: block;
}



pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

strong {
    font-weight: bolder;
}


samp {
    font-family: monospace, monospace;
    font-size: 1em;
}


sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

img {
    border-style: none;
}


textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

input {
    overflow: visible;
}

button {
    border: 1px none;
}

select {
    text-transform: none;
}











[type="checkbox"],
[type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}





::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

details {
    display: block;
}

summary {
    display: list-item;
}

template {
    display: none;
}


ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
}






:focus {
    outline: 0;
}

html {
    scroll-behavior: smooth;
}





li {
    list-style: none;
    line-height: 1.85;
    font-size: 18px;
}


input {
    outline: 0;
    font-weight: 300;
}


.hide {
    display: none !important;
}

.hide--hd {
    display: none !important;
}

.hide--mb {
    display: block !important;
}

.tac {
    text-align: center;
}

.tal {
    text-align: left;
}




.list--upperAlpha li {
    list-style: upper-alpha;
    position: relative;
}

.list--upperAlpha li:before {
    content: "-";
    position: absolute;
    left: -28px;
}

.floatCols {
    float: left;
}

.floatCols:last-of-type:before {
    content: "";
    clear: both;
}


.main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
}

.imageWrap {
    width: 100%;
}

.imageWrap img {
    margin: 0 auto;
}

.imageWrap--circle {
    border-radius: 50%;
    overflow: hidden;
}


.mfp-iframe-scaler {
    overflow: unset;
}

@media (min-width: 768px) {
    .container--half {
        max-width: 720px;
        padding-left: 40px;
        padding-right: 40px;
    }
}

@media (min-width: 992px) {
    .container--half {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container--half {
        max-width: 1140px;
    }
}

@media (min-width: 1440px) {


    .container-xl {
        max-width: 1365px;
    }
}

@media only screen and (max-width: 1440px) {}

@media only screen and (max-width: 768px) {
    h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.875rem;
    }

    h4 {
        font-size: 20px;
    }

    .container,
    .container-sm {
        padding-right: 20px;
        padding-left: 20px;
    }

    .hide--hd {
        display: block !important;
    }

    .hide--mb {
        display: none !important;
    }

    .footer {
        padding: 20px;
    }
}



.navbar__brand {
    width: 155px;
    height: 44px;
    background: url(../assets/bear.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.navbar__content {
    right: 0;
    position: fixed;
    top: 0;
    height: 100%;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}


#nav-show {
    display: none;
    width: 100vw;
    height: 100%;
}

@media only screen and (max-width: 768px) {
    .navbar__list {
        padding: 0 40px;
    }
}

@media only screen and (max-width: 375px) {
    .navbar__list {
        padding: 0 30px;
    }

    .navbar__list .menu__title {
        font-size: 1.625rem;
    }
}



.city:before {
    content: "";
    display: block;
    width: 400px;
    height: 350px;
    background-image: url(../assets/29-金魅.jpg);
    background-size: cover;
    background-repeat: repeat-x;
    /* position: absolute; */
    position: relative;

}








.game__desc .imageWrap {
    max-width: 380px;
}



.chBtn .game__desc span,
.game__desc .chBtn,
.game__desc .chBtn span {
    width: 100%;
    max-width: 300px;
    padding: 15px 40px;
    font-size: 1.625rem;
    line-height: 1;
}

.game__desc .arrow__right--main {
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    top: -2px;
}

/* .game__wrap {
    overflow: hidden;
    height: 100vh;
} */

@-webkit-keyframes man {
    0% {
        top: 0;
    }

    50% {
        top: 10%;
    }

    100% {
        top: 0;
    }
}

@keyframes man {
    0% {
        top: 0;
    }

    50% {
        top: 10%;
    }

    100% {
        top: 0;
    }
}

.game__quiz {
    display: none;
    /* max-width: calc(100% - 50px); */

    max-width: 1000px;
    margin: auto;
    margin-bottom: 20px;
}

.game__quiz .num {
    left: 30px;
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 500;
    font-family: "華康愛情體W5", Roboto, "Microsoft JhengHei", Arial, sans-serif;
    text-align: left;
}

.game__quiz .num span {
    color: #fefefe;
    font-size: 3.5rem;
    font-family: "華康愛情體W5", Roboto, "Microsoft JhengHei", Arial, sans-serif;
    font-weight: 700;
    text-align: start;
}

.game__quiz .ques {
    width: 100%;
    font-size: 3.2rem;
    font-weight: 500;
    text-align: start;
    left: 30px;
    font-family: "華康愛情體W5";
    color: white;
}

.game__quiz .ans {
    left: 30px;
    font-size: 1.6875rem;
    font-weight: 500;
    margin: 10px 0;
    text-align: left;
    font-family: "華康愛情體W5";
}

.game__quiz .ans input {
    width: 28px;
    height: 28px;
    background-color: #373737;
    border: 1px solid #cacaca;
    top: 10px;
    margin-right: 18px;

    font-family: "華康愛情體W5";
}

.game__quiz .ans input:after {
    content: "";
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgb(239, 239, 239);
    position: absolute;


    font-family: "華康愛情體W5";
}

label {
    font-family: "華康愛情體W5";
    justify-content: start;
    padding-left: 2rem;
    background-color: #f3f3f3;
    margin-left: 1rem;
    width: 500px;
    padding: 0.5rem 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #333333;
    border-radius: 1px;
    filter: grayscale(50%);
    cursor: pointer;
}

label:hover {
    background-color: #080807;
    transition: 0.7s;
    color: #cacaca;
}

.game__quiz .ans input:checked:after {
    background-color: transparent;
    font-family: "華康愛情體W5";
}

.game__quiz .ans label {
    font-weight: 500;
    display: flex;

}

.game__quiz .back {
    background-color: transparent;
    margin-top: 1.875rem;
    left: 20px;
}

.game__quiz .back span {
    font-size: 1.5625rem;
    color: #ffffff;
    font-weight: 500;
    margin-left: 13px;
    font-family: "華康愛情體W5";
    justify-content: start;
    text-align: start;
}

.game__quiz .back:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 20px;
    background-image: url(../assets/bear.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.game__quiz.notEnter {
    left: 100vw;
}

.game__quiz.enter {
    left: 0;
}

.game__quiz.leave {
    left: -100vw;
}

.result {
    -webkit-filter: grayscale(0.2);
    padding: 1rem;
    /* margin: 1rem; */
    margin: 50px auto;

    max-width: 1200px;

}

.resultbtn {
    max-width: 1050px;
    margin: auto;
    padding: 0px;

}

.result img {
    width: 85%;
    margin: auto;
}

.result__img {
    width: 1200px;
}

.result a {

    padding: 1rem 1rem 2rem;
}

.resultbtn {
    margin-top: -100px
}

.result .top {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.result .top:before {
    content: "";
    display: block;
    width: 100%;
    height: 87%;
    position: absolute;
    bottom: 15px;
    left: 0;
    border: 6px solid #2544a1;
    border-radius: 42px;
    background-color: #fff;
}

.result .top__img {
    width: 50%;
    max-width: 530px;
    left: -20px;
}



.result .top__desc {
    text-align: center;
    left: -20px;
    top: 10px;
}

.result .top__desc p {
    line-height: 1.3;
}

.result .talk {
    position: absolute;
    right: -160px;
    top: -10%;
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-size: 1.5625rem;
    line-height: 1.5;
    padding: 12px 24px;
    background-color: #2544a1;
    border-radius: 45px;
    max-width: 400px;
}

.result .talk:before {
    content: "";
    display: block;
    width: 33px;
    height: 33px;
    background-image: url(../assets/bear.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -33px;
    left: 50px;
}

.result .foreword {
    font-size: 1.875rem;
    color: #2544a1;
    font-weight: 500;
    margin-bottom: 10px;
}

.result .character {
    font-size: 2.9375rem;
    font-weight: 400;
}

.result .quesD {
    font-size: 6.25rem;
    font-weight: 500;
}

.result .box {
    padding-top: 30px;
    padding-bottom: 20px;
    border-top: 3px solid #2544a1;
    border-bottom: 3px solid #2544a1;
    margin-bottom: 20px;
}

.result .box__title {
    display: inline-block;
    padding: 0 5px;
    position: absolute;
    left: 50%;
    top: -20px;
    background-color: #f9e46c;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

.result .box__title .info {
    font-size: 1.1875rem;
    color: #f9e46c;
    background-color: #2544a1;
    border-radius: 20px;
    font-weight: 500;
    padding: 5px 35px;
}

.result .box p {
    color: #2544a1;
    font-weight: 500;
}

.result .middle {
    color: #2544a1;
    font-size: 1.875rem;
    font-weight: 500;
    text-align: center;
    margin: 7.5rem 0;
}

.result .middle:after {
    content: "";
    display: block;
    width: 15px;
    height: 20px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(-90deg);
    -ms-transform: translateX(-50%) rotate(-90deg);
    transform: translateX(-50%) rotate(-90deg);
    background-image: url(../assets/bear.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}





@media only screen and (max-width: 1199px) {

    .result .top__desc {
        left: -50px;
    }

    .result .foreword {
        font-size: 1.25rem;
    }

    .result .character {
        font-size: 1.75rem;
    }

    .result .quesD {
        font-size: 4.375rem;
    }

    .result .middle {
        margin: 80px 0;
    }
}

/* 
@media only screen and (max-width: 992px) {
    .game {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 60px 15px;
    }

    .game__man {
        padding-right: 0;
        max-width: 420px;
    }

    .game__desc {
        top: 0;
    }

    .game__desc p {
        margin: 20px;
        text-align: center;
    }

    .game__desc .imageWrap {
        margin-left: auto;
        margin-right: auto;
    }

    .game__desc .chBtn span {
        margin-left: auto;
        margin-right: auto;
    }

    .game__quiz {
        max-width: unset;
        padding-top: 40px;
    }

    .result .talk {
        font-size: 1.125rem;
        right: 43%;
        top: -16%;
        width: 100%;
        max-width: 293px;
        padding: 12px 20px;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }

    .result .talk:before {
        left: 55%;
    }

    .result .top {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .result .top:before {
        display: none;
    }

    .result .top__img {
        width: 75%;
        left: unset;
    }

    .result .top__desc {
        width: 100%;
        left: 0;
    }

    .result .foreword {
        font-size: 1rem;
    }

    .result .character {
        font-size: 1.5625rem;
    }

    .result .quesD {
        font-size: 3.5625rem;
    }

    .result .middle {
        margin: 10px 0;
        font-size: 1rem;
    }

    .result__desc {
        padding-top: 100px;
    }

    .result .box__title {
        min-width: 60%;
        text-align: center;
    }

    .result .box__title .info {
        padding: 5px 20px;
    }

    .icon__social {
        width: 35px;
        height: 35px;
    }

    .icon__social--line {
        background-position-x: -35px;
    }
} */

@media only screen and (max-width: 768px) {
    .game__wrap {
        min-height: 800px !important;
    }

    .bg--main {
        min-height: 300px !important;
    }

    .game__desc {
        font-size: 1rem;
    }

    .game__desc p {

        font-size: 1rem;
    }

    .chBtn .game__desc span,
    .game__desc .chBtn,
    .game__desc .chBtn span {
        font-size: 1rem;
        max-width: 200px;
    }

    .game__desc .arrow__right--main {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        top: 1px;
    }

    .game__quiz {
        width: 100%;
    }


    .game__quiz .Q {
        width: 500px;
        margin: auto;
    }


    .game__quiz .num {
        font-size: 4rem;
    }

    .game__quiz .num span {
        font-size: 2.375rem;
    }

    .game__quiz .ques {
        font-size: 1.75rem;
        word-break: unset;
        margin-bottom: 30px;
    }

    .game__quiz .ans {
        font-size: 1.125rem;
        margin: 0;
    }

    .game__quiz .ans input {
        width: 20px;
        height: 20px;
    }

    .game__quiz .ans input:after {
        width: 18px;
        height: 18px;
        top: 0;
        left: 0;
    }

    .game__quiz .back span {
        font-size: 1rem;
        margin-left: 8px;
    }

    .game__quiz .back:before {
        width: 9px;
        height: 14px;
    }

    .result {
        padding: 100px 50px;
    }

    .result .talk {
        right: 40%;
        top: -20%;
    }

    .result .box__title .info {
        font-size: 1rem;
        padding: 5px 10px;
    }
}

@media only screen and (max-width: 500px) {
    .result .top__img {
        width: 100%;
    }

    .result .top__img .imageWrap {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        -webkit-filter: drop-shadow(3px 3px 0 rgba(250, 184, 74, 0.7));
        filter: drop-shadow(3px 3px 0 rgba(250, 184, 74, 0.7));
    }

    .result .talk {
        right: 44%;
        top: -25%;
    }

    .game__wrap {
        min-height: 800px !important;
    }

    .bg--main {
        min-height: 300px !important;
    }

    .game__desc {
        font-size: 1rem;
    }

    .game__desc p {
        margin: 0 0 30px;
        font-size: 1rem;
    }

    .chBtn .game__desc span,
    .game__desc .chBtn,
    .game__desc .chBtn span {
        font-size: 1rem;
        max-width: 200px;
    }

    .game__desc .arrow__right--main {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        top: 1px;
    }

    .game__quiz {
        width: 100%;
    }


    .game__quiz .Q {
        width: 350px;
        margin: auto;
    }


    .game__quiz .num {
        font-size: 2rem;
    }

    .game__quiz .num span {
        font-size: 2rem;
    }

    .game__quiz .ques {
        font-size: 1.75rem;
        word-break: unset;


    }

    .game__quiz .ans {
        font-size: 1.125rem;
        margin: 0;
    }

    .game__quiz .ans input {
        width: 20px;
        height: 20px;
    }

    .game__quiz .ans input:after {
        width: 18px;
        height: 18px;
        top: 0;
        left: 0;
    }

    .game__quiz .back span {
        font-size: 1rem;
        margin-left: 8px;
    }

    .game__quiz .back:before {
        width: 9px;
        height: 14px;
        display: none;
    }

    .game__quiz .ans label {
        font-weight: 500;
        display: flex;
        width: 350px;

        margin: auto;
        margin: 1.8rem auto;

    }

}

.chBtn,
.chBtn span {
    text-align: center;
    padding: 5px 30px;
    border-radius: 30px;
    display: inline-block;
    border: none;
    font-size: 16px;
    font-weight: 500;
}

.chBtn span {
    display: block;
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    left: -1px;
    top: -1px;
    -webkit-clip-path: inset(0 100% 0 0);
    clip-path: inset(0 100% 0 0);
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.chBtn--main {
    background-color: #f9e46c;
    color: #2544a1;
}

.chBtn--main span {
    background-color: #2544a1;
    color: #f9e46c;
}

.chBtn--main:hover span {
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.chBtn--line {
    background-color: transparent;
    color: #2544a1;
    border: 1px solid #2544a1;
}

.chBtn--line span {
    background-color: #2544a1;
    color: #fff;
}

.chBtn--line:hover {
    color: #2544a1;
}



.arrow__right {
    width: 0;
    height: 0;
    display: inline-block;
    border-right: 0 solid transparent;
    border-top: 6.5px solid transparent;
    border-bottom: 6.5px solid transparent;
    margin-left: 12px;
}



.bg--main {
    background-image: url("../assets/banner2.jpg");
    background-size: cover;
}

.bg--main2 {
    background-image: url("../assets/banner1.jpg");
    background-size: cover;
}


@media screen and (max-width:500px) {

    .bg--main {
        background-image: url("../assets/banner2.jpg");
        background-size: cover;
    }


}



.slider--title {
    margin-top: 20px;
}

.slider--title.arrow--main:before,
.slider--title.arrow--sub:before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 18px;
    background-image: url(../assets/bear.jpg);
    background-repeat: no-repeat;
    background-size: 18px 14px;
    margin-right: 5px;
}

.slider--title.arrow--main:before {
    background-position-x: 0;
}

.slider--title.arrow--sub:before {
    background-position-x: -10px;
}

.slider--subTitle {
    font-size: 1.125rem;
    line-height: 1.4;
    width: 75%;
}

.slider--article {
    margin-right: -3.125rem;
    margin-left: -3.125rem;
}

.slider .item {
    padding: 0 3.125rem;
    margin-bottom: 3.125rem;
}

.slider .arrow__square {
    width: 35px;
    height: 35px;
    background-color: #2544a1;
    top: 33%;
    position: absolute;
    z-index: 1;
    cursor: pointer;
}

.slider .arrow__square:after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(../assets/bear.jpg);
    top: 5px;
    width: 400px;
    height: 400px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.slider .arrow__square--left {
    left: 10px;
}

.slider .arrow__square--left:after {
    left: 8px;
}

.slider .arrow__square--right {
    right: 10px;
}

.slider .arrow__square--right:after {
    left: 12px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}


.half__item {
    padding: 0 1.25rem;
}

.half__item .imageWrap {
    border-radius: 17px;
    overflow: hidden;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}




.chart__title {
    text-align: center;
    margin-bottom: 1.25rem;
}

.chart__desc {
    margin-bottom: 3.125rem;
}

.chart__img {
    margin-bottom: 7.5rem;
}

.chart__note {
    display: block;
    font-size: 0.9375rem;
    color: #959595;
    margin-top: 10px;
}







.bgLink .fire:before {
    -o-transition: transform 0.3s ease;
    -webkit-transition: transform 0.3s ease;
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}

.bgLink:hover .fire:before {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.container--half .row {
    margin-left: -35px;
    margin-right: -35px;
}


@media only screen and (max-width: 1440px) {
    .section__title {
        margin-bottom: 40px;
    }

    .slider--article {
        margin-right: -30px;
        margin-left: -30px;
        padding-left: 0;
        padding-right: 0;
    }

    .slider .item {
        padding: 0 1.875rem;
        margin-bottom: 2.5rem;
    }
}

@media only screen and (max-width: 992px) {
    .slider--article {
        margin-right: -20px;
        margin-left: -20px;
        padding-left: 0;
        padding-right: 0;
    }

    .slider .item {
        padding: 20px;
    }
}

@media only screen and (max-width: 767px) {
    .bg--half:before {
        height: 100%;
    }

    .bg--half .section__title {
        margin-bottom: 2.5rem;
    }

    .section__container {
        padding-top: 3.75rem;
        padding-bottom: 3.75rem;
    }

    .container--half {
        padding-bottom: 10px;
    }

    .container--half .row {
        margin-left: 0;
        margin-right: 0;
    }

    .half__wrap {
        padding: 3.125rem 3.75rem 3.125rem;
        background-color: #f9e46c;
    }

    .half__wrap:before {
        content: "";
        display: block;
        width: 100%;
        height: 60%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #f3f3f3;
    }

    .half__item {
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }

    .slider--article {
        margin-right: -20px;
        margin-left: -20px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .slider--title {
        font-size: 1.5625rem;
    }

    .slider .item {
        padding: 0;
        margin-bottom: 30px;
    }

    .slider .arrow__square {
        top: 25%;
    }

    .slider .arrow__square--left {
        left: 20px;
    }

    .slider .arrow__square--right {
        right: 20px;
    }

    .backtop {
        right: 10px;
        width: 50px;
        height: 50px;
    }
}

@media only screen and (max-width: 414px) {
    .half__item {
        max-width: unset;
    }
}

.row {}

.back {
    color: white;
}
</style>
