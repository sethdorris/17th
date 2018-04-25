import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'
import store from './store.js'

Vue.config.productionTip = false

var router = createRouter();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
