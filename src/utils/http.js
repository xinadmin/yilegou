/**
 * axios 网络请求封装
 */
import axios from 'axios'
import Vue from 'vue'
import router from '../router'
import url from '../conf/http_conf'
import store from '../store'
import qs from 'qs'

const port = '';
const http_url = url + (port == '' ? '' : (':' + port)) + '/'


const instance = axios.create();


instance.defaults.baseURL = http_url;

const isFormData = (v) => {
    return Object.prototype.toString.call(v) === '[object FormData]';
}

/**
 *axios 全局 拦截器
 */
instance.interceptors.response.use(function(response) {
    //这里统一处理服务器code

    const Code = response.data.code;

    if (Code === undefined) {
        return response.data;
    }

    if (Code.toString().length === 3) {
        if (Code === 200) {
            return response.data.data;
        } else if (Code == 501) {
            console.error('后台服务出错');
            return Promise.reject(response.data);
        }
    } else if (Code.toString().length === 5) {
        //自定义错误码
        if (Code === 25030) {

            Vue.prototype.$token = localStorage.token = '';

            store.commit('setToken', '');
            store.commit('setLoginStatus', false);

            // if (needAuth) {
            //     //判断该页面是否需要登录状态
            //     console.error('登录过期了');
            //     router.push({
            //         path: '/Login'
            //     });
            // }
            return Promise.reject(response.data);
        }
        // console.error('[' + Code + ']' + response.data.message);
        return Promise.reject(response.data);
    }

}, function(error) {
    console.error('网络出错了!');
    return Promise.reject(error.response.data);
});

/**
 * Request
 * @param {String} url
 * @param {Object} options request参数
 * @param {Boolean} tokenFlag 是否置入token,默认为true
 */
export const request = (url, options = {}, tokenFlag = true) => {
    if (tokenFlag) {
        //置入token
        options.headers = {
            'token': Vue.prototype.$token
        }
    }
    options = {
        url,
        ...options
    }
    return instance.request(options);
}

/**
 * POST
 * @param {String} url
 * @param {Object} data data参数
 * @param {Boolean} tokenFlag 是否置入token,默认为true
 */
export const POST = (url, data = {}, tokenFlag = true) => {
    const options = {};
    if (tokenFlag) {
        //置入token
        options.headers = {
            'token': Vue.prototype.$token,
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json',
            "requestType": '1'
        }
    }
    // if (!isFormData(data)) data = qs.stringify(data);
    return instance.post(url, data, options);
}

/**
 * GET
 * @param {String} url
 * @param {Object} data data参数
 * @param {Boolean} tokenFlag 是否置入token,默认为true
 */
export const GET = (url, options = {}, tokenFlag = true) => {
    if (tokenFlag) {
        //置入token
        options.headers = {
            'token': Vue.prototype.$token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return instance.get(url, options);
}


/**
 * PUT
 * @param {String} url
 * @param {Object} data data参数
 * @param {Boolean} tokenFlag 是否置入token,默认为true
 */
export const PUT = (url, params = {}, tokenFlag = true) => {
    const options = {};
    if (tokenFlag) {
        //置入token
        options.headers = {
            'token': Vue.prototype.$token
        }
    }
    return instance.put(url, params, options);
}


/**
 * DELETE
 * @param {String} url
 * @param {Object} data data参数
 * @param {Boolean} tokenFlag 是否置入token,默认为true
 */
export const DELETE = (url, params = {}, tokenFlag = true) => {
    const options = {
        data: params
    };
    if (tokenFlag) {
        //置入token
        options.headers = {
            'token': Vue.prototype.$token
        }
    }
    return instance.delete(url, options);
}

export default request