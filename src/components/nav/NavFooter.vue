<template>

    <nav class="mui-bar mui-bar-tab" style="box-shadow: none;">
        <a id="defaultTab" class="mui-tab-item mui-active" @tap="returnPage('/index')">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item"  @tap="returnPage('/Translate')">
            <span class="mui-icon-extra mui-icon mui-icon-extra-class"
                  style="width: 100%; display:block; margin-top: 3px;"></span>
            <span class="mui-tab-label" style="font-size: 11px;">分类</span>
        </a>
        <a class="mui-tab-item"  @tap="returnPage('/Cart')">
            <span class="mui-icon-extra mui-icon mui-icon-extra-cart"
                  style="width: 100%; display:block; display:block;margin-top: 3px;"></span>
            <span class="mui-tab-label" style="font-size: 11px;">购物车</span>
        </a>
        <a class="mui-tab-item" @tap="returnPage('/User')">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>
<!--    <div class="nav-bar">-->
<!--        <router-link tag="div" class="nav-item" exact :to="{ path: item.path }" v-for="(item, index) of navList" :key="'navList_' + index">-->
<!--            <i class="iconfont" :class="item.icon"></i>-->
<!--            <span>{{item.title}}</span>-->
<!--        </router-link>-->
<!--    </div>-->
</template>

<script>
    export default {
        data() {
            return {
                navList: [{
                    title: '首页',
                    path: '/index',
                    icon: 'icon-tubiaozhizuomoban-14'
                },
                    {
                        title: '分类',
                        path: '/Translate',
                        icon: 'icon-tubiaozhizuomoban-9'
                    },
                    {
                        title: '购物车',
                        path: '/Cart',
                        icon: 'icon-tubiaozhizuomoban-9'
                    },
                    {
                        title: '我的',
                        path: '/user',
                        icon: 'icon-tubiaozhizuomoban-2'
                    }]
            }
        },
        methods:{
            returnPage:function (item) {
                this.$router.push({
                    path: item
                })

            }
        }
    }
</script>

<style lang="scss">
    .nav-bar{
        position: fixed;
        width: 100%;
        bottom: 0;
        height: 95px;
        background: #FAFAFA;
        display: flex;
        overflow: hidden;
        color: #999;
        z-index: 1000;
        .nav-item{
            flex: 1;
            text-align: center;
            i{
                font-size: 40px;
                margin-top: 8px;
                display: inline-block;
                color: #AFB3B2;
            }
            span{
                display: block;
                font-size: 20px;
                line-height: 28px;
                margin-top: 8px;
            }
            &.router-link-exact-active{
                i,span{
                    color: #3DC6A7;
                }
            }
        }
    }
</style>
