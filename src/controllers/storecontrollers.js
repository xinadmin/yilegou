import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 商品详情
 */



class storecontrollers {

    /**
     * 查看门店信息
     */
    getStoreInfoById(params) {
        return POST(`/api/getStoreInfoById.shtml`, params).then(res => res)
    }

    /**
     * 查看门店信息
     */
    templateCategoryList(params) {
        return POST(`/api/templateCategoryList.shtml`, params).then(res => res)
    }

    /**
     * 根据模版分类ID查找商品列表
     */
    templateCategoryGoodsList(params) {
        return POST(`/api/templateCategoryGoodsList.shtml`, params).then(res => {
            res.list = res.list.map(item => {
                if (item.shopCartVo) {
                    item.number = item.shopCartVo.shopcartNum
                } else {
                    item.number = 0;
                }
                return item;
            });
            return res;
        })
    }

    /**
     * 获取限时秒杀的商品
     */
    getSeckillGoods(params) {
        return POST(`/api/getSeckillGoods.shtml`, params).then(res => {
            if (res.list) {
                res.list = res.list.map(item => {
                    if (item.shopCartVo) {
                        item.number = item.shopCartVo.shopcartNum
                    } else {
                        item.number = 0;
                    }
                    return item;
                });
            }
            return res;
        })
    }

    /**
     * 门店优惠券
     */
    getCouponbyStoreId(params) {
        return POST(`/api/getCouponbyStoreId.shtml`, params).then(res => res)
    }

    /**
     * 领取优惠券
     */
    getCouponbyCouponId(params) {
        return POST(`/api/getCouponbyCouponId.shtml`, params).then(res => res)
    }

    /**
     * 门店首页展示专题
     */
    queryStoreSubjectList(params) {
        return POST(`/api/queryStoreSubjectList.shtml`, params).then(res => res)
    }

    /**
     * 门店专题页面
     */
    queryStoreSubject(params) {
        return POST(`/api/queryStoreSubject.shtml`, params).then(res => {
            if (res && res.goodsVoPage && res.goodsVoPage.list) {
                res.goodsVoPage.list = res.goodsVoPage.list.map(item => {
                    let number = item.shopCartVo ? item.shopCartVo.shopcartNum : 0;
                    return {
                        ...item,
                        number
                    }
                })
            }
            return res;
        })
    }
}

const controllers = new storecontrollers()

export default controllers;