import Vue from "vue"
import Hello from "./components/Hello.vue"

let app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    },
    components: {
        hello: Hello
    }
});