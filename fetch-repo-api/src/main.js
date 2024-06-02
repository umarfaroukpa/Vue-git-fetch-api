import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import VueSimpleAlert from "vue3-simple-alert";
import router from './router';

createApp(App).use(router).use(VueSimpleAlert).mount('#app')



