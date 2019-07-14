import { request, post, get, put, patch } from '@/utils/http';
/**
 * 首页详情
 */



class indexcontrollers {

    /**
     * 连锁首页
     */
    getgoodsInfo(params) {
        return post(`/elgapp/nsgoods/select`, params).then(res => res)
    }

}

const controllers = new indexcontrollers()

export default controllers