const About = () =>
    import ( /* webpackChunkName: "Index" */ '@/components/views/about/index')


export default [{
    path: '/About',
    name: 'About',
    component: About,
    meta: {
        title: '关于我们',
        mode: 'None',
    }
}
]
