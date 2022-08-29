<template>
  <div class="flex flex-col items-center">
    <img
      :src="store.state.userInfoModule.userInfo.avatar"
      alt="avatar"
      class="w-32"
    />
    <div class="flex gap-x-4">
      <AppButton
        v-if="store.state.userInfoModule.userInfo.avatar"
        label="移除"
        class="btn-secondary-light"
        :icon="['far', 'trash-can']"
      />
      <AppButton
        label="更換頭像"
        class="btn-primary-dark"
        :icon="['fa', 'arrow-up-from-bracket']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../common-components/AppButton.vue';
import { useStore } from '../../vuex/Store';

const store = useStore();
</script>
