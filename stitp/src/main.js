// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/index.js'
import 'styles/font/iconfont.css'
import 'styles/reset.css'
import axios from 'axios'

/* eslint-disable no-new */
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
//跳转回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
})
