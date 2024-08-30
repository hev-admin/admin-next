export const basicRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录页',
      layout: 'empty',
    },
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'NotFound',
    path: '/404',
    component: () => import('@/views/errors/NotFound.vue'),
    meta: {
      title: '页面飞走了',
      // layout: 'empty',
    },
  },
  {
    name: 'Forbidden',
    path: '/403',
    component: () => import('@/views/errors/Forbidden.vue'),
    meta: {
      title: '没有权限',
      // layout: 'empty',
    },
  },
]
