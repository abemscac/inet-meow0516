<template>
  <div class="flex">
    <HomePageSidebar class="my-10 md:my-4" />
    <SearchPageArticleList :key="keyword" :keyword="keyword" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SearchPageArticleList from './SearchPageArticleList.vue';

const route = useRoute();
const keyword = computed<string>(() => (route.query.keyword as string) || '');
</script>
