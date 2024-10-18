/**
 * @description pinia 持久化配置
 * @param {String} key 存储到持久化的name
 * @param {Array} paths 需要持久化的state字段 example: ['themeConfig.themeColor']
 * */
export default (key, paths) => {
    const { VITE_STORAGE_NAMESPACE } = import.meta.env
    return {
        key: `${VITE_STORAGE_NAMESPACE}${key}`,
        storage: localStorage,
        // storage: sessionStorage,
        paths,
    }
}
