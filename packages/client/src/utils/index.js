export * from './modules'

// 节流函数
export function throttle(func, wait) {
  let timeout = null
  return function (...args) {
    const context = this
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
