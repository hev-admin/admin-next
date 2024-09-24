<script setup>
</script>

<template>
  <el-scrollbar h-full>
    <div p-12>
      <el-row pb-12 :gutter="10">
        <el-col :span="8">
          <el-card h-full />
        </el-col>
        <el-col :span="16">
          <el-card>
            <template #header>
              <div flex items-center justify-between>
                ✨ 欢迎使用 Hev Admin
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
      <el-row pb-12 :gutter="10">
        <el-col :span="12">
          <el-card>
            <template #header>
              <div flex items-center justify-between>
                <div flex items-center>
                  🏗️ 特性
                </div>
                <!-- <el-tag></el-tag> -->
              </div>
            </template>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card h-full>
            <template #header>
              <div flex items-center justify-between>
                <div flex items-center>
                  💻 技术栈
                </div>
                <!-- <el-tag></el-tag> -->
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="24">
          <el-card>
            <template #header>
              <div flex items-center>
                📈 趋势
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-scrollbar>
</template>
