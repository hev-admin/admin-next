<script setup>
import { useAppStore } from '@/store'

const title = import.meta.env.VITE_TITLE
const appStore = useAppStore()
</script>

<template>
  <router-link h="50" flex items="center" justify="center" border-b="1px solid light-800 dark:gray-800" to="/">
    <main-logo size="24" />
    <div
      v-show="!appStore.menuCollapsed"
      ml="10"
      font="700"
      whitespace="nowrap"
      text="#64aaff 24"
    >
      {{ title }}
    </div>
  </router-link>
</template>
