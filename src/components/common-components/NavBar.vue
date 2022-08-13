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
    <router-link :to="{ name: 'Home' }">
      <img
        src="../../assets/logo-I.svg"
        alt="inet"
        class="sm:flex hidden rounded w-8 h-8"
      />
    </router-link>
    <router-link :to="{ name: 'Home' }">
      <img src="../../assets/logo.svg" alt="inet" class="sm:hidden" />
    </router-link>

    <form
      class="flex items-center rounded border border-primary-200 px-3 search-form"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="keyword"
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
    <UserBoxLogin v-if="store.state.userInfoModule.isLogin" />
    <UserBoxNotLogin v-else />
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../../vuex/Store';

import UserBoxLogin from '../common-components/UserboxIsLogin.vue';
import UserBoxNotLogin from '../common-components/UserboxIsNotLogin.vue';

const route = useRoute();
const router = useRouter();
const store = useStore();

const showSidebar = () => {
  store.dispatch('sidebarModule/toggle');
  closeUserboxMenu();
};

const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};

const keyword = ref<string>((route.query.keyword as string) || '');

const handleSubmit = () => {
  if (!keyword.value) return;
  router.push({
    name: 'Search',
    query: {
      keyword: keyword.value,
    },
  });
};

watch(
  () => route.query.keyword,
  (value) => {
    keyword.value = (value as string) || '';
  }
);
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
