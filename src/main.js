import Vue from 'vue'
import App from './App.vue'

import SimpleVueValidation from 'simple-vue-validator'


// 表单验证 不好用
// import VeeValidate from 'vee-validate'
// import zh_CN from 'vee-validate/dist/locale/zh_CN'
// import VueI18n from 'vue-i18n'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import axios from "axios"   // 引入axios
import VueAxios from "vue-axios"  // 引入vue的axios封装器
// 然后就可以使用vue的插件，将axios作为vue的插件，使用时--》 this.axios 即可
Vue.use(VueAxios, axios)
// axios.defaults.baseURL = '/api' // 解决跨域问题： 设置默认的url地址

// 自定义的错误处理类
// import utils from "@/utils"

// // 启用国际化插件
// Vue.use(VueI18n)

// // 配置表单验证
// const i18n = new VueI18n({
//   locale: 'zh_CN',
// })
// Vue.use(VeeValidate, {
//   i18n,
//   i18nRootKey: 'validation',
//   dictionary: {
//     zh_CN
//   }
// })

Vue.use(SimpleVueValidation)

Vue.config.productionTip = false
Vue.prototype.$validator = SimpleVueValidation.Validator

new Vue({
  render: h => h(App),
}).$mount('#app')
