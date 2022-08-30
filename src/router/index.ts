import * as VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import LoginPage from '../components/pages/LoginPage.vue';
import EditArticle from '../components/pages/EditArticle.vue';
import SearchPage from '../components/pages/SearchPage.vue';
import ProfilePage from '../components/pages/ProfilePage.vue';
import SettingPage from '../components/pages/SettingPage.vue';
import SettingPageAvatar from '../components/pages/SettingPageAvatar.vue';
import SettingPageProfile from '../components/pages/SettingPageProfile.vue';
import SettingPagePassword from '../components/pages/SettingPagePassword.vue';
import CollectionPage from '../components/pages/CollectionPage.vue';

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
    redirect: '/setting/avatar',
    children: [
      {
        name: 'SettingAvatar',
        path: '/setting/avatar',
        component: SettingPageAvatar,
      },
      {
        name: 'SettingProfile',
        path: '/setting/profile',
        component: SettingPageProfile,
      },
      {
        name: 'SettingPassword',
        path: '/setting/password',
        component: SettingPagePassword,
      },
    ],
  },
  {
    name: 'Collection',
    path: '/collection',
    component: CollectionPage,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
