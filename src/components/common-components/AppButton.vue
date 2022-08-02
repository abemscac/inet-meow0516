<template>
  <button class="rounded-full px-8 py-2">
    <slot>
      <font-awesome-icon v-if="icon?.length" :icon="icon" />
      {{ label }}</slot
    >
  </button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

type Props = {
  label: string;
  icon?: Array<string>;
};
const props = defineProps<Props>();
const { label, icon } = toRefs(props);
</script>
