<script setup>
defineProps({
  size: {
    type: Number,
    default: 26,
  },
})
</script>

<template>
  <div
    hover:bg="gray-300 dark:gray-800"
    flex
    cursor-pointer
    items-center
    justify-center
    rounded-4
    transition-all-300
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <slot />
  </div>
</template>
