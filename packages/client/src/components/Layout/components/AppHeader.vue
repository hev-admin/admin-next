<script setup>
import UserAvatar from './UserAvatar.vue'
import FullScreen from './FullScreen.vue'
import DarkMode from './DarkMode.vue'
import LocaleIcon from './LocaleIcon.vue'
import ConfigIcon from './ConfigIcon.vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
</script>

<template>
  <div w="full" h="50" px="12" flex items="center" justify="between" border-b="1px solid light-800 dark:gray-800">
    <div h-full flex items-center>
      <icon-card @click="appStore.toggleMenuHide">
        <i text="18" i-ep:menu />
      </icon-card>
      <!-- TODO: breadcrumbs -->
    </div>
    <div h-full flex items-center>
      <DarkMode mr="10" />
      <FullScreen mr="10" />
      <LocaleIcon mr="10" />
      <ConfigIcon mr="10" />
      <UserAvatar />
    </div>
  </div>
</template>
