import Vue from "vue"
import Hello from "./components/Hello.vue"
import Card from "./components/Card.vue"

let app = new Vue({
    el: '#app',
    components: {
        hello: Hello,
        card: Card
    }
});