import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import store from './vuex/Store';
import FontAwesomeIcon from '../src/Utilities/fontawesome-icons';

createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
