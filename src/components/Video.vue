<template>
    <div class="layout" id="section_live">
        <div class="layout_grid mb-5">
            <h2>{{ title }}</h2>
            <div class="iframe-container">
                <iframe width="1677" height="847" src="https://www.youtube.com/embed/4rQsqCJhy04"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            title: `台灣鬼怪與我們的距離`,
        }
    },
}
</script>

<style scoped>
.layout {
    background-color: ;
    background-image: url(../assets/banner1.jpg);
    background-size: cover;
    padding: 3rem 0;
    color: white;
    min-height: 300px;
    width: 100%;
    z-index: -1;
}

.layout p {
    text-align: left;
}

.layout_grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    text-align: left;
}

.layout_grid p {
    max-width: 600px;
    padding: 1rem 0;
    margin: auto;
}

/* 漢堡選單 */

.layout_grid div:nth-child(2) {
    text-align: right;
}

.fa-bars {
    font-size: 2rem;
}
</style>
