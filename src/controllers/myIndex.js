import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 我的首页接口
 */



class myIndex {

    //查看用户拥有的有效的优惠券
    effective(params) {
        return POST(`/api/getMemberCouponNumber.shtml`, params).then(res => res)
    };

    //查看用户拥有的有效的优惠券
    getMemberInfo(params) {
        return POST(`/api/getMemberInfo.shtml`, params).then(res => res)
    };

    // 会员信息
    getLeaguerInfo(params) {
        return POST(`/api/getLeaguerInfo.shtml`, params).then(res => res)
    }

    // 传入token退出登录
    memberLogout(params) {
        return POST(`/api/memberLogout.shtml`, params).then(res => res)
    }
}

const myIndexVisit = new myIndex()

export default myIndexVisit