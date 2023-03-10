import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from "@/bootstrap";
import icons from './assets/icons.css';
import axios from "axios";
import {Model} from "vue-api-query";

Model.$http = axios;

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {VueMaskFilter} from "v-mask";

createApp(App).use(VueMaskFilter);
createApp(App).use(Toast);
createApp(App).use(bootstrap);
createApp(App).use(icons);
createApp(App).use(router).mount('#app')
