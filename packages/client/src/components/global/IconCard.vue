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
    flex items-center justify-center hover:bg="gray-300 dark:gray-800" cursor-pointer rounded-4
    transition-all-300 :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <slot />
  </div>
</template>
