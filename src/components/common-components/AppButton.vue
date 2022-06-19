<template>
  <button class="rounded-full px-8 py-2">
    <slot> {{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

type Props = {
  label: string;
};
const props = defineProps<Props>();
const { label } = toRefs(props);
</script>
