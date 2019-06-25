import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 商品详情
 */



class goodscontrollers {

    /**
     * 加入购物车
     * @return {Promise}
     */
    addShopCart(params) {
        return POST(`/api/addShopCart.shtml`, params).then(res => res)
    }

    /**
     * 查询购物车列表
     * @return {Promise}
     */
    getShopCarts(params) {
        return POST(`/api/shopCarts.shtml`, params).then(res => res)
    }

    /**
     * 更新购物车商品数量
     * @return {Promise}
     */
    updateShopCart(params) {
        return POST(`/api/updateShopCart.shtml`, params).then(res => res)
    }

    /**
     * 清空购物车列表
     * @return {Promise}
     */
    clearShopCarts(params) {
        return POST(`/api/clearShopCarts.shtml`, params).then(res => res)
    }

    //查询商品详情
    selectGoodsInfo(params) {
        return POST(`/api/selectGoodsInfo.shtml`, params).then(res => {
            if (res.shopCartVo) {
                res.number = res.shopCartVo.shopcartNum
            } else {
                res.number = 0;
            }
            return res;
        })
    }

    //查询门店信息
    getStoreInfoById(params) {
        return POST(`/api/getStoreInfoById.shtml`, params).then(res => res)
    }
}

const controllers = new goodscontrollers()

export default controllers