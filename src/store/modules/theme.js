import { defineStore } from 'pinia'
import persistedConfig from '../persistedConfig.js'
import { theme } from 'ant-design-vue'

/**
 * ant-design-vue 主题配置
 * https://www.antdv.com/docs/vue/customize-theme-cn
 */
const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        theme: {
            algorithm: theme.defaultAlgorithm,
            token: {
                colorPrimary: '#52c41a',
            },
        },
    }),
    getters: {},
    actions: {
        setTheme(key, value) {
            this.theme[key] = value
        },
        setThemeToken(key, value) {
            this.theme.token[key] = value
        },
    },
    persist: persistedConfig('theme'),
})

export default useThemeStore
