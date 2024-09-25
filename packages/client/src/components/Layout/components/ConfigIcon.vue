<script setup>
import { Tools } from '@element-plus/icons-vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<template>
  <icon-card @click="appStore.toggleSettings">
    <el-icon>
      <Tools />
    </el-icon>
  </icon-card>
</template>
