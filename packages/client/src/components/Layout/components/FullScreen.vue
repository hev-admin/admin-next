<script setup>
import { useFullscreen } from '@vueuse/core'
import { FullScreen } from '@element-plus/icons-vue'
import IconCard from '@/components/global/IconCard.vue'

const { toggle } = useFullscreen()
</script>

<template>
  <IconCard @click="toggle">
    <el-icon>
      <FullScreen />
    </el-icon>
  </IconCard>
</template>
