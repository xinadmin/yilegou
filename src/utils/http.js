import axios from 'axios' // 引用axios
import Qs from 'qs' //引入数据格式化
// import router from '@/router'

// axios 配置
axios.defaults.timeout = 50000 //设置接口响应时间
axios.defaults.baseURL = 'http://localhost' // 这是调用数据接口,公共接口url+调用接口名

axios.interceptors.request.use(
    config => {
        console.log('请求路径', config.url)
        config.token="ahsdkhagshgfgfhdfd845645"
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded' // 设置跨域头部
            }
            config.data = JSON.stringify(config.data)
            return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error.response.data)
    }
)

export default axios

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                // console.log(response.data.code)
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}
