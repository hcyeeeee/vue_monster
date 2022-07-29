<template>
<div id="app">
  <h1>Hello Vue Router App!</h1>
 
  
</div>
</template>

<script>

export default {
    
    name: 'Intro',
    data() {
        return {
            title: `俄烏衝突 火線直擊`,
        }
    },
}

const Home = { template: '<div>This is Home Page.</div>' }
const About = { template: '<div>This is About Page.</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


const router = VueRouter.createRouter({

  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})


// 5. Create and mount the root instance.
const app = Vue.createApp({});

app.use(router);
app.mount('#app');
</script>

<style scoped>
#app {
  margin: 1rem;
}

p > a{
  margin-right: 1rem;
}

section {
  border: 1px solid #000;
  padding: 10px;
}
</style>
