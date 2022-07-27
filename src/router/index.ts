import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import LoginPage from '../components/pages/LoginPage.vue';

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
  {
    name: 'Login',
    path: '/login',
    component: LoginPage,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
