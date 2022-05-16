<template>
  <nav class="flex justify-between px-16 py-3 sm:px-7">
    <button
      class="sm:flex sm:flex-col sm:justify-center hidden"
      @click="showSidebar"
    >
      <font-awesome-icon icon="bars" class="text-primary-500" />
    </button>

    <img src="../../assets/logo-I.svg" alt="inet" class="sm:flex hidden w-8" />
    <img src="../../assets/logo.svg" alt="inet" class="sm:hidden" />

    <form class="flex sm:w-3/5 w-1/3 rounded border border-primary-200 px-2">
      <input
        class="w-11/12 h-10 py-0.5 outline-0"
        type="text"
        placeholder="搜尋INET"
      />
      <button type="submit">
        <font-awesome-icon
          icon="magnifying-glass"
          class="px-1 text-primary-200"
        />
      </button>
    </form>
    <div>
      <UserBoxLogin v-if="isLogin" @logout="logout" />
      <UserBoxNotLogin v-else @login="login" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

import UserBoxLogin from '../common-components/UserboxIsLogin.vue';
import UserBoxNotLogin from '../common-components/UserboxIsNotLogin.vue';

const store = useStore();

const isLogin = ref(true);

const login = () => {
  isLogin.value = true;
};

const logout = () => {
  isLogin.value = false;
};

const showSidebar = () => {
  store.dispatch('sidebarModule/toggle');
  closeUserboxMenu();
};

const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};
</script>
