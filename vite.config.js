import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createVitePlugins from './config/plugins'
import createServer from './config/server'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const root = process.cwd()
    const env = loadEnv(mode, root, '')
    return {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        hack: `
                        true;
                        @import '${resolve(__dirname, 'src/styles/variables.less')}';
                        @import '${resolve(__dirname, 'src/styles/mixins/index.less')}';
                     `,
                    },
                    javascriptEnabled: true,
                },
            },
            devSourcemap: true,
        },
        plugins: createVitePlugins(env),
        server: createServer(env),
    }
})
