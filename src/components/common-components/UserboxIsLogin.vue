<template>
  <div class="sm:flex hidden">
    <div class="flex">
      <button class="w-9 h-9" @click="showUserboxMenu">
        <img
          src="../../assets/default-avatar_1.png"
          alt="avatar"
          class="avatar"
        />
      </button>
      <div
        v-show="sidebarVisible ? false : store.state.userboxModule.menuVisible"
        class="z-10 absolute px-2 py-2 right-7 top-14 border border-primary-100 bg-white"
        @click="closeUserboxMenu"
      >
        <ul class="flex flex-col items-start">
          <li class="py-1">
            <button>
              <button>
                <font-awesome-icon
                  :icon="['far', 'pen-to-square']"
                  class="w-4 inline-block mx-2"
                />
                <span>發表文章</span>
              </button>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon
                :icon="['far', 'user']"
                class="w-4 inline-block mx-2"
              />
              <span>個人頁面</span>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon
                :icon="['far', 'bookmark']"
                class="w-4 inline-block mx-2"
              />
              <span>我的收藏</span>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon
                :icon="['far', 'clock']"
                class="w-4 inline-block mx-2"
              />
              <span>瀏覽紀錄</span>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon icon="gear" class="w-4 inline-block mx-2" />
              <span>帳號設定</span>
            </button>
          </li>
          <li class="py-1">
            <button @click="logout">
              <font-awesome-icon
                icon="arrow-right-from-bracket"
                class="w-4 inline-block mx-2"
              />
              <span>登出</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="sm:hidden">
    <div class="flex">
      <button class="mr-4">
        <font-awesome-icon
          :icon="['far', 'pen-to-square']"
          class="h-5 inline-block text-primary-500"
        />
      </button>
      <button @click="showUserboxMenu">
        <img
          src="../../assets/default-avatar_1.png"
          alt="avatar"
          class="avatar"
        />
      </button>
      <div
        v-show="sidebarVisible ? false : store.state.userboxModule.menuVisible"
        class="z-10 absolute top-14 border border-primary-100 bg-white"
        @click="closeUserboxMenu"
      >
        <ul class="flex flex-col items-start px-2.5 py-1">
          <li class="py-1">
            <button>
              <button>
                <font-awesome-icon
                  :icon="['far', 'user']"
                  class="w-4 inline-block mx-2"
                />
                <span>個人頁面</span>
              </button>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon
                :icon="['far', 'bookmark']"
                class="w-4 inline-block mx-2"
              />
              <span>我的收藏</span>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon
                :icon="['far', 'clock']"
                class="w-4 inline-block mx-2"
              />
              <span>瀏覽紀錄</span>
            </button>
          </li>
          <li class="py-1">
            <button>
              <font-awesome-icon icon="gear" class="w-4 inline-block mx-2" />
              <span>帳號設定</span>
            </button>
          </li>
          <li class="py-1">
            <button @click="logout">
              <font-awesome-icon
                icon="arrow-right-from-bracket"
                class="w-4 inline-block mx-2"
              />
              <span>登出</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { /* ref,  */ computed } from 'vue';
import { useStore } from 'vuex';

type Emits = {
  (e: 'logout', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();
const store = useStore();

const logout = (e: MouseEvent) => {
  emit('logout', e);
};
const sidebarVisible = computed(() => store.state.sidebarModule.visible);
const showUserboxMenu = () => {
  store.dispatch('userboxModule/toggle');
};
const closeUserboxMenu = () => {
  store.dispatch('userboxModule/close');
};
</script>

<style>
.avatar {
  height: 40px;
}
</style>
