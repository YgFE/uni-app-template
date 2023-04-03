import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'

import App from './App'

Vue.use(VueCompositionAPI)

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
App.store = store

const app = new Vue(App)
app.$mount()
