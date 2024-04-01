import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import vui from '@e-xode/vui'

import App from './app.vue'
import messages from './messages.json'

const app = createApp(App)

app.use(new createI18n({
    legacy: false,
    locale: 'en',
    messages
}))
app.use(vui)
app.mount('#app', true)
