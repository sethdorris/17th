import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'
import config from './firebase.config.js'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(config);
var router = createRouter();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
