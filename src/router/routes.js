export default [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "login" */ '../components/login')
  },
  {
    path: '/app',
    name: 'app',
    meta: { title: '分销管理' },
    component: () => import(/* webpackChunkName: "application" */ '../components/app')
  },
]
