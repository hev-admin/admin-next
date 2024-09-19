<script setup>
import { useStorage } from '@vueuse/core'
import { CircleCheck, Lock, User } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import loginPicture from '@/assets/images/login.svg'
import { useAuthStore } from '@/store'
import { getStorage, setStorage, throttle } from '@/utils'
import { login } from '@/api'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const title = import.meta.env.VITE_TITLE

const username = ref('admin')

const password = ref('123456')

const captcha = ref('')

const showPassword = ref(false)

const isRemember = useStorage('isRemember', true)

const year = dayjs().year()

const captchaImg = ref('')

const refreshCaptcha = throttle(() => {
  captchaImg.value = `/api/auth/captcha?${dayjs().valueOf()}`
}, 500)

refreshCaptcha()

const loginInfo = getStorage('loginInfo')

if (loginInfo) {
  username.value = loginInfo.username
  password.value = loginInfo.password
}

const loading = ref(false)

async function handleLogin() {
  if (!username.value || !password.value) {
    return ElMessage.warning('请输入用户名和密码')
  }

  if (!captcha.value) {
    return ElMessage.warning('请输入验证码')
  }

  try {
    loading.value = true
    const { data } = await login({
      username: username.value,
      password: password.value,
      captcha: captcha.value,
    })
    if (isRemember.value) {
      setStorage('loginInfo', {
        username: username.value,
        password: password.value,
      })
    }
    console.log(data)
    ElMessage.success('登录成功')
    loading.value = false
    authStore.setToken(data)
    setStorage('accessToken', { accessToken: data.accessToken })
    console.log(route.query.redirect)
    router.replace(route.query.redirect || '/')
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div
    v-loading="loading" w-full h-full flex relative items-center justify-center bg-gradient-to-br from="[#667eea]"
    to="[#764ba2]"
  >
    <el-card w-720>
      <div w-full h-full flex items-center>
        <div h-full flex="~ 1" justify-center items-center py-80>
          <img w="3/4" :src="loginPicture" alt="login picture">
        </div>
        <div flex="~ col 1" items-center>
          <div w-full flex items-center justify-center>
            <main-logo size="48" />
            <div ml-10 font="700" whitespace="nowrap" text="#64aaff 24">
              {{ title }}
            </div>
          </div>
          <div h-300 px-40 pt-20 flex="~ col" justify-between>
            <el-input v-model="username" type="text" :prefix-icon="User" size="large" placeholder="请输入用户名" />
            <el-input
              v-model="password" type="password" :prefix-icon="Lock" :show-password="showPassword" size="large"
              placeholder="请输入密码"
            >
              <template #suffix>
                <i
                  cursor-pointer :class="showPassword ? 'i-ep:view' : 'i-ep:hide'"
                  @click="showPassword = !showPassword"
                />
              </template>
            </el-input>
            <div flex items-center>
              <el-input v-model="captcha" type="text" :prefix-icon="CircleCheck" size="large" placeholder="请输入验证码" />
              <img h-38 ml-10 cursor-pointer :src="captchaImg" alt="captcha" @click="refreshCaptcha">
            </div>
            <el-checkbox v-model="isRemember">
              记住我
            </el-checkbox>
            <el-button type="primary" size="large" @click="handleLogin">
              登录
            </el-button>
          </div>
        </div>
      </div>
    </el-card>
    <div absolute bottom-20>
      Copyright © {{ year > 2024 ? `2024-${year}` : '2024' }} Allen Huang
    </div>
  </div>
</template>
