<template>
  <ArticleList class="overflow-y-auto">
    <section
      class="w-4/6 border border-gray-100 rounded-lg bg-white p-6 md:w-full md:border-0"
      :class="store.state.searchModule.results ? 'h-fit' : 'h-2/6'"
    >
      <div class="flex items-center mb-4">
        <h2 class="font-bold text-3xl text-left md:text-4xl">
          我的收藏<span class="text-gray-300 px-2">&middot;</span>
        </h2>
        <span class="text-gray-300"> {{ articles.length ?? 0 }}篇 </span>
      </div>
      <section v-if="articles.length">
        <HomePageArticle
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </section>
      <section v-else class="text-gray-300">
        <hr class="my-4" />
        沒有相關紀錄
      </section>
    </section>
  </ArticleList>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../../vuex/Store';
import ArticleList from '../common-components/ArticleListContainer.vue';
import HomePageArticle from './HomePageArticle.vue';
import { mockArticles } from '../../mock/mockArticle';

const store = useStore();
const articles = ref(mockArticles);
</script>
