<template>
    <div class=" layout ">

        <div class="layout_grid ">
            <h1>關於台灣鬼怪：你可能想問......</h1>
            <h5 class="mt-3">《民視新聞網》專訪了《唯妖論》及《尋妖誌》的作者─臺北地方異聞工作室，從台灣鬼怪傳說深入了解民俗文化、在地風俗，試著窺探前現代的歷史脈絡。</h5>
            <div class="row rowww mt-5 " id="faq">
                <div class="col-12 col-md-6 col-lg-4 mb-4  grid" @click="turnOn(1)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="q1" src="../assets/q1.png" alt="">
                </div>

                <div class="col-12" id="modal_1" v-show="modal_1">
                    <img class="col-8 " src="../assets/a1.png" alt="">
                    <img class="col-3 " src="../assets/ghost.png" alt="">
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-4 grid" @click="turnOn(2)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="q2" src="../assets/q2.png" alt="">
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4 grid" @click="turnOn(3)">
                    <img class="man" src="../assets/ghost.png" alt="">

                    <img class="q3" src="../assets/q3.png" alt="">
                </div>
            </div>
            <div class="row roww  ">
                <div class="col-12 col-md-6 col-lg-4 grid mb-4 " @click="turnOn(4)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="row2" src="../assets/q4.png" alt="">
                </div>
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(5)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="row2" src="../assets/q5.png" alt="">
                </div>


            </div>
            <div class="row roww  ">

                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(6)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="row2" src="../assets/q6.png" alt="">
                </div>
                <div class="col-12 col-md-6 col-lg-4 grid mb-4" @click="turnOn(7)">
                    <img class="man" src="../assets/ghost.png" alt="">
                    <img class="row2" src="../assets/q7.png" alt="">
                </div>
            </div>
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
        <div class="row ans mb-5">
            <div class="col-12" id="modal_1" v-show="modal_1">
                <img class="col-9 mes" src="../assets/a1.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_2" v-show="modal_2">
                <img class="col-9 mes" src="../assets/a2.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_3" v-show="modal_3">
                <img class="col-9 mes" src="../assets/a3.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_4" v-show="modal_4">
                <img class="col-9 mes" src="../assets/a4.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_5" v-show="modal_5">
                <img class="col-9 mes" src="../assets/a5.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_6" v-show="modal_6">
                <img class="col-9 mes" src="../assets/a6.png" alt="">
                <img class="col-3 man2" src="../assets/ghost.png" alt="">
            </div>
            <div class="col-12" id="modal_7" v-show="modal_7">
                <img class="col-10 mes2" src="../assets/a7.png" alt="">
                <img class="col-2 man3 mb-3" src="../assets/ghost.png" alt="">

            </div>
        </div>
    </div>



</template>


<script>
export default {
    data() {
        return {
            modal_1: false,
            modal_2: false,
            modal_3: false,
            modal_4: false,
            modal_5: false,
            modal_6: false,
            modal_7: false,
            title: `關於台灣鬼怪：你可能想問......`,
            newsInfo: [],
            value1: true,
            value2: false,

            name: "Vue.js | Methods",
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
