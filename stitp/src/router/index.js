import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/pages/login/Login.vue')
    },
    {
      path: '/register',
      name: "Register",
      component: () => import('@/pages/register/Register.vue') 
    },
    {
      path: '/',
      name: "Intro",
      component: () => import('@/pages/Intro/intro.vue')
    },
    {
      path: '/courseDetail',
      name: 'CourseDetail',
      component: () => import('@/pages/myCourse/MyCourse.vue'),
      children: [
        {
          path: '/courseDetail/materials',
          name: "课程材料",
          component: () => import('@/pages/myCourse/components/asideComponents/materials/Materials.vue')
        },
        {
          path: '/courseDetail/points',
          name: "分数",
          component: () => import('@/pages/myCourse/components/asideComponents/points/Points.vue')
        },
        {
          path: '/courseDetail/members',
          name: "成员",
          component: () => import('@/pages/myCourse/components/asideComponents/Members.vue')
        },
        {
          path: '/courseDetail/schedule',
          name: "课程计划",
          component: () => import('@/pages/myCourse/components/asideComponents/schedule/Schedule.vue')
        },
        {
          path: '/courseDetail/takeOff',
          name: "作业",
          component: () => import('@/pages/myCourse/components/asideComponents/TakeOff.vue')
        },
        {
          path: '/courseDetail/homeWork',
          name: "请假",
          component: () => import('@/pages/myCourse/components/asideComponents/HomeWork.vue')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
