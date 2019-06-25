import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 我的优惠卷接口
 */



class preferentialInterface {

    //查看用户拥有的优惠券
    ownedCoupons(params) {
        return POST(`/api/getMemberCoupon.shtml`, params).then(res => res)
    };


}

const userPreferentialInterface = new preferentialInterface()

export default userPreferentialInterface