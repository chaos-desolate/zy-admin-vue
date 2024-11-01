export default (viteEnv) => {
    return {
        host: '0.0.0.0',
        port: viteEnv.VITE_PORT,
        open: viteEnv.VITE_OPEN.toLowerCase() === 'true',
        proxy: {
            '/api_mock': {
                target: 'https://easy.lmzy-yy.com/mock/67174e4069d629001d63492f/zy',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api_mock/, ''),
            },
        },
    }
}
