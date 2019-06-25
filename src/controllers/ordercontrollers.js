import { request, POST, GET, PUT, DELETE } from '@/utils/http';

/**
 * 商品详情
 */

class ordercontrollers {
    /**
     * 订单列表展示信息
     */
    orderList(params) {
        return POST('/api/orderList.shtml', params).then(res => res)
    }

    // 取消订单
    cancelOrder(id) {
        return POST(`/api/cancelOrder.shtml/${id}`).then(res => res)
    }

    // 删除订单
    deleteOrder(params) {
        return POST('/api/deleteOrder.shtml', params).then(res => res)
    }

    // 确认订单
    finishOrder(orderId) {
        return POST(`/api/finishOrder.shtml/${orderId}`).then(res => res)
    }

    // 订单详情
    orderInfo(params) {
        return POST('/api/orderInfo.shtml', params).then(res => res)
    }

    // 订单支付
    scanPayment(orderId) {
        return POST(`/api/scanPaymentH5.shtml/${orderId}`).then(res => res)
    };
}

const controllers = new ordercontrollers()

export default controllers