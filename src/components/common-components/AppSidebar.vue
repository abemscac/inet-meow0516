<template>
  <div class="absolute w-full h-screen flex hidden sm:flex">
    <div class="w-72 bg-white p-6 shrink-0 z-50">
      <div v-if="!store.state.userInfoModule.isLogin" class="flex gap-x-4">
        <AppButton label="登入" class="btn-primary-light grow" @click="login" />
        <AppButton
          label="註冊"
          class="btn-primary-dark grow"
          @click="register"
        />
      </div>
      <div class="flex flex-col mt-6">
        <p class="font-bold text-2xl text-left">討論板</p>
        <div class="flex flex-col gap-y-4 mt-6">
          <button
            class="flex items-center w-full hover:bg-primary-100 rounded-lg px-2 py-1"
          >
            <img
              src="../../assets/logo-I.svg"
              alt="inet"
              class="w-8 mr-4 rounded"
            />
            熱門文章
          </button>
          <button
            class="flex items-center w-full hover:bg-primary-100 rounded-lg px-2 py-1"
          >
            <img src="../../assets/chat.png" alt="inet" class="w-8 mr-4" />
            聊天
          </button>
          <button
            class="flex items-center w-full hover:bg-primary-100 rounded-lg px-2 py-1"
          >
            <img src="../../assets/animal.png" alt="inet" class="w-8 mr-4" />
            動物
          </button>
          <button
            class="flex items-center w-full hover:bg-primary-100 rounded-lg px-2 py-1"
          >
            <img src="../../assets/food.png" alt="inet" class="w-8 mr-4" />
            食物
          </button>
          <button
            class="flex items-center w-full hover:bg-primary-100 rounded-lg px-2 py-1"
          >
            <img src="../../assets/travel.png" alt="inet" class="w-8 mr-4" />
            旅遊
          </button>
        </div>
      </div>
    </div>
    <div
      class="absolute w-screen h-screen bg-black/40 z-40"
      @click="closeSidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../vuex/Store';
import AppButton from './AppButton.vue';

const router = useRouter();
const store = useStore();

const login = () => {
  router.push({ name: 'Login' });
  closeSidebar();
};

const register = () => {
  router.push({ name: 'Register' });
  closeSidebar();
};

const closeSidebar = () => {
  store.dispatch('sidebarModule/close');
};
</script>
