<template>
  <div class="w-1/3 md:w-full pt-10 sm:pt-2 flex flex-col m-auto">
    <div class="w-full flex justify-start px-2 pb-2">
      <AppButton
        label="撰寫"
        class="px-3 mr-3"
        :class="
          displayMode === 'edit'
            ? 'btn-primary-dark active'
            : 'border border-gray-100 bg-white'
        "
        :icon="['far', 'pen-to-square']"
        @click="updateDisplayMode"
      />
      <AppButton
        label="預覽"
        class="px-3"
        :class="
          displayMode === 'preview'
            ? 'btn-primary-dark active'
            : 'border border-gray-100 bg-white'
        "
        :icon="['far', 'eye']"
        @click="updateDisplayMode"
      />
    </div>
    <section v-if="displayMode === 'edit'" class="p-8 bg-white">
      <form class="flex flex-col gap-y-4">
        <div class="flex">
          <select
            v-model="article.category"
            class="p-2 border border-primary-200 rounded-tl-lg rounded-bl-lg"
            required
          >
            <option
              v-for="category of categories"
              :key="category.label"
              :value="category.value"
            >
              {{ category.label }}
            </option>
          </select>
          <input
            v-model="article.title"
            type="text"
            placeholder="文章標題*"
            class="grow p-2 border border-primary-200 rounded-tr-lg rounded-br-lg"
            required
          />
        </div>
        <div
          class="border border-gray-300 border-dashed rounded-lg bg-gray-100"
          :class="isInputImgActive ? 'border-4' : ''"
          @drop.prevent="onDrop"
          @dragenter.prevent="setInputImgActive"
          @dragover.prevent="setInputImgActive"
          @dragleave.prevent="setInputImgInactive"
        >
          <div v-if="!previewImage" class="flex flex-col items-center h-40">
            <img src="../../assets/Icon.png" alt="upload" class="w-14 my-6" />
            <AppButton
              label="上傳一張圖片"
              :icon="['fa', 'arrow-up-from-bracket']"
              class="btn-primary-light"
              @click="handleInputClick"
            ></AppButton>
          </div>
          <img v-else :src="previewImage" class="w-full h-40 object-cover" />
        </div>
        <AppButton
          v-if="previewImage"
          label="更換圖片"
          :icon="['fa', 'image']"
          class="btn-primary-dark w-40"
          @click="handleInputClick"
        ></AppButton>
        <input
          ref="imgInputRef"
          class="hidden"
          type="file"
          accept="image/*"
          @change="handleChange"
        />

        <textarea
          v-model="article.body"
          class="w-full border border-primary-200 rounded-lg p-4 overflow-y-auto"
          :rows="previewImage ? 12 : 15"
          placeholder="我覺得..."
          required
        />
      </form>
      <hr class="my-4" />
      <AppButton
        label="發佈"
        :icon="['far', 'paper-plane']"
        class="btn-primary-dark"
      />
    </section>
    <section v-else class="p-8 bg-white overflow-y-auto">Preview Mode</section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import AppButton from '../common-components/AppButton.vue';

type Article = {
  category?: string;
  title?: string;
  image?: File;
  body?: string;
  views: string;
  likes: string;
};

type Category = {
  value: string;
  label: string;
};

type DisplayMode = 'edit' | 'preview';

const displayMode = ref<DisplayMode>('edit');
const updateDisplayMode = () => {
  if (displayMode.value === 'edit') {
    displayMode.value = 'preview';
  } else {
    displayMode.value = 'edit';
  }
};

const article = reactive<Article>({
  category: '',
  title: undefined,
  image: undefined,
  body: undefined,
  views: '很多!',
  likes: '也很多!',
});

const categories = ref<Array<Category>>([
  {
    value: '',
    label: '分類*',
  },
  {
    value: '聊天',
    label: '聊天',
  },
  {
    value: '動物',
    label: '動物',
  },
  {
    value: '食物',
    label: '食物',
  },
  {
    value: '旅遊',
    label: '旅遊',
  },
]);

onBeforeRouteLeave(() => {
  if (article.category || article.title || article.image || article.body) {
    return confirm('資料尚未儲存，是否離開此頁面？') ? true : false;
  }
});

const isInputImgActive = ref(false);
const image = ref<File>();
const imgInputRef = ref<HTMLInputElement>();
const previewImage = ref();
const handleInputClick = () => {
  if (imgInputRef.value) {
    imgInputRef.value.click();
  }
};
const handleChange = (e: Event) => {
  if (!e.target) return;
  const images = (e.target as HTMLInputElement).files;
  if (images) {
    var reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target?.result;
    };
    image.value = images[0];
    reader.readAsDataURL(images[0]);
    article.image = image.value;
  }
};

const onDrop = (e: DragEvent) => {
  const images = e.dataTransfer?.files;
  if (images) {
    var reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target?.result;
    };
    image.value = images[0];
    reader.readAsDataURL(images[0]);
    article.image = image.value;
  }
  setInputImgInactive();
};

const setInputImgActive = () => {
  isInputImgActive.value = true;
};
const setInputImgInactive = () => {
  isInputImgActive.value = false;
};
</script>
