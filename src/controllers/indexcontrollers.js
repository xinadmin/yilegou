import { request, POST, GET, PUT, DELETE } from '@/utils/http';
// import store from '@/store/index'

/**
 * 首页详情
 */



class indexcontrollers {

    /**
     * 连锁首页
     */
    getgoodsList(params) {
        return POST(`/api/getIndexInfo.shtml`, params).then(res => res)
    }

    // 活动页详情
    getChainActivityInfo(params) {
        return POST(`/api/getChainActivityInfo.shtml`, params).then(res => res)
    }






}

const controllers = new indexcontrollers()

export default controllers