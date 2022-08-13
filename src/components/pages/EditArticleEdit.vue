<template>
  <section class="flex flex-col px-8 py-4 md:p-4 bg-white">
    <div class="flex flex-col gap-y-4 input-area">
      <div class="flex">
        <select
          v-model="model.category"
          class="p-2 border border-primary-200 rounded-tl-lg rounded-bl-lg"
          required
        >
          <option value="">分類*</option>
          <option
            v-for="category of mockArticleCategories"
            :key="category.code"
            :value="category.code"
          >
            {{ category.label }}
          </option>
        </select>
        <input
          v-model="model.title"
          type="text"
          placeholder="文章標題*"
          class="grow p-2 border border-primary-200 rounded-tr-lg rounded-br-lg"
          required
        />
      </div>
      <div
        class="border border-gray-300 border-dashed rounded-lg bg-gray-100 text-xs"
        :class="isDropAreaHover ? 'border-4' : ''"
        @drop.prevent="onDrop"
        @dragenter.prevent="isDropAreaHover = true"
        @dragover.prevent="isDropAreaHover = true"
        @dragleave.prevent="isDropAreaHover = false"
      >
        <div v-if="!previewImage" class="flex flex-col items-center h-44">
          <img src="../../assets/Icon.png" alt="upload" class="w-14 my-6" />
          <p class="text-gray-300">拖曳圖片至此或</p>
          <AppButton
            label="上傳一張圖片"
            :icon="['fa', 'arrow-up-from-bracket']"
            class="btn-primary-light my-2"
            @click="openImagePicker"
          />
        </div>
        <img v-else :src="previewImage" class="w-full h-44 object-cover" />
      </div>
      <AppButton
        v-if="previewImage"
        label="更換圖片"
        :icon="['fa', 'image']"
        class="w-40 px-1 text-xs self-center btn-primary-dark"
        @click="openImagePicker"
      />
      <input
        ref="imgInputRef"
        class="hidden"
        type="file"
        accept="image/*"
        @change="handlePreviewImageChange"
      />
      <textarea
        v-model="model.body"
        class="w-full border border-primary-200 rounded-lg p-4 overflow-y-auto grow"
        placeholder="我覺得..."
        required
      />
    </div>
    <hr class="my-4" />
    <AppButton
      label="發佈"
      :icon="['far', 'paper-plane']"
      class="w-20 px-1 text-xs self-end btn-primary-dark"
    />
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { mockArticleCategories } from '../../mock/mockArticleCategories';
import AppButton from '../common-components/AppButton.vue';
import { Article } from './EditArticle.vue';

const props = defineProps<{
  modelValue: Article;
  previewImage: string;
}>();

const { modelValue } = toRefs(props);

const emit = defineEmits<{
  (e: 'update:modelValue', value: Article): void;
  (e: 'update:previewImage', value: string): void;
}>();

const model = computed({
  get: () => modelValue.value,
  set: (value) => {
    emit('update:modelValue', value);
  },
});

const isDropAreaHover = ref(false);
const imgInputRef = ref<HTMLInputElement>();
const openImagePicker = () => {
  imgInputRef.value?.click();
};

const handlePreviewImageChange = (e: Event) => {
  if (!e.target) return;
  const images = (e.target as HTMLInputElement).files;
  if (images) {
    processPreviewImageList(images);
  }
};

const onDrop = (e: DragEvent) => {
  isDropAreaHover.value = false;
  const files = e.dataTransfer?.files;
  if (files) {
    processPreviewImageList(e.dataTransfer?.files);
  }
};

const processPreviewImageList = (images: FileList | null) => {
  const image = images?.[0];
  if (!image?.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    emit('update:previewImage', e.target?.result as string);
  };
  model.value.image = image;
  reader.readAsDataURL(image);
};
</script>

<style lang="scss" scoped>
@media (min-width: 680px) {
  .input-area {
    height: calc(100vh - 300px);
  }
}

@media (max-width: 680px) {
  .input-area {
    height: calc(100vh - 250px);
  }
}
</style>
