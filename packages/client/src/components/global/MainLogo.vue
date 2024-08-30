<script setup>
import logo from '@/assets/logo.svg'

defineProps({
  size: {
    type: String,
    default: () => '32',
  },
})
</script>

<template>
  <div :style="{ width: `${size}px`, height: `${size}px` }">
    <img w="full" h="full" :src="logo" alt="Logo">
  </div>
</template>
