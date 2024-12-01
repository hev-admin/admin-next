<script setup>
import { useAppStore } from '@/store'
// import { isExternal } from '@/utils'

// const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
// const permissionStore = usePermissionStore()

// const activeKey = computed(() => route.meta?.parentKey || route.name)

// const menu = ref(null)

watch(route, async () => {
  await nextTick
})

// function handleSelect(key, item) {
//   if (isExternal(item.path)) {
//     window.open(item.path, '_blank')
//   }
//   else {
//     router.push(item.path)
//   }
// }
</script>

<template>
  <div h="[calc(100vh-100px)]">
    <el-scrollbar
      h-full
      w-full
    >
      <el-menu
        :collapse="appStore.menuCollapsed"
      />
    </el-scrollbar>
  </div>
</template>
