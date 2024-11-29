<script setup>
// import { ElScrollbar } from 'element-plus'
import AppHeader from '../components/AppHeader.vue'
import SideBar from '../components/SideBar.vue'
import AppTab from '../components/AppTab.vue'
import { useAppStore } from '@/store'

defineOptions({
  name: 'DefaultLayout',
})

const appStore = useAppStore()
</script>

<template>
  <div w="full" h="full" flex>
    <aside
      :w="appStore.menuHide ? '0' : (appStore.menuCollapsed ? '64' : '220')" transition="width 300"
      :border-r="appStore.menuHide ? '' : '1 solid light-800 dark:gray-800'" flex="~ col"
      :overflow="appStore.menuHide ? 'hidden' : 'visible'"
    >
      <SideBar />
    </aside>
    <div flex="~ col 1">
      <AppHeader />
      <AppTab />
      <slot />
    </div>
  </div>
</template>
