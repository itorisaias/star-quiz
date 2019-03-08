import Vue from 'vue'

import './utils/plugins'
import './utils/filters'

import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

const store = createStore()
const router = createRouter()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
