import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/Store';
import FontAwesomeIcon from '../src/Utilities/fontawesome-icons';
import './component-styles/AppButton.scss';
import './index.css';

createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
