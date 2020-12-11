import Vue from 'vue'
import App from './App.vue'

import routes from './route/routes'
import VueRouter from 'vue-router'

import SimpleVueValidation from 'simple-vue-validator'

import moment from "moment"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import axios from "axios"   // 引入axios
import VueAxios from "vue-axios"  // 引入vue的axios封装器
// 然后就可以使用vue的插件，将axios作为vue的插件，使用时--》 this.axios 即可
Vue.use(VueAxios, axios)
// axios.defaults.baseURL = '/api' // 解决跨域问题： 设置默认的url地址

Vue.use(VueRouter)

Vue.use(SimpleVueValidation)

Vue.config.productionTip = false
Vue.prototype.$validator = SimpleVueValidation.Validator

Vue.filter('diff_for_human', datetime => {
  return moment(datetime).fromNow();
})

new Vue({
  render: h => h(App),

  router: new VueRouter(routes)
}).$mount('#app')
