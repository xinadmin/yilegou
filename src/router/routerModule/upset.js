const Set = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/upset/index')
const Security = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/upset/security')
export default [{
    path: '/Set',
    name: 'Set',
    component: Set,
    meta: {
        title: '设置',
        mode: 'None',
    }
},{
    path: '/Security',
    name: 'Security',
    component: Security,
    meta: {
        title: '账号与安全',
        mode: 'None',
    }
}
]
