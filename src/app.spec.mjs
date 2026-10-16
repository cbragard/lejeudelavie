import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import vui from '@e-xode/vui'
import App from '@/app.vue'
import messages from '@/messages.json'

describe('app', () => {
    it('mounts with i18n and the vui library and renders the layout', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [createI18n({ legacy: false, locale: 'en', messages }), vui]
            }
        })
        await flushPromises()
        await vi.waitFor(() => expect(wrapper.html().length).toBeGreaterThan(100), { timeout: 4000 })
        expect(wrapper.find('.layout-default').exists()).toBe(true)
        wrapper.unmount()
    })
})
