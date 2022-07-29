import { createApp } from 'vue';
import App from './App.vue';
import store, { storeKey } from './vuex/Store';
import router from './router';
import FontAwesomeIcon from '../src/Utilities/fontawesome-icons';
import './component-styles/AppButton.scss';
import './index.css';

createApp(App)
  .use(store, storeKey)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
