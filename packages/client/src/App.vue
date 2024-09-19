<script setup>
// import { useFullscreen } from '@vueuse/core'
import { SettingsDrawer } from '@/components'
import { useAppStore, useTabStore } from '@/store'

// TODO: multiple layouts and switch layout

const layouts = new Map()

function getLayout(name) {
  if (layouts.has(name)) {
    return layouts.get(name)
  }
  const layout = markRaw(defineAsyncComponent(() => import(`@/components/Layout/${name}/index.vue`)))
  layouts.set(name, layout)
  return layout
}

const route = useRoute()
const appStore = useAppStore()

// if (appStore.layout === 'default') {
//   appStore.setLayout('')
// }

const Layout = computed(() => {
  if (!route.matched?.length) {
    return null
  }

  return getLayout(route.meta?.layout || appStore.layout)
})

const tabStore = useTabStore()
const keepAliveNames = computed(() => {
  return tabStore.tabs.filter(item => item.keepAlive).map(item => item.name)
})
</script>

<template>
  <el-config-provider :locale="appStore.locale.component">
    <router-view v-if="Layout" v-slot="{ Component, route: curRoute }">
      <component :is="Layout">
        <keep-alive :include="keepAliveNames">
          <component :is="Component" :key="curRoute.fullPath" />
        </keep-alive>
      </component>
      <SettingsDrawer />
    </router-view>
  </el-config-provider>
</template>
