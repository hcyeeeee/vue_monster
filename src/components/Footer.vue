<template>
    <div class="text">
        <p>文字內容｜廖婉馨、詹雅涵<br>
            視覺設計｜蔡詠全<br>
            網頁設計｜黃莘懿<br>
            特別感謝｜台北地方異聞工作室<br>
            &emsp;&emsp;&emsp;&emsp;｜奇異果文創<br>
            &emsp;&emsp;&emsp;&emsp;｜晨星出版社


        </p>


    </div>

</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: `Copyright © 2022 民視新聞網路部 社群中心`,
        }
    },
}
</script>

<style scoped>
* {
    font-family: '華康愛情體W5', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: black;
    color: white;
    padding: 1rem;
    line-height: 2.5rem;
    font-weight: 800;
    font-size: 1.5rem;
}

.text {
    display: flex;
    justify-content: center;
}



.end {
    display: flex;
    justify-content: center;
    margin-bottom: 1px;

}

.logo {
    height: 0px;
}
</style>
