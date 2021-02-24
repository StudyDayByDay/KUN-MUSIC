import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*------------------引入样式区域------------------*/

//阿里图标库-基础库（统一类名：jtIcon）
import './assets/icons/KUNicons/iconfont.css';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
