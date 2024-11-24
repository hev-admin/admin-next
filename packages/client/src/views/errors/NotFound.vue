<script setup>
import notFound from '@/assets/images/not_found.svg'
</script>

<template>
  <div flex="~ col" h-full w-full items-center pt-80>
    <img w-240 :src="notFound" alt="404">
    <div text="28" pb-60 pt-30 font-bold>
      您访问的页面不存在
    </div>
    <RouterLink to="/" :replace="true">
      <ElButton type="primary" plain>
        返回首页
      </ElButton>
    </RouterLink>
  </div>
</template>
