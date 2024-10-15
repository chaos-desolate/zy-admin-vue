import antd from 'ant-design-vue'
import { setupRouter } from '@/routers'
import { setupStore } from '@/store'
import 'ant-design-vue/dist/reset.css'
import '@/styles/index.less'

export const setupCores = (app) => {
    app.use(antd)
    setupStore(app)
    setupRouter(app)
}
