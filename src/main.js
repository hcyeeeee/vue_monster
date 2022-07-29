import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// \import router from './router'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')



// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>",
//   router //使用 router
// });