<template>
  <Sidebar v-if="store.state.sidebarModule.sidebarVisible" />
  <div :class="store.state.sidebarModule.sidebarVisible ? 'bg-slate-200' : ''">
    <NavBar />
    <main @click="closeSidebar" class="w-full h-screen">this is content</main>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/common-components/NavBar.vue';
import Sidebar from './components/common-components/AppSidebar.vue';
import { useStore } from 'vuex';

const store = useStore();
const closeSidebar = () => {
  store.dispatch('sidebarModule/close');
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
</style>
