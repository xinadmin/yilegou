import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 收获地址页面
 */



class receivingAddress {

    //收货地址列表
    receivingAddressList(params) {
        return POST(`/api/queryMemberAddressList.shtml`, params).then(res => res)
    };
    //添加新收货地址
    addNewShippingAddress(params) {
        return POST(`/api/insertMemberAddress.shtml`, params).then(res => res)
    };
    //删除地址
    deleteAddress(params) {
        return POST(`/api/deleteMemberAddress.shtml`, params).then(res => res)
    };
    //设置默认地址
    settingDefaultAddress(params) {
        return POST(`/api/updateAddressDefault.shtml`, params).then(res => res)
    };
    //修改收货地址
    modificationReceivingAddress(params) {
        return POST(`/api/updateMemberAddress.shtml`, params).then(res => res)
    };




}

const userReceivingAddress = new receivingAddress()

export default userReceivingAddress