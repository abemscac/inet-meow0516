<template>
  <div class="sm:flex hidden">
    <button
      class="flex items-center justify-center w-8 h-8"
      @click="showUserboxMenu"
    >
      <font-awesome-icon
        :icon="['far', 'user']"
        class="h-5 inline-block mx-2 text-primary-500"
      />
    </button>
    <div
      v-show="sidebarVisible ? false : store.state.userboxModule.menuVisible"
      class="z-10 absolute px-2 py-2 right-2.5 top-14 overlayMenu border border-primary-100 bg-white"
      @click="closeUserboxMenu"
    >
      <ul class="flex flex-col items-start">
        <li class="py-1">
          <button>
            <font-awesome-icon icon="user-plus" class="w-4 inline-block mx-2" />
            <span>註冊</span>
          </button>
        </li>
        <li class="py-1">
          <button @click="login">
            <font-awesome-icon
              icon="arrow-right-to-bracket"
              class="w-4 inline-block mx-2"
            />
            <span>登入</span>
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div class="sm:hidden">
    <div>
      <AppButton label="登入" class="btn-primary-light mr-4" @click="login" />
      <AppButton label="註冊" class="btn-primary-dark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppButton from './AppButton.vue';

type Emits = {
  (e: 'login', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();

const login = (e: MouseEvent) => {
  emit('login', e);
};
const store = useStore();
const sidebarVisible = computed(() => store.state.sidebarModule.visible);
const showUserboxMenu = () => {
  store.dispatch('userboxModule/toggle');
};
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};
</script>
