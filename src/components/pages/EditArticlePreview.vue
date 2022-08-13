<template>
  <section class="bg-white">
    <article class="flex flex-col">
      <p class="p-6 font-bold text-left text-2xl">
        {{ article.title || '現在沒有標題' }}
      </p>
      <div class="bg-gray-100 w-full h-80 sm:h-60">
        <img
          v-if="previewImage"
          :src="previewImage"
          class="w-full h-80 sm:h-60 object-cover"
        />
      </div>
      <div class="p-6 md:p-4 text-left">
        <div class="flex">
          <img src="../../assets/default-avatar_1.png" class="h-9" />
          <div class="flex flex-col items-start px-4">
            <p>{{ store.state.userInfoModule.userInfo.username }}</p>
            <div class="flex gap-x-2 text-xs">
              <img src="../../assets/animal.png" class="h-4" alt="category" />
              <p>{{ categoryText || '分類' }}</p>
              &middot;
              <p class="text-gray-300">剛剛</p>
            </div>
          </div>
        </div>
        <div class="flex justify-start gap-x-4 text-xs py-2">
          <div class="flex gap-x-1">
            <font-awesome-icon :icon="['far', 'eye']" />
            <p>很多!</p>
          </div>
          <div class="flex gap-x-1">
            <button>
              <font-awesome-icon :icon="['far', 'heart']" />
            </button>
            <p>也很多!</p>
          </div>
        </div>
        <p class="py-4 break-words">
          {{ article.body || '現在還沒有輸入內文' }}
        </p>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { useStore } from '../../vuex/Store';
import { Article } from './EditArticle.vue';
import { mockArticleCategories } from '../../mock/mockArticleCategories';

const store = useStore();

const props = defineProps<{
  article: Article;
  previewImage: string;
}>();

const { article } = toRefs(props);

/**
 * TODO: Get rid of this by using i18n.
 */
const categoryText = computed(() => {
  const category = mockArticleCategories.find(
    (x) => x.code === article.value.category
  );
  return category?.label || '';
});
</script>
