import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import store from './vuex/Store';

createApp(App).use(store).mount('#app');
