import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname('./')

const allowedHosts = ['.dev.e-xode.net', ...(process.env.VITE_ALLOWED_HOSTS ?? '')
    .split(',').map(host => host.trim()).filter(Boolean)]

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
        port: process.env.NODE_PORT,
        allowedHosts
    }
})
