<script setup>
import { useAppStore } from '@/store'
import { locales } from '@/settings'

const appStore = useAppStore()
</script>

<template>
  <el-dropdown trigger="click">
    <icon-card>
      <i i-ion:language />
    </icon-card>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, index) in locales" :key="index" @click="appStore.setLocale(item.key)">
          <span :class="{ current: appStore.localeKey === item.key }">{{ item.text }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.current {
  color: var(--el-color-primary);
}
</style>
