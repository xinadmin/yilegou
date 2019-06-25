import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from './routerModule/index'
import cartRouter from './routerModule/cart'
import userRouter from './routerModule/user'
import aboutRouter from './routerModule/about'
import collectionRouter from './routerModule/collection'
import upsetRouter from './routerModule/upset'
import loginRouter from './routerModule/login'
import addressRouter from './routerModule/address'
import PageLayer from '@/components/layer/PageLayer'

Vue.use(Router)

let routeArr = [].concat(
    indexRouter,
    cartRouter,
    userRouter,
    aboutRouter,
    collectionRouter,
    upsetRouter,
    loginRouter,
    addressRouter
);

let routes = createRouter(routeArr);

const router = new Router({
    mode: 'history',
    routes: routes
})

//路由导航钩子
router.beforeResolve((to, from, next) => {
    // let LoginAuth = to.meta.Auth || false;
    //
    // const loginStatus = store.state.loginStatus;
    // //判断访问路由是否需要登录
    // if (LoginAuth) {
    //   //判断是否登录
    //   if (loginStatus) {
    //     next();
    //   } else {
    //     //保存被拦截登录的URL
    //     store.commit('setBeforeLoginLink', to);
    //     next({
    //       path: '/Login'
    //     })
    //   }
    // } else {
    next();
    // }
    //处理Title
    document.title = to.meta.title == undefined ? '' : to.meta.title

    const defaultBackground = '#FFF';

    //处理标题
    // if (to.meta.isHead && to.meta.title) {
    //   store.commit('setHeadTitle', to.meta.title);
    // } else {
    //   store.commit('setHeadTitle', '');
    // }

    /*处理Meta 背景设置*/
    if (to.meta.backgroundColor) {
        document.getElementsByTagName('body')[0].style.background = to.meta.backgroundColor
    } else {
        document.getElementsByTagName('body')[0].style.background = defaultBackground;
    }

})

router.afterEach((to, from) => {
    // ...
    ScrollTop();
})

//回滚顶部
const ScrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}


//生成路由
function createRouter(routeArray) {
    let router = new Array();

    let routerPage = {
        path: '/',
        component: PageLayer,
        children: []
    };

    let roterDefaultPage = [];

    for (let item of routeArray) {
        let {path, name, component, meta} = item;
        if (meta !== undefined) {
            switch (meta.mode) {
                case 'Nav':
                    routerPage.children.push({
                        path,
                        name,
                        components: {
                            pageLayer: component
                        },
                        meta
                    });
                    break;
                case 'None':
                    roterDefaultPage.push({
                        path,
                        name,
                        component,
                        meta
                    });
                    break;
            }
        }
    }

    return [].concat(
        routerPage,
        roterDefaultPage
    );
}

export default router
