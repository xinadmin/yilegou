const Index = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/Index')
const Translate = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/index/translate')

export default [{
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
        title: '首页',
        mode: 'Nav',
    }
},
    {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
            title: '首页',
            mode: 'Nav',
        }
    },
    {
    path: '/Translate',
    name: 'Translate',
    component: Translate,
    meta: {
        title: '分类',
        mode: 'Nav',
    }
}
]
