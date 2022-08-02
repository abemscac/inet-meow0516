import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import LoginPage from '../components/pages/LoginPage.vue';
import EditArticle from '../components/pages/EditArticle.vue';

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
  {
    name: 'Edit Article',
    path: '/edit-article',
    component: EditArticle,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
