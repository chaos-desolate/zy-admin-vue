import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

/**
 * vite插件
 */
export default () => {
    return [vue(), vueSetupExtend(), vueJsx()]
}
