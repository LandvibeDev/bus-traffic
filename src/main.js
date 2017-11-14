import Vue from "vue"
import VueRouter from "vue-router"
import Card from "./components/Card.vue"
import Test from "./components/Test.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Card },
    { path: '/test', component: Test }
  ]
  
const router = new VueRouter({
    mode: 'history',
    routes
})
  
const app = new Vue({
    router
}).$mount('#app')
