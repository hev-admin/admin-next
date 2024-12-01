<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<template>
  <div
    h="50"
    px="20"
    flex
    items-center
    justify-between
  >
    <icon-card
      :size="24"
      :title="`侧边栏${appStore.menuCollapsed ? '展开' : '收起'}`"
      @click="appStore.toggleMenuCollapsed"
    >
      <i
        v-if="appStore.menuCollapsed"
        i-ep:expand
      />
      <i
        v-else
        i-ep:fold
      />
    </icon-card>
  </div>
</template>
