const User = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/user/index')
const Message = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/user/message')
export default [{
    path: '/User',
    name: 'User',
    component: User,
    meta: {
        title: '用户',
        mode: 'Nav',
    }
}, {
    path: '/Message',
    name: 'Message',
    component: Message,
    meta: {
        title: '我的资料',
        mode: 'None',
    }
}
]
