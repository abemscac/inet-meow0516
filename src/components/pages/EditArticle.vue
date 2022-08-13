<template>
  <div class="w-1/3 md:w-full md:pt-0 flex flex-col m-auto relative">
    <div
      class="w-full flex justify-start p-2 mt-4 sm:sticky sm:top-0 sm:bg-white"
    >
      <AppButton
        label="撰寫"
        class="px-3 mr-3"
        :class="
          isInEditMode
            ? 'btn-primary-dark active'
            : 'border border-gray-100 bg-white'
        "
        :icon="['far', 'pen-to-square']"
        @click="isInEditMode = true"
      />
      <AppButton
        label="預覽"
        class="px-3"
        :class="
          !isInEditMode
            ? 'btn-primary-dark active'
            : 'border border-gray-100 bg-white'
        "
        :icon="['far', 'eye']"
        @click="isInEditMode = false"
      />
    </div>
    <EditArticleEdit
      v-if="isInEditMode"
      v-model="article"
      v-model:preview-image="previewImage"
    />
    <EditArticlePreview
      v-else
      :article="article"
      :preview-image="previewImage"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import AppButton from '../common-components/AppButton.vue';
import EditArticleEdit from './EditArticleEdit.vue';
import EditArticlePreview from './EditArticlePreview.vue';

export type Article = {
  category: string;
  title: string;
  image?: File;
  body: string;
};

const isInEditMode = ref<boolean>(true);

const article = reactive<Article>({
  category: '',
  title: '',
  image: undefined,
  body: '',
});

onBeforeRouteLeave(() => {
  if (article.category || article.title || article.image || article.body) {
    return confirm('資料尚未儲存，是否離開此頁面？') ? true : false;
  }
});

const previewImage = ref<string>('');
</script>
