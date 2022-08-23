<template>
  <div class="w-1/3 md:w-full flex flex-col m-auto relative py-10">
    <h2 class="font-bold text-4xl text-left px-2 md:px-4">帳號設定</h2>
    <div
      class="w-full flex justify-start p-2 md:px-4 mt-4 sm:sticky sm:top-0 sm:bg-white"
    >
      <AppButton
        v-for="option in editTypeOptions"
        :key="option.label"
        :label="option.label"
        class="px-3 mr-3"
        :class="
          activeEditType === option.value
            ? 'btn-secondary-dark active'
            : 'btn-gray-light'
        "
        :icon="option.icon"
        @click="setEditType(option.value)"
      />
    </div>
    <div class="my-4 px-4 py-10 md:py-4 w-full bg-white">
      <SettingPageAvatar v-if="activeEditType === 'avatar'" />
      <SettingPageProfile v-if="activeEditType === 'profile'" />
      <SettingPagePassword v-if="activeEditType === 'password'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../common-components/AppButton.vue';
import SettingPageAvatar from './SettingPageAvatar.vue';
import SettingPageProfile from './SettingPageProfile.vue';
import SettingPagePassword from './SettingPagePassword.vue';

export type Article = {
  category: string;
  title: string;
  image?: File;
  body: string;
};

export type EditType = 'avatar' | 'profile' | 'password';

const activeEditType = ref('avatar');
const editTypeOptions = [
  {
    label: '頭像',
    value: 'avatar',
    icon: ['far', 'id-badge'],
  },
  {
    label: '基本資料',
    value: 'profile',
    icon: ['far', 'user'],
  },
  {
    label: '密碼',
    value: 'password',
    icon: ['fa', 'key'],
  },
];

const setEditType = (editType: string) => {
  activeEditType.value = editType;
};
</script>
