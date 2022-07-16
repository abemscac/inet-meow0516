<template>
  <Sidebar v-if="store.state.sidebarModule.visible" />
  <div class="h-screen bg-base sm:bg-white">
    <NavBar v-if="!isRegisterPage" />
    <main class="w-full" @click="closeUserboxMenu">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { RoutePath } from './router';
import NavBar from './components/common-components/NavBar.vue';
import Sidebar from './components/common-components/AppSidebar.vue';

const store = useStore();
const route = useRoute();
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};

const isRegisterPage = computed(() =>
  route.path === RoutePath.register ? true : false
);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  height: calc(100vh - 66px);
}
</style>
