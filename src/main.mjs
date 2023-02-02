import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './app.vue'
import messages from './messages.json'

const app = createApp(App)

app.use(new createI18n({
    locale: 'en',
    messages
}))
app.mount('#app', true)
