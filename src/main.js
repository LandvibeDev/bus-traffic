import Vue from "vue"
import Card from "./components/Card.vue"

let app = new Vue({
    el: '#app',
    components: {
        card: Card
    }
});