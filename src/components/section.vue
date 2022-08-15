<template>
  <div class="layout" id="section">
    <div class="layout_grid">

      <h2>台灣神怪知多少？</h2>

    </div>
    <section class="timeline computer1">
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
            <time class="time">1685年</time>
            <img class="timeimg" src="../assets/man1.png" alt="man1" />

          </div>
        </li>
        <li>
          <div v-on:click="modal_2 = !modal_2">
            <img class="timeimg" src="../assets/man2.png" alt="man2" />
            <time class="time">1887年</time>
          </div>
        </li>
        <li>
          <div v-on:click="modal_3 = !modal_3">
            <time class="time">1890年</time>
            <img class="timeimg" src="../assets/man3.png" alt="man3" />

          </div>
        </li>
        <li>
          <div v-on:click="modal_4 = !modal_4">
            <img class="timeimg" src="../assets/man4.png" alt="man4" />
            <time class="time">1936年</time>
          </div>
        </li>
        <li>
          <div v-on:click="modal_5 = !modal_5">
            <time class="time">1952年</time>
            <img class="timeimg" src="../assets/man5.png" alt="man5" />
          </div>
        </li>
        <li>
          <div v-on:click="modal_6 = !modal_6">
            <img class="timeimg" src="../assets/man6.png" alt="man6" />
            <time class="time">1965年</time>
          </div>
        </li>
      </ol>
    </section>




    <section class="timeline mobile2">
      <div class="container right">
        <div v-on:click="modal_1 = !modal_1">
          <time class="time">1685年</time>
          <img class="timeimg2" src="../assets/man1.png" alt="man1" />

        </div>
      </div>
      <div class="container right">
        <div v-on:click="modal_2 = !modal_2">
          <time class="time">1887年</time>
          <img class="timeimg2" src="../assets/man2.png" alt="man1" />

        </div>
      </div>
      <div class="container right">
        <div v-on:click="modal_3 = !modal_3">
          <time class="time">1890年</time>
          <img class="timeimg2" src="../assets/man3.png" alt="man1" />

        </div>
      </div>
      <div class="container right">
        <div v-on:click="modal_4 = !modal_4">
          <time class="time">1936年</time>
          <img class="timeimg2" src="../assets/man4.png" alt="man1" />

        </div>
      </div>
      <div class="container right">
        <div v-on:click="modal_5 = !modal_5">
          <time class="time">1952年</time>
          <img class="timeimg2" src="../assets/man5.png" alt="man1" />
        </div>
      </div>
      <div class="container right">
        <div v-on:click="modal_6 = !modal_6">
          <time class="time">1965年</time>
          <img class="timeimg2" src="../assets/man6.png" alt="man1" />

        </div>
      </div>
    </section>








    <!-- 1 -->
    <div class="c-modal " v-show="modal_1">
      <!-- computer version -->
      <div class="row computer">

        <img class="role col-5 p-3" src="../assets/37-林投姐.jpg" alt="林投姐">
        <div class=" col-7 content p-3 ">
          <h4>林投姐</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>講到台灣女鬼，許多人會想到清代府城三大奇案之一的「林投姐」。<br>
              相傳有名台南女子和泉州商人成親後，男子帶著兩人積蓄回到中國，便再也沒有回來，經過多年等待，女子意識到自己被無情拋棄，遂自縊於林投樹，自此之後，當地民眾就流傳在林投樹林間，時常能看見披頭散髮的女子在遊蕩。
              <br>為了地方安寧，台南仕紳集資建造一間小廟奉祀，林投姐的魂魄才不再出現；也因為林投姐的故事過於悲慘，後人還為她編撰化身厲鬼，前往中國復仇的橋段。

            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 台南</div>
          </div>
          <div class="row ">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 台南火車站</div>
          </div>
          <div class="row">
            <p class="col-12">
              根據《臺灣風俗誌》記載，後人建造的林投姐祠，位於台南火車站周遭、「里見醫院」附近一帶的「凹地」內，那裡當時種滿了林投，直到日治時期為了開墾才夷為平地。

              里見醫院為當時台南署立醫院院長里見四郎，晚年開設的私人醫院，可惜在歷史資料中無法得知正確位置，但過去民族二路是條大水溝，凹地在水溝兩側，從此可推測林投姐祠應該就在附近。
            </p>
            <img src="../assets/台南火車站-台南政府網站.jpeg" class="col-6 travel" alt="台南火車站">
          </div>
          <div class="row   5">

            <p class="col-6">台南火車站示意圖</p>
          </div>

        </div>
      </div>
      <!-- mobile version -->
      <div class="close" v-show="modal_1" v-on:click="modal_1 = !modal_1"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">


        <div class=" col-12">
          <img class="role" src="../assets/37-林投姐.jpg" alt="林投姐">
        </div>
        <div class=" col-12 content">
          <h4>林投姐</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">講到台灣女鬼，許多人會想到清代府城三大奇案之一的「林投姐」。<br>
              相傳有名台南女子和泉州商人成親後，男子帶著兩人積蓄回到中國，便再也沒有回來，經過多年等待，女子意識到自己被無情拋棄，遂自縊於林投樹，自此之後，當地民眾就流傳在林投樹林間，時常能看見披頭散髮的女子在遊蕩。
              <br>為了地方安寧，台南仕紳集資建造一間小廟奉祀，林投姐的魂魄才不再出現；也因為林投姐的故事過於悲慘，後人還為她編撰化身厲鬼，前往中國復仇的橋段。

            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>

            <div class="col-6 text"> 台南</div>
          </div>
          <div class="row">
            <h5>尋妖之旅</h5>

          </div>
          <div class="row ">
            <p class="col-12">
              台南火車站<br>
              根據《臺灣風俗誌》記載，後人建造的林投姐祠，位於台南火車站周遭、「里見醫院」附近一帶的「凹地」內，那裡當時種滿了林投，直到日治時期為了開墾才夷為平地。<br>

              里見醫院為當時台南署立醫院院長里見四郎，晚年開設的私人醫院，可惜在歷史資料中無法得知正確位置，但過去民族二路是條大水溝，凹地在水溝兩側，從此可推測林投姐祠應該就在附近。
            </p>
            <img src="../assets/台南火車站-台南政府網站.jpeg" class="col-12 travel" alt="台南火車站">
          </div>
          <div class="row   5">
            <p>台南火車站示意圖</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg" v-show="modal_1" v-on:click="modal_1 = !modal_1">

    </div>
    <!-- 2 -->
    <div class="c-modal " v-show="modal_2">
      <!-- computer version -->
      <div class="row computer">

        <img class="role col-5 p-3" src="../assets/45-陳守娘.jpg" alt="陳守娘">
        <div class="col-7 content p-3">
          <h4>陳守娘</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>
              「陳守娘大戰廣澤尊王」是清代府城三大奇案之一，據傳陳守娘在夫婿早逝後決定守節，但婆婆和小姑受到縣府衙署的幕賓金錢利誘，決定將守娘改嫁。沒想到守娘抵死不從，遂被婆婆和小姑綁在長椅上，用尖錐刺傷陰部，守娘最終因不堪折磨，暴斃死亡。<br>
              守娘死後，府城各地夜半聽見喊聲不絕，仕紳為了地方安寧，恭請廣澤尊王出馬解決。雙方大戰數百回合後，守娘為了避免濫殺無辜，提出條件，希望能入節孝祠奉祀，表明自己守節心志，才平息這場風波。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 台南</div>
          </div>
          <div class="row ">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 台南孔廟、辜婦媽廟</div>
          </div>
          <div class="row">
            <p class="col-12">一、台南孔廟<br>
              全台首座孔子廟，一度是全台童生入學之所，號稱「全台首學」，西側為節孝祠、孝子祠。陳守娘過世後，牌位至今仍在節孝祠供奉。
            </p>
            <p class="col-12">二、辜婦媽廟<br>
              為祭祀丈夫早逝，仍孝順公婆、將夫婿側室孩子視如己出，並一生守節的辜林氏的廟宇。相傳陳守娘從小在附近生活，耳濡目染之下，成為貞節觀念強烈的女子。
            </p>
            <img src="../assets/台南孔廟-googlemap.png" class="col-6 travel chen " alt="台南孔廟">
            <img src="../assets/辜婦媽廟-官方粉專2.jpeg" class="col-6 travel chen" alt="辜婦媽廟">
          </div>
          <div class="row   5">
            <p class="col-6">台南孔廟示意圖</p>
            <p class="col-6">辜婦媽廟示意圖</p>
          </div>

        </div>
      </div>
      <!-- mobile version -->
      <div class="close" v-show="modal_2" v-on:click="modal_2 = !modal_2"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">

        <div class="row col-12">
          <img class="role" src="../assets/45-陳守娘.jpg" alt="陳守娘">
        </div>
        <div class=" col-12 content">
          <h4>陳守娘</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">
              「陳守娘大戰廣澤尊王」是清代府城三大奇案之一，據傳陳守娘在夫婿早逝後決定守節，但婆婆和小姑受到縣府衙署的幕賓金錢利誘，決定將守娘改嫁。沒想到守娘抵死不從，遂被婆婆和小姑綁在長椅上，用尖錐刺傷陰部，守娘最終因不堪折磨，暴斃死亡。<br>
              守娘死後，府城各地夜半聽見喊聲不絕，仕紳為了地方安寧，恭請廣澤尊王出馬解決。雙方大戰數百回合後，守娘為了避免濫殺無辜，提出條件，希望能入節孝祠奉祀，表明自己守節心志，才平息這場風波。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>

            <div class="col-6 text"> 台南</div>
          </div>
          <div class="row">
            <h5>尋妖之旅</h5>
          </div>
          <div class="row ">
            <p class="col-12">一、台南孔廟<br>
              全台首座孔子廟，一度是全台童生入學之所，號稱「全台首學」，西側為節孝祠、孝子祠。陳守娘過世後，牌位至今仍在節孝祠供奉。
              <br>
              <img src="../assets/台南孔廟-googlemap.png" class="col-12 travel" alt="台南孔廟">

              <br>
              二、辜婦媽廟<br>
              為祭祀丈夫早逝，仍孝順公婆、將夫婿側室孩子視如己出，並一生守節的辜林氏的廟宇。相傳陳守娘從小在附近生活，耳濡目染之下，成為貞節觀念強烈的女子。

            </p>


            <img src="../assets/辜婦媽廟-官方粉專2.jpeg" class="col-12 travel" style="height:220px" alt="辜婦媽廟">

          </div>
          <div class="row">


          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-show="modal_2" v-on:click="modal_2 = !modal_2"></div>
    <!-- 3 -->
    <div class="c-modal " v-show="modal_3">
      <!-- computer version -->
      <div class="row computer ">
        <img class="row role col-5 p-3 " src="../assets/29-金魅.jpg" alt="金魅">
        <div class="row col-7 p-3 content">
          <h4>金魅</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>
              日治時期出刊的《民俗臺灣》中，記載了一個名為「金魅」的妖怪，祂原本是名有錢人家的查某嫺－金綢，被主人毒打致死後，變成了吃人妖怪，心生畏懼的主人因此和祂達成協議，除了將祂改名為「金魅」立牌位祭拜，每年還會獻祭一名活人，換取祂繼續留在家中工作。<br>
              據說金魅十分愛乾淨，因此日治時期前，許多旅館都會偷偷供養金魅，讓金魅替他們打掃，如果想得知一間旅館有沒有養金魅，只要朝大門吐口水，看看口水有沒有馬上消失，就能得知是不是愛乾淨的金魅，隨即處理掉了。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 旅館</div>
          </div>
          <div class="row ">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 無</div>
          </div>
        </div>
      </div>



      <!-- mobile version -->
      <div class="close" v-show="modal_3" v-on:click="modal_3 = !modal_3"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">

        <div class="row col-12">
          <img class="role" src="../assets/29-金魅.jpg" alt="金魅">
        </div>
        <div class=" col-12  content">
          <h4>金魅</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">
              日治時期出刊的《民俗臺灣》中，記載了一個名為「金魅」的妖怪，祂原本是名有錢人家的查某嫺－金綢，被主人毒打致死後，變成了吃人妖怪，心生畏懼的主人因此和祂達成協議，除了將祂改名為「金魅」立牌位祭拜，每年還會獻祭一名活人，換取祂繼續留在家中工作。<br>
              據說金魅十分愛乾淨，因此日治時期前，許多旅館都會偷偷供養金魅，讓金魅替他們打掃，如果想得知一間旅館有沒有養金魅，只要朝大門吐口水，看看口水有沒有馬上消失，就能得知是不是愛乾淨的金魅，隨即處理掉了。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 旅館</div>
          </div>

          <div class="row   4">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 無</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-show="modal_3" v-on:click="modal_3 = !modal_3"></div>
    <!-- 4 -->
    <div class="c-modal " v-show="modal_4">
      <!-- computer version -->
      <div class="row computer">

        <img class="role col-5 p-3" src="../assets/魔神仔.jpg" alt="魔神仔">
        <div class="col-7 p-3 content">
          <h4>魔神仔</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>
              台灣鄉野傳說中，「魔神仔」大概是最常被提及的妖怪，據說祂身材矮小、全身黑毛，棲息於山區伺機而動。人如果被魔神仔「牽去」，被發現時大多呈現精神恍惚的狀態，記不得失蹤期間發生什麼事情，又或者只記得「被請吃大餐」，實際上嘴裡塞滿的卻是泥土、蚯蚓、牛糞等穢物。<br>

              <br>而根據研究，魔神仔經常出沒地點為北部山區，包括士林「魔神仔溝」、陽明山「魔神仔古道」、南港「魔神仔硿」、汐止「毛神仔山」以及平溪「魔神仔洞」，這些地方因為過去經常有人失蹤，當地人盛傳魔神仔出沒，因此被冠上名號。

            </p>



          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 台北、新北山區</div>
          </div>
          <div class="row ">
            <h5>尋妖之旅</h5>
          </div>
          <div class="row    2">
            <p class="col-12">一、南港魔神仔硿<br>
              根據《尋妖誌》一書，連接南港與石碇的北32鄉道，有個叫「魔神仔硿」的地方。作者實際走訪，一路鬱鬱蒼蒼、祖墳林立，儘管沒見到魔神仔，也充斥著毛骨悚然的恐怖氛圍。
              <br> <br>
              二、平溪魔神仔洞<br>
              「魔神仔洞」位於菁桐古道，從菁桐坑登山口開始，約走半小時路程就能抵達，根據當地人表示，洞穴其實是早期礦業發達時，用來運煤的輕便車道，後來有人將骨灰放在洞裡，才會有靈異流言。
            </p>
            <img src="../assets/南港大坑.jpg" class="col-6    chen 2 travel" alt="南港大坑">
            <img src="../assets/平溪魔神仔洞-googlemap.png" class="col-6  chen   2 travel" alt="平溪魔神仔洞">
          </div>
          <div class="row   5">
            <p class="col-6">南港魔神仔硿示意圖</p>
            <p class="col-6">平溪魔神仔洞</p>
          </div>

        </div>
      </div>
      <!-- mobile version -->
      <div class="close" v-show="modal_4" v-on:click="modal_4 = !modal_4"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">

        <div class="row col-12">
          <img class="role" src="../assets/魔神仔.jpg" alt="魔神仔">
        </div>
        <div class="col-12   content">
          <h4>魔神仔</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">
              台灣鄉野傳說中，「魔神仔」大概是最常被提及的妖怪，據說祂身材矮小、全身黑毛，棲息於山區伺機而動。人如果被魔神仔「牽去」，被發現時大多呈現精神恍惚的狀態，記不得失蹤期間發生什麼事情，又或者只記得「被請吃大餐」，實際上嘴裡塞滿的卻是泥土、蚯蚓、牛糞等穢物。<br>

              <br>而根據研究，魔神仔經常出沒地點為北部山區，包括士林「魔神仔溝」、陽明山「魔神仔古道」、南港「魔神仔硿」、汐止「毛神仔山」以及平溪「魔神仔洞」，這些地方因為過去經常有人失蹤，當地人盛傳魔神仔出沒，因此被冠上名號。

            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>

            <div class="col-6 text"> 台北、新北山區</div>
          </div>
          <div class="row">
            <h5>尋妖之旅</h5>
          </div>
          <div class="row    5">
            <p class="col-12">一、南港魔神仔硿<br>
              根據《尋妖誌》一書，連接南港與石碇的北32鄉道，有個叫「魔神仔硿」的地方。作者實際走訪，一路鬱鬱蒼蒼、祖墳林立，儘管沒見到魔神仔，也充斥著毛骨悚然的恐怖氛圍。
              <br> <br>
              二、平溪魔神仔洞<br>
              「魔神仔洞」位於菁桐古道，從菁桐坑登山口開始，約走半小時路程就能抵達，根據當地人表示，洞穴其實是早期礦業發達時，用來運煤的輕便車道，後來有人將骨灰放在洞裡，才會有靈異流言。
            </p>
            <img src="../assets/南港大坑.jpg" class="col-12 travel" alt="南港大坑">
            <p>南港魔神仔硿示意圖</p>
            <img src="../assets/平溪魔神仔洞-googlemap.png" class="col-12 travel" alt="平溪魔神仔洞">
            <p>平溪魔神仔洞示意圖</p>
          </div>

        </div>
      </div>
    </div>

    <div class="bg" v-show="modal_4" v-on:click="modal_4 = !modal_4"></div>
    <!-- 5 -->
    <div class="c-modal " v-show="modal_5">
      <!-- computer version -->
      <div class="row computer">
        <div v-show="modal_1" v-on:click="modal_1 = !modal_1">

        </div>
        <img class="role col-5 p-3" src="../assets/貓將軍.jpg" alt="貓將軍">
        <div class="col-7 p-3 content">
          <h4>貓將軍</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>宜蘭頭城當地有個詭譎傳說，相傳1875年左右，有隻山貓妖怪在福德坑一帶作亂，到處殺害家畜、散佈疾病，村民們儘管四處求神問佛，也無法解決，相當困擾。
              <br>
              就在村民束手無策之際，山貓妖怪透過乩童傳話：「要我安安份份可以，但你們要為我建一間廟，定期祭拜，那我就願意成為這個村莊的守護神」，村民們聽聞後便照辦，在當地建造一座天神宮，山貓妖怪也信守承諾，不再禍害百姓。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 宜蘭頭城</div>
          </div>
          <div class="row ">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 將軍廟</div>

          </div>
          <div class="row    2">
            <p class="col-12">
              供奉貓將軍的天神宮，後來因為土匪作亂被燒燬，沒想到多年以後，居民在福德坑溪下游撿到貓將軍神像，便在頭城新建里新興路重新建造一座「將軍廟」，現在也是台灣唯一一間有貓神信仰的廟宇！
            </p>
            <img src="../assets/將軍廟-頭城新建里將軍廟臉書.jpg" class="col-6 travel" alt="將軍廟">
            <p class="col-6"></p>
            <p class="col-5">將軍廟示意圖</p>
          </div>
          <div class=" row">

          </div>

        </div>
      </div>
      <!-- mobile version -->
      <div class="close" v-show="modal_5" v-on:click="modal_5 = !modal_5"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">

        <div class="row col-12">
          <img class="role" src="../assets/貓將軍.jpg" alt="貓將軍">
        </div>
        <div class="col-12 content">
          <h4>貓將軍</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">宜蘭頭城當地有個詭譎傳說，相傳1875年左右，有隻山貓妖怪在福德坑一帶作亂，到處殺害家畜、散佈疾病，村民們儘管四處求神問佛，也無法解決，相當困擾。
              <br>
              就在村民束手無策之際，山貓妖怪透過乩童傳話：「要我安安份份可以，但你們要為我建一間廟，定期祭拜，那我就願意成為這個村莊的守護神」，村民們聽聞後便照辦，在當地建造一座天神宮，山貓妖怪也信守承諾，不再禍害百姓。
            </p>
          </div>
          <div class="row  ">
            <h5 class="col-6">出沒地區</h5>

            <div class="col-6 text">宜蘭頭城</div>
          </div>
          <div class="row">
            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 將軍廟</div>
          </div>
          <div class="row ">
            <p class="col-12">
              供奉貓將軍的天神宮，後來因為土匪作亂被燒燬，沒想到多年以後，居民在福德坑溪下游撿到貓將軍神像，便在頭城新建里新興路重新建造一座「將軍廟」，現在也是台灣唯一一間有貓神信仰的廟宇！
            </p>
            <img src="../assets/將軍廟-頭城新建里將軍廟臉書.jpg" class="col-12 travel" alt="將軍廟">
          </div>
          <div class="row   5">
            <p>將軍廟示意圖</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-show="modal_5" v-on:click="modal_5 = !modal_5"></div>
    <!-- 6 -->
    <div class="c-modal " v-show="modal_6">
      <!-- computer version -->
      <div class="row computer">

        <img class="role col-5 p-3" src="../assets/01-日月潭白鹿.jpg" alt="日月潭白鹿">
        <div class="row col-7 content p-3">
          <h4>白鹿</h4>
          <div class="row col-6">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p>
              位於南投的日月潭，從空中看下去就像台灣的心臟，而居住於日月潭邊的邵族有個美麗的傳說，相傳祖先有次打獵時看見一隻白鹿，便一路追逐牠至日月潭邊，這時白鹿突然跳入潭中，族人本來沮喪，觀望四周後驚覺此處山明水秀、物產豐碩，便捕獵充飢。<br>
              當晚，白鹿化身為白衣女子，托夢給一名邵族長者，表示因為日月潭能農耕漁獵，才引領邵族人前來。隔日，長者將夢境告訴旁人，一行人便回去稟告頭目，頭目決定舉族搬遷至日月潭拉魯島附近，白鹿也成為邵族神聖的象徵。
            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 南投日月潭</div>
          </div>
          <div class="row ">

            <h5 class="col-6">尋妖之旅</h5>
            <div class="col-6 text"> 士亭仔步道、拉魯島</div>
          </div>
          <div class="row ">
            <p class="col-12">一、士亭仔步道<br>
              土亭仔（Puzi）是傳說中白鹿下水之地，也是邵族石印社遺址所在，現在則是石姓氏族祖靈祭地點。土亭仔步道沿途設置解說牌，提供邵族文化解說，步道盡頭的眺望台可欣賞三面山水景色。
              <br> <br>
              二、拉魯島<br>
              位於日月潭的拉魯島（Lalu），是邵族祭祀、求巫的重要場所，因其神聖性，目前禁止遊客登島。若想眺望拉魯島面貌，可從水社頭碼頭乘船前往玄光碼頭，途中近距離駛經拉魯島時眺望最為清楚。
            </p>
            <br> <img src="../assets/土亭仔步道-日月潭國家風景區網站.jpg" class="col-6 travel  chen  2" alt="土亭仔步道">
            <img src="../assets/拉魯島-日月潭國家風景區網站.jpg" class="col-6 travel   chen 2" alt="拉魯島">
          </div>
          <div class="row   5">
            <p class="col-6">士亭仔步道示意圖</p>
            <p class="col-6">拉魯島示意圖</p>
          </div>

        </div>
      </div>
      <!-- mobile version -->
      <div class="close" v-show="modal_6" v-on:click="modal_6 = !modal_6"><i class="fa-regular fa-plus fa-2xs"></i>
      </div>
      <div class="row mobile">

        <button type="button" class="btn-close btn-close-dark" aria-label="Close"></button>
        <div class="row col-12">

          <img class="role" src="../assets/01-日月潭白鹿.jpg" alt="日月潭白鹿">
        </div>
        <div class="col-12 content">
          <h4>白鹿</h4>
          <div class="row col-12">
            <h5>起源小故事</h5>
          </div>
          <div class="row">
            <p class="col-12">
              位於南投的日月潭，從空中看下去就像台灣的心臟，而居住於日月潭邊的邵族有個美麗的傳說，相傳祖先有次打獵時看見一隻白鹿，便一路追逐牠至日月潭邊，這時白鹿突然跳入潭中，族人本來沮喪，觀望四周後驚覺此處山明水秀、物產豐碩，便捕獵充飢。<br>
              當晚，白鹿化身為白衣女子，托夢給一名邵族長者，表示因為日月潭能農耕漁獵，才引領邵族人前來。隔日，長者將夢境告訴旁人，一行人便回去稟告頭目，頭目決定舉族搬遷至日月潭拉魯島附近，白鹿也成為邵族神聖的象徵。

            </p>
          </div>
          <div class="row ">
            <h5 class="col-6">出沒地區</h5>
            <div class="col-6 text"> 南投日月潭</div>
          </div>
          <div class="row">
            <h5 class="col-6">尋妖之旅</h5>

          </div>
          <div class="row ">
            <p class="col-12">一、士亭仔步道<br>
              土亭仔（Puzi）是傳說中白鹿下水之地，也是邵族石印社遺址所在，現在則是石姓氏族祖靈祭地點。土亭仔步道沿途設置解說牌，提供邵族文化解說，步道盡頭的眺望台可欣賞三面山水景色。
              <br><br>
              二、拉魯島<br>
              位於日月潭的拉魯島（Lalu），是邵族祭祀、求巫的重要場所，因其神聖性，目前禁止遊客登島。若想眺望拉魯島面貌，可從水社頭碼頭乘船前往玄光碼頭，途中近距離駛經拉魯島時眺望最為清楚。
            </p>
            <img src="../assets/土亭仔步道-日月潭國家風景區網站.jpg" class="col-12 travel" alt="土亭仔步道">
            <p>士亭仔步道示意圖</p>
            <img src="../assets/拉魯島-日月潭國家風景區網站.jpg" class="col-12 travel" alt="拉魯島">
            <p>拉魯島示意圖</p>
          </div>
          <div class="row   5">

          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-show="modal_6" v-on:click="modal_6 = !modal_6"></div>
  </div>


</template>
<script>
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.c-modal').style.display = 'none';
})
</script>

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
    },



  },
}
</script>

<style scoped>
.chen {
  height: 250px;
}



.mobile {
  display: none;
}

.fa-plus {
  display: block;
  margin-top: 1.3rem;



}

.travel {}

.travel {
  padding: 1rem 1rem 1rem 0rem;
}

.role {
  height: 100%;
  margin: auto;
  margin-top: 1rem
}

.role2 {
  height: 100%;
  margin: auto;
  /* margin-left: 1.5rem; */

}


.row .computer {
  padding: 1rem;
}

.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('../assets/banner1.jpg');
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

  background-size: cover;
  background-image: url('../assets/banner1.jpg');

  padding: 0rem 0;
  width: 100%;
  height: 100%;
  color: white;
  padding: 3rem;
  /* background-image: url('../assets/妖怪網頁_computer\ banner.jpg'); */
}



picture {
  max-width: 1000px;
  max-height: auto;

  min-height: 20px;
  max-width: 1000px;
}

.timeimg {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;

  filter: saturate(.2);

  cursor: pointer;
}

.timeimg:hover {

  width: 110%;
  height: 110%;
  filter: saturate(1);
  transition: .3s;
  cursor: pointer;
}

.timeimg2 {
  width: 280px;
  height: 280px;
  z-index: 4;
  padding: 1rem;


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
  overflow-x: scroll;
  height: 100%;
  margin-top: -5.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}



.timeline ::-webkit-scrollbar * {
  display: none;
}



.timeline ol {
  margin-top: 8rem;
  font-size: 0;
  width: 100%;
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
  width: 15px;
  height: 15px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #e4e4e4;
  border: 1px solid grey;
  cursor: pointer;
}

.timeline ol li:hover::after {
  width: 16px;
  height: 16px;
  transition: 1s;
  background: #e5c523;
}



/* 對話筐樣式 */
.timeline ol li div {
  position: absolute;
  left: calc(100% - 12rem);
  width: 220px;
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
  margin-bottom: 8px;
}



h5 {
  color: white;
  background: #333333;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin: 0.5rem 0rem;
  height: fit-content;
  font-size: 1.4rem;
}

.text {
  font-size: 28px;
  padding: 0.5rem;
  width: fit-content;

}

.mobile {
  margin: auto;
}



@media screen and (max-width: 900px) {

  .content {
    text-align: center;

  }

  h5 {
    color: white;
    background: #333333;
    padding: 0.5rem 1rem;
    font-size: 24px;
    width: fit-content;

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
    /* padding: 2rem 1.5rem 0rem 3rem; */
    padding: 2.5rem 0.5rem 1rem 0.5rem;

  }

  p {
    font-size: 18px;
    line-height: 28px;
  }

  .mobile {
    display: block;
  }

  .computer {
    display: none;
  }

  /* .computer {
    display: none;
  } */


}





/* Add arrows to the left container (pointing right) */
/* .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  /* Add arrows to the right container (pointing left) */
/* .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  */

/* The actual content */
.content {
  /* padding: 20px; */
  padding: rem;
  position: relative;
  border-radius: 6px;

}

.mobile2 {
  display: none;

}






.close:hover {
  color: transparent;
  opacity: 1;
}

.close:focus {
  color: transparent;
  text-decoration: none;
  cursor: pointer;
}


.close {
  position: absolute;
  right: 2rem;
  font-size: 4rem;
  color: #333;
  top: 2.5rem;
  padding: 1px;
  text-align: right;
  padding: 0;
  transform: rotate(45deg);
  z-index: 100;
  opacity: .6;
  cursor: pointer;

}

.close:hover {
  color: #333;
  opacity: 1;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 900px) {

  /* Place the timelime to the left */
  .timeline::after {
    left: 17px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 50px;
    padding-right: 20px;
    margin-bottom: 5rem;
  }

  Make sure that all arrows are pointing leftwards .container::before {
    top: 20px;
    left: 35px;
    border-width: 10px 15px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 8px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }


  .close {



    position: absolute;
    right: 2rem;
    font-size: 4rem;
    color: #333;
    top: 1.5rem;
    padding: 1px;
    text-align: right;
    padding: 0;
    transform: rotate(45deg);
    z-index: 100;
    opacity: .6;
    cursor: pointer;

  }

  .close:hover {
    color: #333;
    opacity: 1;
  }

  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .travel {
    padding: 1rem 1rem 1rem 0rem;
  }


}





@media screen and (max-width: 500px) {
  * {
    box-sizing: border-box;

  }



  .computer {
    display: none;
  }

  .mobile2 {
    display: block;

  }


  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    /* margin: 1rem auto; */
    cursor: pointer;

    margin-top: 0rem;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #FFF;
    top: 0;
    bottom: 0;
    /* left: 50%; */
    /* margin-left: 0.5rem; */
    z-index: 0;
    margin-bottom: 3rem;

  }

  /* Container around content */
  .container {
    padding: 10px;
    position: relative;
    background-color: inherit;
    /* width: 50%;   */
  }

  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #FFF;

    border-radius: 50%;
    margin-top: -140px;
    /* margin-left: 0.5rem; */

  }

  .container:hover::after {

    width: 22px;
    height: 22px;
    background-color: rgb(245, 245, 136);
    transition: .5s;

  }

  .computer1 {
    display: none;
  }



  .timeline .time {
    display: block;
    margin: auto;
    width: fit-content;
    font-size: 2rem;
    margin-bottom: 8px;
  }

  .layout {
    padding: 1rem;
  }
}

.c-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 85vw;
  height: 80vh;
  padding: 2rem;
  color: rgb(7, 7, 7);

  border-radius: 5px;
  background-image: url('../assets/底2.jpg');
  background-size: cover;
  z-index: 10001;
  opacity: 1;
  transition: .6s;
  overflow: scroll;

}

h2 {
  text-align: center;

}


h4 {
  text-align: left;
  font-size: 3rem !important;
  margin-bottom: 1rem;
}
</style>
 