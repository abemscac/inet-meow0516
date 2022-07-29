<template>
  <HomePageSidebar class="my-10" />
  <div
    class="overflow-auto md:overflow-visible flex justify-start w-full md:w-11/12 px-10 pt-10 md:px-0"
  >
    <section
      class="w-4/6 border border-gray-100 rounded-lg bg-white p-4 md:w-full md:border-0"
      :class="articles ? 'h-fit' : 'h-2/6'"
    >
      <h2 class="font-bold text-3xl text-left mb-4 md:text-4xl">熱門文章</h2>
      <div class="flex justify-start gap-x-2">
        <AppButton
          label="今天"
          class="px-3 py-2"
          :class="
            activeDuration === 'today'
              ? 'btn-primary-dark active'
              : 'btn-gray-light'
          "
          @click="selectDuration('today')"
        />
        <AppButton
          label="星期"
          class="px-3 py-2"
          :class="
            activeDuration === 'week'
              ? 'btn-primary-dark active'
              : 'btn-gray-light'
          "
          @click="selectDuration('week')"
        />
        <AppButton
          label="月"
          class="px-3 py-2"
          :class="
            activeDuration === 'month'
              ? 'btn-primary-dark active'
              : 'btn-gray-light'
          "
          @click="selectDuration('month')"
        />
        <AppButton
          label="年"
          class="px-3 py-2"
          :class="
            activeDuration === 'year'
              ? 'btn-primary-dark active'
              : 'btn-gray-light'
          "
          @click="selectDuration('year')"
        />
        <AppButton
          label="不限"
          class="px-3 py-2"
          :class="
            activeDuration === 'all'
              ? 'btn-primary-dark active'
              : 'btn-gray-light'
          "
          @click="selectDuration('all')"
        />
      </div>
      <hr v-if="!articles" class="my-4" />
      <div class="w-full">
        <section v-if="articles" class="py-6">
          <article
            v-for="article in articles"
            :key="article.id"
            class="flex mb-5"
          >
            <button>
              <img
                :src="article.coverImageUrl"
                loading="lazy"
                class="w-24 h-24 object-cover rounded-lg"
                @click="navToArticle"
              />
            </button>
            <div class="mx-2 w-9/12">
              <div class="flex justify-start items-center gap-x-2">
                <button class="text-primary-400 align flex gap-x-1">
                  <img
                    :src="article.category.imageUrl"
                    loading="lazy"
                    class="w-4 h-4 object-cover rounded"
                    alt="category"
                  />
                  <p class="text-xs">
                    {{ article.category.code }}
                  </p>
                </button>
                &middot;
                <button class="text-primary-400 flex gap-x-1">
                  <img
                    :src="article.author.avatarUrl"
                    loading="lazy"
                    class="w-4 h-4 object-cover rounded"
                    alt="category"
                  />
                  <p class="truncate max-w-[200px] sm:max-w-[50px] text-xs">
                    {{ article.author.name }}
                  </p>
                </button>
                &middot;
                <p class="text-gray-400 text-xs">
                  {{ dateToDateString(article.createdAt) }}
                </p>
              </div>
              <div class="text-left mb-4" @click="navToArticle">
                <button
                  class="font-bold sm:max-w-[200px] hover:text-primary-400"
                >
                  <p class="truncate max-w-xs">
                    {{ article.title }}
                  </p>
                </button>
                <p class="line-clamp-2 sm:max-w-[300px] text-xs text-gray-400">
                  {{ article.body }}
                </p>
              </div>
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
        </section>
        <section v-else class="text-gray-300">沒有相關文章</section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../common-components/AppButton.vue';
import HomePageSidebar from './HomePageSidebar.vue';
import { dateToDateString } from '../../Utilities/CompileTool';
import { mockArticles } from '../../mock/mockArticle';

const activeDuration = ref('today');
const selectDuration = (duration: string) => {
  activeDuration.value = duration;
};

const articles = ref(mockArticles);

const like = () => {
  console.log('like this article');
};

const navToArticle = () => {
  console.log('router push to article');
};
</script>
