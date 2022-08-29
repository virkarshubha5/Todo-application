import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "@/router";

 createApp(App).use(router).mount("#app");


