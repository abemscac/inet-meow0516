<template>
  <div class="flex">
    <HomePageSidebar class="my-10 md:my-4" />
    <ArticleList class="overflow-y-auto">
      <section
        class="w-4/6 border border-gray-100 rounded-lg bg-white p-6 md:w-full md:border-0"
        :class="articles ? 'h-fit' : 'h-2/6'"
      >
        <div class="flex md:flex-col md:items-center">
          <div>
            <img :src="author.avatar" alt="author" class="w-32" />
          </div>
          <div
            class="flex flex-col mx-4 justify-center items-start md:items-center"
          >
            <h2 class="text-3xl font-bold">{{ author.name }}</h2>
            <p class="text-gray-300">{{ author.account }}</p>
          </div>
        </div>
        <hr class="my-4" />
        <div class="flex items-center mb-4">
          <h2 class="font-bold text-3xl text-left md:text-4xl">
            文章<span class="text-gray-300 px-2">&middot;</span>
          </h2>
          <span class="text-gray-300"> {{ articles.length }}篇 </span>
        </div>
        <section v-if="articles.length">
          <HomePageArticle
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </section>
        <section v-else class="text-gray-300">
          {{ author.name }} 還沒有發布任何文章
        </section>
      </section>
    </ArticleList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArticleList from '../common-components/ArticleListContainer.vue';
import HomePageArticle from './HomePageArticle.vue';
import HomePageSidebar from './HomePageSidebar.vue';
import { Article, mockArticles } from '../../mock/mockArticle';

const articles = ref<Array<Article>>(mockArticles);
const author = {
  avatar: new URL('../../assets/default-avatar_1.png', import.meta.url).href,
  name: 'INET第一名',
  account: '@inet-no1',
};
</script>
