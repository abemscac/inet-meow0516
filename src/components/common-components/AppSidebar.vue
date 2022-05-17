<template>
  <div class="absolute w-full h-screen flex hidden sm:flex">
    <div class="w-72 bg-white p-6 shrink-0 z-50">
      <div class="flex gap-x-4">
        <button
          class="rounded-full border border-primary-500 text-primary-500 px-8 py-2.5 grow"
          @click="login"
        >
          登入
        </button>
        <button class="rounded-full bg-primary-500 text-white px-8 py-2.5 grow">
          註冊
        </button>
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
import { useStore } from 'vuex';

const store = useStore();
const login = () => {
  console.log('login');
};
const closeSidebar = () => {
  store.dispatch('sidebarModule/close');
};
</script>
