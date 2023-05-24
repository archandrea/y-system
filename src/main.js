import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/common.css'

// plugins
import './plugins/axios'
import './plugins/elementUI'
import 'element-ui/lib/theme-chalk/index.css';

// productionTip
Vue.config.productionTip = false

// instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
