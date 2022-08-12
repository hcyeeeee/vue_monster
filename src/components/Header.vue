<template>
    <div class="layout_header">
        <div class="layout_grid">
            <a href="https://www.ftvnews.com.tw/">
                <img src="../assets/whitelogo.png" alt="ftvlogo">
            </a>
        </div>
    </div>
</template>
<script>
console.log();
</script>

<style scoped>
.layout_header {
    z-index: 222 !important;
    position: absolute;
    top: 3rem;
    z-index: -9999;
}

.layout_grid {
    display: flex;
    justify-content: start;
}


img {
    width: 200px;
    display: flex;
    padding: 1rem;
    margin-top: -180px;
    margin-left: -20px;
}

p {
    font-size: var(--font_h2);
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
}

p img {
    width: 32px;
}


/* 社群分享 */

i {
    color: var(--main_color);
    display: block;
    margin: 20px;
    font-size: 45px;
}

#icon {
    margin-top: 9rem;
    z-index: 999;
    position: fixed;
    width: 50px;
    right: 0;
    margin-right: 1rem;
}

span {
    color: rgb(10, 50, 110);
    margin-top: -2.4rem;
    font-size: 30px;
}

.logo {
    margin-top: -1rem;
    height: 140px;
}

a {
    text-decoration: none;
    color: black;
}
</style>
