import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from "@tsparticles/vue3"
import { loadFull } from "tsparticles"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router/router'

const app = createApp(App).use(Particles, {
    init: async (engine) => {
        await loadFull(engine);
    }
}).use(ElementPlus).use(router).mount('#app')
