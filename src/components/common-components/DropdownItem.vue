<template>
  <li class="py-1">
    <button>
      <font-awesome-icon :icon="icon" class="w-4 mx-2" />
      <span>{{ label }}</span>
    </button>
  </li>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

type Props = {
  icon: string | Array<string>;
  label?: string;
};
const props = defineProps<Props>();
const { icon, label } = toRefs(props);
</script>
