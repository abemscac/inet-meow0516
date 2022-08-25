<template>
  <div class="flex flex-col items-center">
    <form class="w-full">
      <div class="mb-4">
        <input
          type="password"
          class="w-full border border-primary-200 rounded-lg p-2 mb-1"
          :class="isError ? 'border-indicator-danger' : ''"
          placeholder="舊密碼*"
          :pattern="passwordRegExp.source"
          required
        />
        <p v-if="isError" class="text-left text-xs px-1 text-indicator-danger">
          Error message(TBD)
        </p>
      </div>
      <div class="mb-4">
        <input
          type="password"
          class="w-full border border-primary-200 rounded-lg p-2 mb-1"
          :class="isError ? 'border-indicator-danger' : ''"
          placeholder="新密碼*"
          :pattern="passwordRegExp.source"
          required
        />
        <p v-if="isError" class="text-left text-xs px-1 text-indicator-danger">
          Error message(TBD)
        </p>
        <p class="text-left text-xs px-1 text-gray-400">
          密碼長度需為4-30個字元，且為英文字母或數字開頭。<br />可使用以下特殊符號
          _.~!@#$%^&*()-+
        </p>
      </div>
      <div class="mb-4">
        <input
          type="password"
          class="w-full border border-primary-200 rounded-lg p-2 mb-1"
          :class="isError ? 'border-indicator-danger' : ''"
          placeholder="確認新密碼*"
          :pattern="passwordRegExp.source"
          required
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
import { passwordRegExp } from '../../constants/regexp.const';

export type Article = {
  category: string;
  title: string;
  image?: File;
  body: string;
};

export type EditType = 'avatar' | 'profile' | 'password';

const isError = ref(false);
</script>
