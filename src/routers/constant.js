// import HomeView from '@/views/login/index.vue'
// import AboutView from '@/views/about/index.vue'
import HomeView from '@/views/home/index.vue'
/**
 * @静态路由
 */
export const staticRoutes = [
    {
        path: '/',
        redirect: '/home/index',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/layouts/index.vue'),
        // component: () => import("@/layouts/indexAsync.vue"),
        redirect: '/home/index',
        children: [{ path: '/about', component: HomeView }],
    },
]

/**
 * @错误路由
 */
export const errorRoutes = [
    {
        path: '/403',
        name: '403',
        component: () => import('@/views/error/403.vue'),
        meta: {
            title: '403页面',
        },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
            title: '404页面',
        },
    },
    {
        path: '/500',
        name: '500',
        component: () => import('@/views/error/500.vue'),
        meta: {
            title: '500页面',
        },
    },
    // Resolve refresh page, route warnings
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error/404.vue'),
    },
]
