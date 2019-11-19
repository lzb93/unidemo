import Vue from 'vue'
import App from './App'
import tool from './store/tool';

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$tool = tool

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
