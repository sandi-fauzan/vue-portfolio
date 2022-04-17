import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueMeta from 'vue-meta';

// import hamburger from './hamburger'

createApp(App).use(router, VueMeta).mount('#app')
