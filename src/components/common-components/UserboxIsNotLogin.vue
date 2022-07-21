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
      <DropdownContainer>
        <DropdownItem icon="user-plus" label="註冊" @click="register" />
        <DropdownItem
          icon="arrow-right-to-bracket"
          label="登入"
          @click="login"
        />
      </DropdownContainer>
    </div>
  </div>

  <div class="sm:hidden">
    <div>
      <AppButton label="登入" class="btn-primary-light mr-4" @click="login" />
      <AppButton label="註冊" class="btn-primary-dark" @click="register" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppButton from './AppButton.vue';
import DropdownContainer from './DropdownContainer.vue';
import DropdownItem from './DropdownItem.vue';

const router = useRouter();

type Emits = {
  (e: 'login', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();

const login = (e: MouseEvent) => {
  emit('login', e);
};

const register = () => {
  router.push({ name: 'Register' });
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
