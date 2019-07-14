import { request, post, get, put, patch } from '@/utils/http';
/**
 * 商品详情
 */



class goodscontrollers {

    /**
     * 连锁首页
     */
    getgoodsdetail(params) {
        return get(`/elgapp/nsgoods/selectBygoodsId`, params).then(res => res)
    }

}

const controllers = new goodscontrollers()

export default controllers