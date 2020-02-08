import Vue from 'vue'
import Router from 'vue-router'
import PersonalInfo from '@/pages/personalInfo/PersonalInfo.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    }
  ]
})
