import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';

export const RoutePath = {
  home: '/',
  register: '/register',
};

const routes = [
  { path: RoutePath.home, component: HomePage },
  { path: RoutePath.register, component: RegisterPage },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
