import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'

Vue.config.productionTip = false

var router = createRouter();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
