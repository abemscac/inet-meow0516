<template>
  <div class="sm:flex hidden">
    <div class="flex">
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
          <DropdownItem :icon="['far', 'pen-to-square']" label="發表文章" />
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
  </div>

  <div class="sm:hidden">
    <div class="flex">
      <button class="mr-4">
        <font-awesome-icon
          :icon="['far', 'pen-to-square']"
          class="h-5 inline-block text-primary-500"
        />
      </button>
      <button @click="showUserboxMenu">
        <img
          src="../../assets/default-avatar_1.png"
          alt="avatar"
          class="avatar"
        />
      </button>
      <div
        v-show="sidebarVisible ? false : store.state.userboxModule.menuVisible"
        class="z-10 absolute top-14 border border-primary-100 bg-white"
        @click="closeUserboxMenu"
      >
        <DropdownContainer class="px-2.5 py-1">
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import DropdownContainer from './DropdownContainer.vue';
import DropdownItem from './DropdownItem.vue';

type Emits = {
  (e: 'logout', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();
const store = useStore();

const logout = (e: MouseEvent) => {
  emit('logout', e);
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
