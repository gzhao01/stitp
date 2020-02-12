import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: () => import('@/pages/myHome/MyHome.vue'),
      children: [
        {
          path: '/pInfo',
          name: "pInfo",
          component: () => import('@/pages/myHome/components/asideComponents/PInfo.vue')
        },
        {
          path: '/myCourse',
          name: "myCourse",
          component: () => import('@/pages/myHome/components/asideComponents/myCourse/MyCourse.vue')
        },
        {
          path: '/myGroup',
          name: "我的小组",
          component: () => import('@/pages/myHome/components/asideComponents/myGroup/MyGroup.vue')
        },
        {
          path: '/msg',
          name: "消息",
          component: () => import('@/pages/myHome/components/asideComponents/msg/Msg.vue')
        },
        {
          path: '/notice',
          name: "通知",
          component: () => import('@/pages/myHome/components/asideComponents/Notice.vue')
        },
        {
          path: '/table',
          name: "课表",
          component: () => import('@/pages/myHome/components/asideComponents/Table.vue')
        },
        {
          path: '/setting',
          name: "设置",
          component: () => import('@/pages/myHome/components/asideComponents/Setting.vue')
        }
      ]
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
  ]
})
