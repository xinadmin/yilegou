import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 搜索历史
 */



class indexcontrollers {

    // 搜索历史
    searcHistory(params) {
            return POST(`/api/searchHistorys.shtml`, params).then(res => res)
        }
        // 清空搜索历史
    emptyHistory(params) {
            return POST(`/api/clearSearch.shtml`, params).then(res => res)
        }
        //这个是公共搜索
    searchGoodsAll(params) {
            return POST(`/api/searchGoodsAll.shtml`, params).then(res => res)
        }
        //这个是店铺搜索
    searchGoodsByShop(params) {
        return POST(`/api/searchGoodsByShop.shtml`, params).then(res => {
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



}

const controllers = new indexcontrollers()

export default controllers