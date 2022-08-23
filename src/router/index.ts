import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import LoginPage from '../components/pages/LoginPage.vue';
import EditArticle from '../components/pages/EditArticle.vue';
import SearchPage from '../components/pages/SearchPage.vue';
import ProfilePage from '../components/pages/ProfilePage.vue';
import SettingPage from '../components/pages/SettingPage.vue';

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
  {
    name: 'Search',
    path: '/search',
    component: SearchPage,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: ProfilePage,
  },
  {
    name: 'Setting',
    path: '/setting',
    component: SettingPage,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
