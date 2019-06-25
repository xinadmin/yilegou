import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 商品详情
 */



class logincontrollers {

    /**
     * 临时标识token
     */
    getMobileToken() {
        return POST(`/api/getMobileToken.shtml`).then(res => res)
    }

    /**
     * 获取短信验证码
     */
    getApiSms(params) {
        return POST(`/api/getApiSms.shtml`, params).then(res => res)
    }

    /**
     * 获取图形验证码
     */
    getApiVerifyCode(data, token) {
        return request(`/api/getApiVerifyCode.shtml`, {
            method: 'POST',
            data,
            headers: {
                token
            }
        }, false).then(res => res)
    }

    /**
     * 登录修改手机号码
     */
    updateMemberMobile(params) {
        return POST(`/api/updateMemberMobile.shtml`, params).then(res => res)
    }
}

const controllers = new logincontrollers()

export default controllers