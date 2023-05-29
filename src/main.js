import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/stylus/general.styl'

// plugins
import './plugins/axios'
import './plugins/elementUI'
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/echarts.js'

// productionTip
Vue.config.productionTip = false

// instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
