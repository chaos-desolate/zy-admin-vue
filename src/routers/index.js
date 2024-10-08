import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/views/login/index.vue'
import AboutView from '@/views/about/index.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
