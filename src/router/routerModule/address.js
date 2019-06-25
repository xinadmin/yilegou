const Address = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/address/index')
const updateAddress = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/address/updateAddress')
export default [{
    path: '/Address',
    name: 'Address',
    component: Address,
    meta: {
        title: '地址',
        mode: 'None',
    }
}, {
    path: '/updateAddress',
    name: 'updateAddress',
    component: updateAddress,
    meta: {
        title: '地址管理',
        mode: 'None',
    }
}
]
