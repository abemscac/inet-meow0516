import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';

const routes: VueRouter.RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterPage,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
