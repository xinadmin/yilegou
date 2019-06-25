const Cart = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/cart/index')


export default [{
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    meta: {
        title: '购物车',
        mode: 'Nav',
    }
}
]
