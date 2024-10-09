import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'

/**
 * vite插件
 */
export default (viteEnv) => {
    const { VITE_GLOBAL_TITLE } = viteEnv
    return [
        vue(),
        vueJsx(),
        vueSetupExtend(),
        eslintPlugin(),
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    title: VITE_GLOBAL_TITLE,
                },
            },
        }),
    ]
}
