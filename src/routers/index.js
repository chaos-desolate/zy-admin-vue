import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/views/login/index.vue'
import AboutView from '@/views/about/index.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/error/404.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
