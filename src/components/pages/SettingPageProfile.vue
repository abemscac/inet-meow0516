<template>
  <div class="flex flex-col items-center">
    <form class="w-full">
      <div class="border border-primary-200 rounded-lg px-4 py-1">
        <p class="text-primary-500 text-xs text-left">帳號*</p>
        <input
          type="text"
          class="w-full py-1 outline-0"
          :class="isError ? 'border-indicator-danger' : ''"
          required
        />
        <p v-if="isError" class="text-left text-xs px-1 text-indicator-danger">
          Error message(TBD)
        </p>
      </div>
      <p class="text-left text-xs px-1 text-gray-400">
        帳號長度需為4-30個字元，且為英文字母或數字開頭。<br />
        可使用以下特殊符號 _.-
      </p>
      <div class="border border-primary-200 rounded-lg px-4 py-1 my-4">
        <p class="text-primary-500 text-xs text-left">姓名</p>
        <input
          type="text"
          class="w-full py-1 outline-0"
          :class="isError ? 'border-indicator-danger' : ''"
        />
        <p v-if="isError" class="text-left text-xs px-1 text-indicator-danger">
          Error message(TBD)
        </p>
      </div>
      <AppButton label="儲存" class="btn-primary-dark" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../common-components/AppButton.vue';

export type Article = {
  category: string;
  title: string;
  image?: File;
  body: string;
};

export type EditType = 'avatar' | 'profile' | 'password';

const isError = ref(false);
</script>
