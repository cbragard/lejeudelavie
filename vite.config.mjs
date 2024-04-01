import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname('./')

export default defineConfig({
    publicDir: resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true
    },
    plugins: [
        vue()
    ],
    server: {
        port: 3003
    }
})
