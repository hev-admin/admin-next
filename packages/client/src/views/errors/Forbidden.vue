<script setup>
import forbidden from '@/assets/images/forbidden.svg'
</script>

<template>
  <div w-full h-full flex="~ col" items-center pt-80>
    <img w-240 :src="forbidden" alt="403">
    <div text="28" font-bold pt-30 pb-60>
      禁止访问 请联系管理员
    </div>
    <RouterLink to="/" :replace="true">
      <ElButton type="primary" plain>
        返回首页
      </ElButton>
    </RouterLink>
  </div>
</template>
