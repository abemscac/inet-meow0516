<template>
  <div class="flex md:py-4 py-10">
    <HomePageSidebar />
    <div class="flex justify-start w-full md:w-11/12 px-10 md:px-0">
      <section
        class="w-4/6 border border-gray-100 rounded-lg bg-white p-4 md:w-full md:border-0"
        :class="articles ? 'h-fit' : 'h-2/6'"
      >
        <h2 class="font-bold text-3xl text-left mb-4 md:text-4xl">熱門文章</h2>
        <div class="flex flex-wrap justify-start gap-2">
          <AppButton
            v-for="option in durationOptions"
            :key="option.label"
            :label="option.label"
            class="px-3 py-2 shrink-0"
            :class="
              activeDuration === option.value
                ? 'btn-primary-dark active'
                : 'btn-gray-light'
            "
            @click="selectDuration(option.value)"
          />
        </div>
        <section v-if="articles.length">
          <HomePageArticle
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </section>
        <section v-else class="text-gray-300">沒有相關文章</section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../common-components/AppButton.vue';
import HomePageArticle from './HomePageArticle.vue';
import HomePageSidebar from './HomePageSidebar.vue';
import { mockArticles } from '../../mock/mockArticle';

enum Duration {
  Today = 'today',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  None = '',
}

interface IDurationOption {
  label: string;
  value: Duration;
}

const durationOptions: IDurationOption[] = [
  {
    label: '今天',
    value: Duration.Today,
  },
  {
    label: '星期',
    value: Duration.Week,
  },
  {
    label: '月',
    value: Duration.Month,
  },
  {
    label: '年',
    value: Duration.Year,
  },
  {
    label: '不限',
    value: Duration.None,
  },
];

const activeDuration = ref(Duration.Today);
const selectDuration = (duration: Duration) => {
  activeDuration.value = duration;
};

const articles = ref(mockArticles);
</script>
