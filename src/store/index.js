import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 持久化
pinia.use(piniaPersistedstate)

export const setupStore = (app) => {
    app.use(pinia)
}

export default pinia
