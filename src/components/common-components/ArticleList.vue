<template>
  <div class="flex justify-start w-full px-10 md:px-0 py-10 md:py-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  max-height: calc(100vh - 62px);
}
</style>
