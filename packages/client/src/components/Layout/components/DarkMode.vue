<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const isDark = useDark()

function toggleDark() {
  appStore.toggleDark()
  useToggle(isDark)()
}
</script>

<template>
  <icon-card @click="toggleDark">
    <el-icon>
      <Sunny v-if="isDark" />
      <Moon v-else />
    </el-icon>
  </icon-card>
</template>
