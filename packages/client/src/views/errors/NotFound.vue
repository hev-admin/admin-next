<script setup>
import notFound from '@/assets/images/not_found.svg'
</script>

<template>
  <div w-full h-full flex="~ col" items-center pt-80>
    <img w-240 :src="notFound" alt="404">
    <div text="28" font-bold pt-30 pb-60>
      您访问的页面不存在
    </div>
    <RouterLink to="/" :replace="true">
      <ElButton type="primary" plain>
        返回首页
      </ElButton>
    </RouterLink>
  </div>
</template>
