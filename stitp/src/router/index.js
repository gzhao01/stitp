import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myHome',
      name: 'MyHome',
      component: () => import('@/pages/myHome/MyHome.vue'),
      children: [
        {
          path: '/myHome/pInfo',
          name: "pInfo",
          component: () => import('@/pages/myHome/components/asideComponents/PInfo.vue')
        },
        {
          path: '/myHome/myCourse',
          name: "myCourse",
          component: () => import('@/pages/myHome/components/asideComponents/myCourse/MyCourse.vue')
        },
        {
          path: '/myHome/myGroup',
          name: "我的小组",
          component: () => import('@/pages/myHome/components/asideComponents/myGroup/MyGroup.vue')          
        },
        {
          path: '/myHome/msg',
          name: "消息",
          component: () => import('@/pages/myHome/components/asideComponents/msg/Msg.vue')
        },
        {
          path: '/myHome/notice',
          name: "通知",
          component: () => import('@/pages/myHome/components/asideComponents/Notice.vue')
        },
        {
          path: '/myHome/table',
          name: "课表",
          component: () => import('@/pages/myHome/components/asideComponents/Table.vue')
        },
        {
          path: '/myHome/setting',
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
    {
      path: '/courseDetail',
      name: 'CourseDetail',
      component: () => import('@/pages/myCourse/MyCourse.vue'),
      children: [
        {
          path: '/courseDetail/materials',
          name: "个人信息",
          component: () => import('@/pages/myCourse/components/asideComponents/Materials.vue')
        },
        {
          path: '/courseDetail/points',
          name: "我的课程",
          component: () => import('@/pages/myCourse/components/asideComponents/Points.vue')
        },
        {
          path: '/courseDetail/members',
          name: "我的小组",
          component: () => import('@/pages/myCourse/components/asideComponents/Members.vue')
        },
        {
          path: '/courseDetail/schedule',
          name: "消息",
          component: () => import('@/pages/myCourse/components/asideComponents/Schedule.vue')
        },
        {
          path: '/courseDetail/takeOff',
          name: "通知",
          component: () => import('@/pages/myCourse/components/asideComponents/TakeOff.vue')
        },
        {
          path: '/courseDetail/homeWork',
          name: "课表",
          component: () => import('@/pages/myCourse/components/asideComponents/HomeWork.vue')
        }
      ]
    }
  ]
})
