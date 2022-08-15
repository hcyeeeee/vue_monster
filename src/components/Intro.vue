<template>
    <div class="layout" id="game">


        <section class=" bg--main game__wrap ">


            <div class="row" id="aaa">
                <div v-show="end">
                    <div :class="[{ isQuiz: start }]"></div>
                    <div class="game__desc" v-if="!start">
                        <div class="title">
                            <h3 class="">鬼怪愛情診斷書<br>你的愛情觀屬於哪種台灣鬼怪?</h3>

                            <p class="">農曆七月，也是俗稱的「鬼月」，講到妖魔鬼怪，你第一個會聯想到什麼？是殭屍、魔神仔，還是紅衣小女孩？

                                現在就來做個心理測驗，看看你在愛情中，屬於哪個台灣鬼怪？
                            </p>
                            <a class="startbtn" href="#game" v-on:click="startQuiz(); start = !start; ">立即檢測</a>
                        </div>
                    </div>


                    <div class=" mt-5  game">
                        <div class="game__quiz">
                            <div class="Q">
                                <div class="num">第<span>{{ q_data[q_no].t }}</span>則 情境題
                                </div>
                                <div class="ques">{{ q_data[q_no].ques }}</div>
                            </div>



                            <div class="ans__wrap  " v-show="q_no == 0">
                                <img class="img__wrap" src="../assets/Q4pic.jpg" alt="Q4">
                                <div class=" ans ">
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

                            <div class="ans__wrap " v-show="q_no == 1">
                                <img class="img__wrap   " src="../assets/Q1pic.jpg" alt="Q1">
                                <div class="ans   ">
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

                            <div class="ans__wrap " v-show="q_no == 2">
                                <img class="img__wrap   " src="../assets/Q2pic.jpg" alt="Q2">
                                <div class=" ans   ">
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

                            <div class="ans__wrap" v-show="q_no == 3">
                                <img class="img__wrap   " src="../assets/Q3pic.jpg" alt="Q3">
                                <div class="ans   ">
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
                    <img src="" class="result__img" alt="result" />
                    <div class="btn__result">
                        <a class="" href="#section">台灣神怪知多少</a>
                        <a class="" href="#faq">台灣神怪Ｑ＆Ａ</a>
                        <a class="" href="">重新測驗 </a>
                    </div>

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
      result_img1: require("../assets/ans1.jpg"),
      result_img2: require("../assets/ans2.jpg"),
      result_img3: require("../assets/ans3.jpg"),
      result_img4: require("../assets/ans4.jpg"),
      result_img5: require("../assets/ans5.jpg"),
      result_img6: require("../assets/ans6.jpg"),
        result_img7: require("../assets/ma1.jpg"),
      result_img8: require("../assets/ma2.jpg"),
      result_img9: require("../assets/ma3.jpg"),
      result_img10: require("../assets/ma4.jpg"),
      result_img11: require("../assets/ma5.jpg"),
      result_img12: require("../assets/ma6.jpg"),


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

    //   console.log(this.q_no); // 0
      $(".ans__wrap").eq(this.q_no).fadeIn();

    //   console.log("當前第幾題：", this.q_no + 1);
    },

    next() {
      if (this.q_no == 3) {
        this.print();
      } else {
        this.q_no++;
        // console.log("當前第幾題：", this.q_no + 1);
      }

      $(".ans__wrap")
        .eq(this.q_no - 1)
        .hide(); //0
      $(".ans__wrap").eq(this.q_no).fadeIn(); //1
    },

    back() {
      this.q_no--; //0
    //   console.log("當前第幾題：", this.q_no + 1);
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
        t = window.location.href;
      document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand("copy"),
        document.body.removeChild(e),
        alert("網址複製成功!");
    },
   
  },
};
</script>
<style scoped>
#sum {
    color: transparent;
}

.btn__result {
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 1rem 1rem 5rem 1rem;
    font-size: 1.5rem;

}

.btn__result>a {
    width: fit-content;
    padding: 0.5rem 3rem;
    color: #333333;
    text-decoration: none;
    background-color: rgb(234, 225, 54);

}


@media screen and (max-width: 768px) {
    .btn__result {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        margin: auto;
        padding: 1rem 1rem 5rem 1rem;
        font-size: 1.5rem;

    }

    .btn__result>a {
        width: fit-content;
        padding: 0.5rem 3rem;
        color: #333333;
        text-decoration: none;
        margin: auto;
        margin-top: 2rem;
        width: 300px;

    }
}

.layout {
    width: 100%;
    min-height: 200px;
}

.Q {
    display: block;
    margin: auto;
    width: auto;
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
    padding: 2rem 3rem;

}

h3 {
    text-align: start;
}

h2 {
    text-align: center !important;
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

        padding: 0rem 1rem;
    }


}





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
    display: flex;
    justify-content: center;
    text-align: center;


}



@media screen and (max-width: 768px) {
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



.btn1 {
    width: 200px;

    color: #333333;

}



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



section {
    display: block;
}

body {
    margin: 0;
    padding: 0 !important;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

main {
    display: block;
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
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}











[type="checkbox"],
[type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}





template {
    display: none;
}


ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
}



li {
    list-style: none;
    line-height: 1.85;
    font-size: 18px;
}


input {
    outline: 0;
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


}














.game__desc .imageWrap {
    max-width: 380px;
}



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
    padding: 3rem;
} */


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
    font-size: 3rem;
    padding: 1rem;
}

.game__quiz .num span {
    color: #fefefe;
    font-size: 3rem;
    text-align: center;
}

.game__quiz .ques {
    width: 100%;
    font-size: 2.6rem;
    left: 30px;
    color: white;
    padding: 1rem;
    margin: 0.5rem;
}

.game__quiz .ans {
    left: 30px;
    font-size: 1.2rem;

    text-align: center;
}

.game__quiz .ans input {
    display: none;
}


label {
    justify-content: center;
    padding-left: 2rem;
    background-color: #f3f3f3;
    margin-left: 1rem;
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

}

.game__quiz .ans label {
    display: flex;
    width: 400px;

}

.result {
    -webkit-filter: grayscale(0.2);
    padding: 1rem;
    /* margin: 1rem; */
    margin: 50px auto;

    max-width: 1200px;

}

.result__img {
    width: 1200px;
}

@media only screen and (max-width: 768px) {
    .game__wrap {
        min-height: 700px !important;
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
        width: 400px;
        margin: auto;
    }


    .game__quiz .num {
        font-size: 2.5rem;
    }

    .game__quiz .num span {
        font-size: 3rem;
    }

    .game__quiz .ques {
        font-size: 2.3rem;
        word-break: unset;
        margin-bottom: 20px;
        line-height: 3rem;
    }

    .game__quiz .ans {
        font-size: 1.125rem;
        margin: 0;
        text-align: center;
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

    .game__quiz .back {
        background: transparent;
        border: none;
        font: 18px;
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
        padding: 1rem;
    }



}

@media only screen and (max-width: 500px) {
    .result .top__img {
        width: 100%;
    }

    .ans__wrap {
        display: flex;
        width: 300px;
        margin: auto;


    }


    .game__wrap {
        min-height: 800px !important;
        padding: 1rem;
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


    .game__quiz {
        width: 100%;
    }


    .game__quiz .Q {
        width: 300px;
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
        line-height: 2.2rem;


    }

    .game__quiz .ans {
        font-size: 1.125rem;

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

    .result__img {
        width: 100%;
        padding: 1rem;
    }

    .game__quiz .back:before {
        width: 9px;
        height: 14px;
        display: none;
    }

    .game__quiz .ans label {
        display: flex;
        width: 300px;
        margin: auto;
        margin: 1.8rem auto;

    }

}


.bg--main {
    background-image: url("../assets/banner2.jpg");
    background-size: cover;
}

.bg--main2 {
    background-image: url("../assets/banner1.jpg");
    background-size: cover;
}


.back {
    color: white;
}

.img__wrap {
    width: 300px;
    height: 300px;
    padding: 1rem;
    margin: auto 1rem;
}

.game__quiz .back {
    background: transparent;
    border: none;
    font-size: 1.3rem;
}

.game__quiz {
    padding: 3rem;
}

@media only screen and (max-width: 768px) {
    .game__quiz {
        padding: 0rem;
    }
}
</style>
