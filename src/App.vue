<template>
  <Sidebar v-if="store.state.sidebarModule.visible" />
  <div class="h-screen">
    <NavBar v-if="!isVisible" />
    <main class="w-full" @click="closeUserboxMenu">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './vuex/Store';
import { useRoute } from 'vue-router';
import NavBar from './components/common-components/NavBar.vue';
import Sidebar from './components/common-components/AppSidebar.vue';

const store = useStore();
const route = useRoute();
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};

const isVisible = computed(
  () => route.name === 'Register' || route.name === 'Login'
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
