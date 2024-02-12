import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'url';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue(), eslint() ],
    resolve:{
        alias:{
            '@': fileURLToPath( new URL( './src' , import.meta.url ) )
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import '@/styles/utils/_variables.scss';
                    @import '@/styles/utils/_mixins.scss';
                `
            }
        }
    },
    server: {
        port: 3000
    }
})
