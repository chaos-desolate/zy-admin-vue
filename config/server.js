export default (viteEnv) => {
    return {
        host: '0.0.0.0',
        port: viteEnv.VITE_PORT,
        open: viteEnv.VITE_OPEN.toLowerCase() === 'true',
        proxy: {},
    }
}
