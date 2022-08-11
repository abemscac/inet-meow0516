<template>
  <div class="flex">
    <HomePageSidebar class="my-10 md:my-4" />
    <ArticleList class="overflow-y-auto">
      <section
        class="w-4/6 border border-gray-100 rounded-lg bg-white p-4 md:w-full md:border-0"
        :class="store.state.searchModule.searchResults ? 'h-fit' : 'h-2/6'"
      >
        <div class="flex items-center mb-4">
          <h2 class="font-bold text-3xl text-left md:text-4xl">
            搜尋結果<span class="text-gray-300 px-2">&middot;</span>
          </h2>
          <span class="text-gray-300">
            {{ store.state.searchModule.searchResults.length ?? 0 }}篇
          </span>
        </div>
        <section v-if="store.state.searchModule.searchResults.length">
          <p class="text-left">
            和<span class="text-secondary-500"
              >&ensp;"{{ store.state.searchModule.searchItem }}"&ensp;</span
            >有關的文章
          </p>
          <HomePageArticle
            v-for="article in store.state.searchModule.searchResults"
            :key="article.id + Date.now()"
            :article="article"
          />
        </section>
        <section v-else class="text-gray-300">
          <hr class="hidden sm:block sm:py-2" />
          沒有找到和<span class="text-secondary-500"
            >&ensp;"{{ store.state.searchModule.searchItem }}"&ensp;</span
          >有關的文章
        </section>
      </section>
    </ArticleList>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../vuex/Store';
import ArticleList from '../common-components/ArticleList.vue';
import HomePageArticle from './HomePageArticle.vue';
import HomePageSidebar from './HomePageSidebar.vue';

const store = useStore();
</script>
