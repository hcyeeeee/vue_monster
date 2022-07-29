<template>
    <div class="layout">


        <p>第{{ no }}題
        </p>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <div class="row">
            <img src="../assets/bear.jpg" alt="" class="col-5">
            <div class="col-7 opt">
                   <a href="">{{ opt[0] }}</a>
                      <a href="">{{ opt[1] }}</a>
                          <a href="">{{ opt[2] }}</a>
            </div>
        </div>

    </div>
</template> 

<script>

export default( {
    name: 'Intro',
    data() {
        return {
            title: `【第一則情境題】`,
            no: `1/4`,
            content: `風和日麗午後，旋轉梯一路向上是我們的秘密基地。

珍藏所有我們笑鬧與抵抗世界的時光⋯⋯他是我心儀已久的人，他在今天跟我告白了！

此時我的抉擇是⋯⋯
`,
            opt: [`a. 立刻答應 —— 5 分
`,
            `b. 再想想，不正面回應 —— 3 分`,
            `c. 在一起一定會分手，拒絕！—— 1 分`,],
        }
    },
      
})
</script>

<style scoped>
.layout {
    max-width: 1000px;
    width: 100%;
    min-height: 200px;
}

img {
    pointer-events: none;

}

h1 {

    opacity: 1;
}

button {

    border-radius: 1px;
    border: none;
    font-weight: 400;
    background-color: #373737;
    color: #fff;
    cursor: pointer;
    width: 100%;
 font-size: 1rem;
 padding: 0.5rem;
 
    line-height: 1;

    position: absolute;
    
}

/* 立即測驗btn */
.btn1 {
    border: 1px solid var(--main_color);
    border-radius: 1px;
    font-size: 30px;
    padding: 1rem 3rem;
    position: absolute;
    bottom: 55%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #5c487b;
    /* color: var(--main_color); */
    color: white;
}

/* 繼續閱讀btn */
.btn2 {
    border: 1px solid var(--main_color);
    border-radius: 1px;
    padding: 0.5rem 2rem;
    margin-top: 0.5rem;
    width: fit-content;
    background-color: #5c487b;
    /* color: var(--main_color); */
    color: white;
}

div p {
    text-align: left;

}

.intro {}

.opt{
    text-align: left;

}
.opt a{
    padding: 1rem 3rem;
    font-size: 1.5rem;
}
</style>
