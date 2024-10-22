import router from '@/router'
import NProgress from '@/config/nprogress'

router.beforeEach(async () => {
    // to, from, next
    NProgress.start()
})
router.afterEach(() => {
    NProgress.done()
})
