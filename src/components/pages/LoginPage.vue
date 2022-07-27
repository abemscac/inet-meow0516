<template>
  <div class="flex justify-center h-full">
    <div class="flex flex-col items-center w-4/12 sm:w-9/12 py-10">
      <img src="../../assets/logo-I-rounded.png" alt="inet" class="w-16" />
      <h1 class="text-3xl font-bold my-6">登入 INET</h1>
      <form class="w-full">
        <div class="mb-4">
          <input
            type="text"
            class="w-full border border-primary-200 rounded-lg p-2 mb-1"
            :class="isError ? 'border-indicator-danger' : ''"
            placeholder="帳號*"
            :pattern="usernameRegExp.source"
            required
          />
          <p
            v-if="isError"
            class="text-left text-xs px-1 text-indicator-danger"
          >
            Error message(TBD)
          </p>
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full border border-primary-200 rounded-lg p-2 mb-1"
            :class="isError ? 'border-indicator-danger' : ''"
            placeholder="密碼*"
            :pattern="passwordRegExp.source"
            required
          />
          <p
            v-if="isError"
            class="text-left text-xs px-1 text-indicator-danger"
          >
            Error message(TBD)
          </p>
        </div>

        <AppButton label="登入" class="w-full btn-primary-dark" />
      </form>
      <p class="my-2">
        還沒有帳號嗎？<button class="text-primary-400" @click="navToRegister">
          建立帳號
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '../../router';
import AppButton from '../common-components/AppButton.vue';
import { usernameRegExp, passwordRegExp } from '../../constants/regexp.const';

const store = useStore();
if (store.state.userInfoModule.isLogin) {
  router.push({ name: 'Home' });
}

const isError = ref(false);
const navToRegister = () => {
  router.push({ name: 'Register' });
};
</script>
<style lang="scss"></style>
