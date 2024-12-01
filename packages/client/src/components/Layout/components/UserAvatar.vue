<script setup>
import { Document, QuestionFilled, SwitchButton, Tools, UserFilled } from '@element-plus/icons-vue'
import { ElDropdownItem } from 'element-plus'
</script>

<template>
  <el-dropdown trigger="click">
    <el-avatar
      cursor-pointer
      :size="30"
      :icon="UserFilled"
    />
    <template #dropdown>
      <div
        px="16"
        pt="10"
        flex
        items-center
      >
        <el-avatar
          :size="32"
          :icon="UserFilled"
        />
        <div
          flex="~ col"
          ml="10"
        >
          <div
            flex
            items-center
          >
            <div>Hev</div>
            <el-tag
              size="small"
              ml="10"
            >
              Pro
            </el-tag>
          </div>
          <div text="10 #65758b">
            xiaofuyesnew@hotmail.com
          </div>
        </div>
      </div>
      <el-dropdown-menu>
        <ElDropdownItem
          :icon="Document"
          :divided="true"
        >
          文档
        </ElDropdownItem>
        <ElDropdownItem>
          <div
            flex
            items-center
          >
            <i i-bxl:github />GitHub
          </div>
        </ElDropdownItem>
        <ElDropdownItem :icon="QuestionFilled">
          问题 & 帮助
        </ElDropdownItem>
        <ElDropdownItem
          :icon="UserFilled"
          :divided="true"
        >
          <router-view to="/profile">
            个人资料
          </router-view>
        </ElDropdownItem>
        <ElDropdownItem :icon="Tools">
          系统设置
        </ElDropdownItem>
        <ElDropdownItem
          :icon="SwitchButton"
          :divided="true"
        >
          退出登录
        </ElDropdownItem>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
