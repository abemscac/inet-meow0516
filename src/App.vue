<template>
  <Sidebar v-if="store.state.sidebarModule.visible" />
  <div>
    <NavBar />
    <main class="w-full" @click="closeUserboxMenu">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/common-components/NavBar.vue';
import Sidebar from './components/common-components/AppSidebar.vue';
import { useStore } from 'vuex';

const store = useStore();
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};
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
