<template>
  <div class="flex">
    <button class="sm:hidden mr-4">
      <font-awesome-icon
        :icon="['far', 'pen-to-square']"
        class="h-5 inline-block text-primary-500"
      />
    </button>
    <button class="w-9 h-9" @click="showUserboxMenu">
      <img
        src="../../assets/default-avatar_1.png"
        alt="avatar"
        class="avatar"
      />
    </button>
    <div
      v-show="sidebarVisible ? false : store.state.userboxModule.menuVisible"
      class="z-10 absolute px-2 py-2 right-7 top-14 border border-primary-100 bg-white"
      @click="closeUserboxMenu"
    >
      <DropdownContainer>
        <DropdownItem
          class="sm:flex hidden"
          :icon="['far', 'pen-to-square']"
          label="發表文章"
        />
        <DropdownItem :icon="['far', 'user']" label="個人頁面" />
        <DropdownItem :icon="['far', 'bookmark']" label="我的收藏" />
        <DropdownItem :icon="['far', 'clock']" label="瀏覽紀錄" />
        <DropdownItem icon="gear" label="帳號設定" />
        <DropdownItem
          icon="arrow-right-from-bracket"
          label="登出"
          @click="logout"
        />
      </DropdownContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../vuex/Store';
import router from '../../router';
import DropdownContainer from './DropdownContainer.vue';
import DropdownItem from './DropdownItem.vue';

const store = useStore();

const logout = () => {
  store.commit('userInfoModule/logout');
  router.push({ name: 'Home' });
};
const sidebarVisible = computed(() => store.state.sidebarModule.visible);
const showUserboxMenu = () => {
  store.dispatch('userboxModule/toggle');
};
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};
</script>

<style>
.avatar {
  height: 40px;
}
</style>
