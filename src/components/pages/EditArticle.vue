<template>
  <div class="w-1/3 md:w-full md:pt-0 flex flex-col m-auto relative">
    <div
      class="w-full flex justify-start p-2 mt-4 sm:sticky sm:top-0 sm:bg-white"
    >
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
    <section
      v-if="displayMode === 'edit'"
      class="flex flex-col px-8 py-4 md:p-4 bg-white"
    >
      <form class="flex flex-col gap-y-4 input-area">
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
          class="border border-gray-300 border-dashed rounded-lg bg-gray-100 text-xs"
          :class="isInputImgActive ? 'border-4' : ''"
          @drop.prevent="onDrop"
          @dragenter.prevent="setInputImgActive"
          @dragover.prevent="setInputImgActive"
          @dragleave.prevent="setInputImgInactive"
        >
          <div v-if="!previewImage" class="flex flex-col items-center h-44">
            <img src="../../assets/Icon.png" alt="upload" class="w-14 my-6" />
            <p class="text-gray-300">拖曳圖片至此或</p>
            <AppButton
              label="上傳一張圖片"
              :icon="['fa', 'arrow-up-from-bracket']"
              class="btn-primary-light my-2"
              @click="handleInputClick"
            ></AppButton>
          </div>
          <img v-else :src="previewImage" class="w-full h-44 object-cover" />
        </div>
        <AppButton
          v-if="previewImage"
          label="更換圖片"
          :icon="['fa', 'image']"
          class="w-40 px-1 text-xs self-center btn-primary-dark"
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
          class="w-full border border-primary-200 rounded-lg p-4 overflow-y-auto grow"
          placeholder="我覺得..."
          required
        />
      </form>
      <hr class="my-4" />
      <AppButton
        label="發佈"
        :icon="['far', 'paper-plane']"
        class="w-20 px-1 text-xs self-end btn-primary-dark"
      />
    </section>
    <section v-else class="bg-white">
      <article class="flex flex-col">
        <p class="p-6 font-bold text-left text-2xl">
          {{ article.title ?? '現在沒有標題' }}
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
                <p>{{ article.category ?? '分類' }}</p>
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
            {{ article.body ?? '現在還沒有輸入內文' }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import AppButton from '../common-components/AppButton.vue';
import { useStore } from '../../vuex/Store';

type Article = {
  category?: string;
  title?: string;
  image?: File;
  body?: string;
};

type Category = {
  value?: string;
  label: string;
};

type DisplayMode = 'edit' | 'preview';

const store = useStore();

const displayMode = ref<DisplayMode>('edit');
const updateDisplayMode = () => {
  if (displayMode.value === 'edit') {
    displayMode.value = 'preview';
  } else {
    displayMode.value = 'edit';
  }
};

const article = reactive<Article>({
  category: undefined,
  title: undefined,
  image: undefined,
  body: undefined,
});

const categories = ref<Array<Category>>([
  {
    value: undefined,
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
