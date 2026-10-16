import { dirname, resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname('./')

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue()
    ],
    test: {
        environment: 'jsdom',
        include: ['src/**/*.spec.mjs'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{mjs,vue}']
        }
    }
})
