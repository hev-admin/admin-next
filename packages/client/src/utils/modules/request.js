import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { pinia, useAuthStore } from '@/store'

const SUCCESS_CODES = [0, 200]

let isConfirming = false

function resolveResError(code, message, needTip = true) {
  switch (code) {
    case 401:
      if (isConfirming || !needTip) {
        return
      }
      isConfirming = true
      ElMessageBox.confirm(
        '登录已过期，是否重新登录？',
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning',
        },
      )
        .then(() => {
          useAuthStore().logout()
          ElMessage.success('已退出登录')
          isConfirming = false
        })
        .catch(() => {
          isConfirming = false
        })
      return false
    case 11007:
    case 11008:
      if (isConfirming || !needTip) {
        return
      }
      isConfirming = true
      ElMessageBox.confirm(
        `${message}，是否重新登录？`,
        '提示',
        {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'info',
        },
      )
        .then(() => {
          useAuthStore().logout()
          ElMessage.success('已退出登录')
          isConfirming = false
        })
        .catch(() => {
          isConfirming = false
        })
      return false
    case 403:
      message = '请求被拒绝'
      break
    case 404:
      message = '请求的资源或接口不存在'
      break
    case 500:
      message = '服务器内部错误'
      break
    default:
      message = message ?? `[${code}]: 未知异常`
      break
  }

  needTip && ElMessage.error(message)

  return message
}

function reqResolve(config) {
  console.log(config)

  if (!config.needToken) {
    return config
  }

  const { accessToken } = useAuthStore(pinia)

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
}

function reqReject(error) {
  return Promise.reject(error)
}

function resResolve(response) {
  const { data, status, config, statusText, headers } = response
  if (headers['content-type']?.includes('json')) {
    console.log(data.code)
    if (SUCCESS_CODES.includes(data.code)) {
      return Promise.resolve(data)
    }

    const code = data?.code ?? status

    const needTip = config?.needTip !== false

    const message = resolveResError(code, data?.message ?? statusText, needTip)

    return Promise.reject(JSON.stringify({ code, message, error: data ?? response }))
  }

  return Promise.resolve(data ?? response)
}

async function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    const message = resolveResError(code, error.message)
    return Promise.reject(JSON.stringify({ code, message, error }))
  }

  const { data, status, config } = error.response
  const code = data?.code ?? status

  const needTip = config?.needTip !== false
  const message = resolveResError(code, data?.message ?? error.message, needTip)
  return Promise.reject(JSON.stringify({ code, message, error: error.response?.data || error.response }))
}

function setupInterceptors(service) {
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
}

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_API_BASE,
    timeout: 10000,
  }

  const service = axios.create({
    ...defaultOptions,
    ...options,
  })

  setupInterceptors(service)

  return service
}

export const request = createAxios({
  baseURL: import.meta.env.VITE_API_BASE,
})

export const mockRequest = createAxios({
  baseURL: '/api',
})
