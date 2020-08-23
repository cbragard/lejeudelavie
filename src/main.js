import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import store from './store/store.js'
import routes from './routes.js'
import VueI18n from 'vue-i18n'
import moment from 'moment'
import messages from './messages.json'

Vue.prototype.moment = moment
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.filter("formatNumber", function (val) {
  return new Intl.NumberFormat().format(val)
})
const router = new VueRouter({
    mode: 'history',
    routes
})
const i18n = new VueI18n({
    locale: 'en',
    messages
})

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    render (r) { return r(App) }
})
