import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import router from './router';
import GlobalIcon from '@/components/Icons/global-icon.vue';

const app = createApp(App);

app.component('GlobalIcon', GlobalIcon);

app.use(router);

app.mount('#app');
