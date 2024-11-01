import axios from 'axios'

const axiosConfig = {
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    // tra
}

class Request {
    constructor(config) {
        this.instance = axios.create(config)
        /**
         * 请求拦截
         */
        this.instance.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => Promise.reject(error)
        )
        /**
         * 响应拦截
         */
        this.instance.interceptors.response.use(
            (response) => {
                const { data } = response
                return data
            },
            (error) => Promise.reject(error)
        )
    }
    get(config) {
        return this.instance.get(config)
    }
    /**
     * post请求
     * extraConfig 额外配置
     */
    post(url, params, extraConfig = {}) {
        return this.instance.post(url, params, extraConfig)
    }
}

const request = {
    /**
     * ### 主 Api 接口
     */
    main: new Request(axiosConfig),
    /**
     * ### mock 接口
     */
    // easyMock: new Request({ ...axiosConfig, baseURL: import.meta.env.VITE_APP_BASE_API }),
}

export default request
