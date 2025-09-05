import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

const isVercel = process.env.VERCEL === '1'

const plugins = [
    laravel({
        input: ['resources/css/app.css', 'resources/js/app.tsx'],
        ssr: 'resources/js/ssr.tsx',
        refresh: true,
    }),
    react(),
    tailwindcss(),
]

if (!isVercel) {
    // pakai require supaya tidak di-load saat Vercel build
    const { wayfinder } = require('@laravel/vite-plugin-wayfinder')
    plugins.push(
        wayfinder({
            formVariants: true,
        })
    )
}

export default defineConfig({
    plugins,
    esbuild: {
        jsx: 'automatic',
    },
})
