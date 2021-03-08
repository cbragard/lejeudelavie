import moment from 'moment'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'

import App from './app.vue'
import routes from './routes'
import messages from './messages.json'
import store from './store/store'

const history = createWebHistory()
const router = createRouter({
  history,
  routes,
})
const i18n = new createI18n({
    locale: 'en',
    messages
})
const app = createApp(App)

app.config.globalProperties.moment = moment

app.use(router)
app.use(store)
app.use(i18n)
router
    .isReady()
    .then(() => {
        app.mount('#app', true)
    })
