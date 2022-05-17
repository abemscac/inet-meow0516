<template>
  <nav
    class="flex items-center justify-between px-16 py-2.5 sm:px-6 bg-white drop-shadow"
  >
    <button
      class="sm:flex sm:flex-col sm:justify-center hidden"
      @click="showSidebar"
    >
      <font-awesome-icon icon="bars" class="text-primary-500" />
    </button>

    <img
      src="../../assets/logo-I.svg"
      alt="inet"
      class="sm:flex hidden rounded w-8 h-8"
    />
    <img src="../../assets/logo.svg" alt="inet" class="sm:hidden" />

    <form
      class="flex items-center rounded border border-primary-200 px-3 search-form"
    >
      <input
        class="h-10 outline-0 grow mr-1"
        type="text"
        placeholder="搜尋INET"
      />
      <button type="submit" class="w-6 h-6">
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

<style lang="scss" scoped>
.search-form {
  width: 33vw;
  min-width: 167px;
  max-width: 480px;
  @media (max-width: 680px) {
    width: 45vw;
  }
  @media (max-width: 480px) {
    width: auto;
  }
}
</style>
