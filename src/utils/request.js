import axios from 'axios'

const axiosConfig = {
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    transformRequest: [
        function (data) {
            data.userName = 'test'
            console.log('transformRequest', data)
            return JSON.stringify(data)
        },
    ],
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
    /**
     * Get
     */
    get(url, params, extraConfig = {}) {
        return this.instance.get(url, { params, ...extraConfig })
    }
    /**
     * Post
     */
    post(url, params, extraConfig = {}) {
        return this.instance.post(url, params, extraConfig)
    }
    /**
     * Put
     */
    put(url, params, extraConfig = {}) {
        return this.instance.put(url, params, extraConfig)
    }
    /**
     * Delete
     */
    delete(url, params, extraConfig = {}) {
        return this.instance.delete(url, { params, ...extraConfig })
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
