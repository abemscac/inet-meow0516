<template>
  <article class="flex mt-5">
    <router-link class="shrink-0" :to="articleLink">
      <img
        :src="article.coverImageUrl"
        loading="lazy"
        class="w-24 h-24 object-cover rounded-lg"
      />
    </router-link>
    <div class="mx-2 w-9/12">
      <div class="flex justify-start items-center gap-x-2 py-1">
        <router-link
          class="text-primary-400 align flex gap-x-1"
          :to="{ name: 'Home' }"
        >
          <img
            :src="article.category.imageUrl"
            loading="lazy"
            class="w-4 h-4 object-cover rounded"
            alt="category"
          />
          <p class="text-xs">
            {{ article.category.code }}
            &middot;
          </p>
        </router-link>
        <router-link
          v-if="route.name !== 'Profile'"
          class="text-primary-400 flex gap-x-1"
          :to="{ name: 'Home' }"
        >
          <img
            :src="article.author.avatarUrl"
            loading="lazy"
            class="w-4 h-4 object-cover rounded"
            alt="category"
          />
          <p class="truncate max-w-[200px] sm:max-w-[50px] text-xs">
            <Highlighter
              v-if="route.name === 'Search'"
              class="my-highlight"
              highlight-class-name="highlight"
              :search-words="keywords"
              :auto-escape="true"
              :text-to-highlight="article.author.name"
            />
            <span v-else>
              {{ article.author.name }}
            </span>
            &middot;
          </p>
        </router-link>
        <p class="text-gray-400 text-xs">
          {{ dateToDateString(article.createdAt) }}
        </p>
      </div>
      <router-link class="block text-left mb-4" :to="articleLink">
        <p
          class="font-bold sm:max-w-[200px] hover:text-primary-400 truncate max-w-xs"
        >
          <Highlighter
            v-if="route.name === 'Search'"
            class="my-highlight"
            highlight-class-name="highlight"
            :search-words="keywords"
            :auto-escape="true"
            :text-to-highlight="article.title"
          />
          <span v-else>
            {{ article.title }}
          </span>
        </p>
        <p class="line-clamp-2 sm:max-w-[300px] text-xs text-gray-400">
          <Highlighter
            v-if="route.name === 'Search'"
            class="my-highlight"
            highlight-class-name="highlight"
            :search-words="keywords"
            :auto-escape="true"
            :text-to-highlight="article.body"
          />
          <span v-else>
            {{ article.body }}
          </span>
        </p>
      </router-link>
      <div class="flex justify-start gap-x-4 text-xs">
        <div class="flex gap-x-1">
          <font-awesome-icon :icon="['far', 'eye']" />
          <p>{{ article.views }}</p>
        </div>
        <div class="flex gap-x-1">
          <button>
            <font-awesome-icon :icon="['far', 'heart']" @click="like" />
          </button>
          <p>{{ article.likes }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { useRoute, RouteLocationRaw } from 'vue-router';
import Highlighter from 'vue-highlight-words';
import { Article } from '../../mock/mockArticle';
import { dateToDateString } from '../../Utilities/CompileTool';

const route = useRoute();

const props = withDefaults(
  defineProps<{
    article: Article;
    highlightKeyword?: string;
  }>(),
  {
    highlightKeyword: '',
  }
);

const { article, highlightKeyword } = toRefs(props);

const keywords = computed<string[]>(() => highlightKeyword.value.split(' '));

const articleLink = computed<RouteLocationRaw>(() => ({
  name: 'Home',
  params: {
    id: article.value.id,
  },
}));

const like = () => {
  console.log('like this article');
};
</script>

<style lang="scss" scoped>
::v-deep(.highlight) {
  color: theme('colors.secondary.500');
  background-color: white;
}
</style>
