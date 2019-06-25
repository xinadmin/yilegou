const Login = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/login/index')
const RetPass = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/login/upsetpass')
const Reg = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/login/reg')
export default [{
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
        title: '登录',
        mode: 'None',
    }
},{
    path: '/RetPass',
    name: 'RetPass',
    component: RetPass,
    meta: {
        title: '找回密码',
        mode: 'None',
    }
},
    {
        path: '/Reg',
        name: 'Reg',
        component: Reg,
        meta: {
            title: '注册',
            mode: 'None',
        }
    }
]
