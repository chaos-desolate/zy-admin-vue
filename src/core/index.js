import antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '@/styles/index.less'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission.js'

export const setupCores = (app) => {
    app.use(antd)
    setupStore(app)
    setupRouter(app)
}
