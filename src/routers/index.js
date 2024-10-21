import { createWebHistory, createRouter } from 'vue-router'
import { staticRoutes, errorRoutes } from './constant'

const routes = [...staticRoutes, ...errorRoutes]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export const setupRouter = (app) => {
    app.use(router)
}

export default router
