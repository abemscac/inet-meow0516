<template>
  <div class="absolute h-screen w-4/5 bg-white">
    <div class="py-4">
      <button
        class="rounded-full border border-primary-500 text-primary-500 px-8 py-2.5 mr-4"
        @click="login"
      >
        登入
      </button>
      <button class="rounded-full bg-primary-500 text-white px-8 py-2.5">
        註冊
      </button>
    </div>
    <div class="flex flex-col items-start">
      <p class="font-bold text-2xl mx-6 my-2">討論板</p>
      <ul class="text-left w-full">
        <li class="mx-6 my-4">
          <button class="flex">
            <img src="../../assets/logo-I.svg" alt="inet" class="w-8 mr-4" />
            熱門文章
          </button>
        </li>
        <li class="mx-6 my-4">
          <button class="flex">
            <img src="../../assets/chat.png" alt="inet" class="w-8 mr-4" />
            聊天
          </button>
        </li>
        <li class="mx-6 my-4">
          <button class="flex">
            <img src="../../assets/animal.png" alt="inet" class="w-8 mr-4" />
            動物
          </button>
        </li>
        <li class="mx-6 my-4">
          <button class="flex">
            <img src="../../assets/food.png" alt="inet" class="w-8 mr-4" />
            食物
          </button>
        </li>
        <li class="mx-6 my-4">
          <button class="flex">
            <img src="../../assets/travel.png" alt="inet" class="w-8 mr-4" />
            旅遊
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const login = () => {};
</script>

<style scoped lang="scss">
.avatar {
  height: 40px;
}
</style>
