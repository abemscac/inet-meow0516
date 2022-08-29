<template>
  <div class="w-1/3 md:w-full flex flex-col m-auto relative py-10 max-w-md">
    <h2 class="font-bold text-4xl text-left px-2 md:px-4">帳號設定</h2>
    <div
      class="w-full flex justify-start p-2 md:px-4 mt-4 sm:sticky sm:top-0 sm:bg-white"
    >
      <router-link
        v-for="subRoute in subRoutes"
        :key="subRoute.name"
        :to="{ name: subRoute.name }"
      >
        <AppButton
          :label="subRoute.label"
          class="px-3 mr-3"
          :class="
            route.name === subRoute.name
              ? 'btn-secondary-dark active'
              : 'btn-gray-light'
          "
          :icon="subRoute.icon"
        />
      </router-link>
    </div>
    <div class="mx-4 my-4 px-4 py-10 md:py-4 w-full bg-white">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import AppButton from '../common-components/AppButton.vue';

export type SubRoute = {
  label: string;
  name: string;
  icon: string[];
};

const route = useRoute();

const subRoutes: SubRoute[] = [
  {
    label: '頭像',
    name: 'SettingAvatar',
    icon: ['far', 'id-badge'],
  },
  {
    label: '基本資料',
    name: 'SettingProfile',
    icon: ['far', 'user'],
  },
  {
    label: '密碼',
    name: 'SettingPassword',
    icon: ['fa', 'key'],
  },
];
</script>
