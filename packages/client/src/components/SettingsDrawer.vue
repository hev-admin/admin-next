<script setup>
import { Refresh } from '@element-plus/icons-vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const cateIndex = ref(0)
</script>

<template>
  <el-drawer v-model="appStore.settingsShow" :size="400">
    <template #header>
      <div w-full flex items-center justify-between pr-10>
        <div>偏好设置</div>
        <icon-card title="重置偏好设置">
          <el-icon>
            <Refresh />
          </el-icon>
        </icon-card>
      </div>
    </template>
    <el-scrollbar h-full>
      <div class="wrapper">
        <el-radio-group v-model="cateIndex" w-full>
          <el-radio-button label="主题" :value="0" />
          <el-radio-button label="布局" :value="1" />
          <el-radio-button label="通用" :value="2" />
        </el-radio-group>
        <!-- TODO: config details -->
        <div v-if="cateIndex === 0" w-full>
          主题
        </div>
        <div v-if="cateIndex === 1" w-full>
          布局
        </div>
        <div v-if="cateIndex === 2" w-full>
          通用
        </div>
      </div>
    </el-scrollbar>
  </el-drawer>
</template>

<style lang="scss" scoped>
:global(.el-drawer__header) {
  margin-bottom: 0;
}

:global(.el-drawer__body) {
  padding: 0;
}

:deep(.el-radio-button) {
  width: calc(100% / 3);
}

:deep(.el-radio-button__inner) {
  width: 100%;
}

.wrapper {
  padding: var(--el-drawer-padding-primary);
}
</style>
