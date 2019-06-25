<template>
    <div>
        <section class="my_list mui-content">
            <!--个人信息start-->
            <div class='user_title'>
                <div id="header_content">
                    <div class="header_content_logo"><img src='http://yiyun.zhonyou.cn/webapp_img/yilegou2.png'/></div>
                    <div class='user-message'>
                        <p id="account">john</p>
                        <s>新会员</s>
                    </div>
                </div>
            </div>
            <ul class="account">
                <router-link :to="{ path: '/Translate'}">
                    <li id="jifen">
                        充值
                    </li>
                </router-link>
                <router-link :to="{ path: '/Translate'}">
                    <li id="yuer">
                        余额
                    </li>
                </router-link>
                <router-link :to="{ path: '/Translate'}">
                    <li id="fenhong_tixian">
                        分红
                    </li>
                </router-link>
            </ul>
        </section>
        <!--个人信息end-->
        <div class="fengge">
        </div>
        <!--我的订单start-->
        <div class="dingDan">
            <p class="my_dingdan">
                <s>我的订单</s>
            </p>

            <div class="listArticle" data-id="0">
                <img src="http://yiyun.zhonyou.cn/webapp_img/my8.png" width="40px"/>
                <em>待付款</em>
            </div>
            <div class="listArticle" data-id="1">
                <img src="http://yiyun.zhonyou.cn/webapp_img/my7.png" width="40px"/>
                <em>待发货</em>
            </div>
            <div class="listArticle" data-id="2">
                <img src="http://yiyun.zhonyou.cn/webapp_img/my6.png" width="40px"/>
                <em>待收货</em>
            </div>
            <div class="listArticle" data-id="3">
                <img src="http://yiyun.zhonyou.cn/webapp_img/my5.png" width="40px"/>
                <em>待评价</em>
            </div>
            <div class="listArticle" id="shouhou">
                <img src="http://yiyun.zhonyou.cn/webapp_img/my4.png" width="40px"/>
                <em>退款/售后</em>
            </div>

        </div>
        <!--我的订单end-->
        <div class="fengge">
        </div>
        <!--我的设置start-->
        <div class="my_list_nav">
            <ul>
                <li id="xinren_yaoqing" @tap="returnPage('/Message')">
                    新人邀请<s></s>
                </li>
                <li id="shop_ruzhu" @tap="returnPage('/Message')">
                    商家通道<s></s>
                </li>
                <li id="my-pingjia" @tap="returnPage('/Message')">
                    我的收藏<s></s>
                </li>
            </ul>
        </div>
        <div class="fengge">
        </div>
        <div class="my_list_nav">
            <ul>

                <li id="weixin_guanzhu" @tap="returnPage('/Message')">
                    微信绑定<s></s>
                </li>

                <li id="kefu_zhongxin" >
                    客服中心<s></s>
                </li>
                <li id="upset" @tap="returnPage('/Set')">
                    设置<s></s>
                </li>
            </ul>
        </div>


        <!--我的设置end-->
    </div>

</template>

<script>
    export default {
        name: "index",
        return: {
            user_name: 'john'
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

<style lang="scss" scoped>
    /*header头部title样式*/


    /*个人信息样式*/

    .user_title {
        width: 100%;
        overflow: hidden;
        background: url(http://yiyun.zhonyou.cn/webapp_img/my13.png) repeat-x;
        background-size: 100% 100%;
        min-height: 8.6rem;
        padding-top: 1.0rem;
    }

    #header_content {
        width: 100%;
        overflow: hidden;
        text-align: left;

    }

    .header_content_logo {
        margin: 2%;

    }

    #header_content img {
        display: inline-block;
        width: 16%;
        float: left;
        padding: 2%;
        border-radius: 50%;
        background-color: #FAEFC2;
        border: solid 2px #FA8D39;

    }

    .user-message {
        float: left;
        width: 80%;
        padding: 0.3rem;
        position: relative;

    }

    .user-message p {
        color: #fff;
        font-size: 1.0rem;
        height: 2.0rem;
        line-height: 2.0rem;

    }


    .user-message s {
        display: inline-block;
        height: 1.2rem;
        width: 4.8rem;
        line-height: 1.3rem;
        padding-left: 1.4rem;
        background: #f39800 url(http://yiyun.zhonyou.cn/webapp_img/my_logo.png) no-repeat 8px center;
        background-size: 15px 15px;
        color: #E2E2E2;
        font-size: 0.85rem;
        border-radius: 10px;
        font-style: italic;

    }

    .user-message s img {
        display: inline-block;
        width: 25%;

    }

    .account {
        width: 90%;
        margin: -1.3rem auto 0;
        overflow: hidden;
        z-index: 999;
        background-color: #fff;
        border-radius: 7px;

        li {
            float: left;
            width: 30%;
            height: 3.3rem;
            line-height: 3.3rem;
            font-size: 0.9rem;
            color: #222222;
            font-weight: 500;
            padding-left: 46px;
            background: #fff url(http://yiyun.zhonyou.cn/webapp_img/my9.png) no-repeat 12px center;
            background-size: 31px 30px;
            margin-left: 3.3%;

        }

        li:first-child {
            padding-left: 49px;
        }


    }
    li:nth-child(2) {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/my10.png) no-repeat 8px center;
        background-size: 31px 32px;
    }

    li:last-child {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/my11.png) no-repeat 8px center;
        background-size: 31px 32px;

    }
    #head_logo {
        display: inline;
        height: 100%;
        line-height: 100%;
        text-align: left;
        background-color: #ff3300;
        /*display: none;*/
        s {
            display: inline-block;
            padding: 0.3rem 0;
            font-size: 0.9rem;

            img {
                width: 15%;
                margin-right: 0.2rem;

            }

        }
    }

    /*我的资产样式*/


    .my_list {
        width: 100%;
        height: 100%;

        dl.zichan {
            width: 100%;
            height: 100%;
            background: #fff;
            overflow: hidden;
            margin-top: 0.6rem;
            box-shadow: 0 -1px 10px 1px #CDCDCD;

            dt {
                width: 100%;
                box-sizing: border-box;
                min-height: 40px;
                border-bottom: solid 1px #e0e0e0;

                a {
                    width: 100%;
                    height: 2.3rem;
                    line-height: 2.3rem;
                    padding-left: 4%;
                    box-sizing: border-box;
                    font-size: 0.9rem;

                }
            }

            dd {
                border: none;
                overflow: hidden;

                article {
                    float: left;
                    width: 33.3%;
                    text-align: center;
                    border-right: 1px #e0e0e0 solid;
                    float: left;
                    box-sizing: border-box;
                    overflow: hidden;

                    i {
                        height: 1.4rem;
                        display: block;
                        font-size: 0.7rem;
                        color: #222222;
                        line-height: 1.4rem;

                    }

                    em {
                        height: 1.2rem;
                        color: #222222;
                        width: 100%;
                        font-size: 0.8rem;
                        line-height: 1.2rem;

                    }
                }

                article:last-child {
                    border: none;

                }

                a.user_zijin_list {
                    display: inline-block;
                    width: 33.3%;

                }
            }
        }
    }


    .dingDan {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        background: #fff;
    }

    .my_dingdan {
        text-align: left;
        padding: 4%;
        color: #333333;
        font-weight: 500;
        border-bottom: solid 1px #eeeeee;

        s {
            display: inline-block;
            border-left: solid 3px #ff3300;
            padding-left: 8px;

        }

    }

    .listArticle {
        width: 20%;
        float: left;
        text-align: center;
        padding-bottom: 0.2rem;
        overflow: hidden;

        img {
            margin: 0.4rem auto 0.2rem;
            display: block;

        }

        em {
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 0.7rem;

        }
    }

    .my_list_nav {
        width: 100%;
        background: #fff;
        margin: 0.6rem auto 0;
        clear: both;

    }

    .my_list_nav ul {
        width: 94%;
        margin-left: 3%;
        background: #fff;

    }

    .my_list_nav ul li {
        width: 100%;
        border-bottom: solid 1px #eeeeee;
        box-sizing: border-box;
        text-align: left;
        padding-left: 33px;
        height: 2.9rem;
        line-height: 2.9rem;
        font-size: 0.9rem;
        color: #000000;
        font-weight: 500;
        background: url(http://yiyun.zhonyou.cn/webapp_img/my2.png) no-repeat left center;
        background-size: 26px 26px;

    }

    .my_list_nav ul li s {
        float: right;
        width: 2.7rem;
        height: 2.7rem;
        line-height: 2.7rem;

        display: inline-block;
        background: url(http://yiyun.zhonyou.cn/webapp_img/my3.png) no-repeat right center;
        background-size: 26px 26px;

    }

    #xinren_yaoqing {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my1.png) no-repeat left center;
        background-size: 26px 26px;

    }

    #shop_ruzhu {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my18.png) no-repeat left center;
        background-size: 26px 26px;

    }

    .my_list_nav ul li:last-child {
        border-bottom: none;

    }

    #my_meirongshi {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my35.jpg) no-repeat left center;
        background-size: 26px 26px;

    }

    #my-pingjia {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my17.png) no-repeat left center;
        background-size: 26px 26px;

    }

    #weixin_guanzhu {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my16.png) no-repeat left center;
        background-size: 26px 26px;

    }

    #kefu_zhongxin {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my4.png) no-repeat left center;
        background-size: 26px 26px;

    }

    #upset {
        background: url(http://yiyun.zhonyou.cn/webapp_img/my14.png) no-repeat left center;
        background-size: 26px 26px;

    }

    /*@media only screen and (min-width: 415px) {*/

    /*    .dingdan article {*/
    /*        height: 2.8rem;*/
    /*        line-height: 2.8rem;*/

    /*    }*/

    /*    .dingdan article img {*/
    /*        margin: 0;*/
    /*        margin-right: 0.6rem;*/
    /*        display: inline-block;*/

    /*    }*/

    /*    .dingdan article em {*/
    /*        height: 2.8rem;*/
    /*        line-height: 2.8rem;*/
    /*        font-size: 0.7rem;*/

    /*    }*/

    /*    .user_title img {*/
    /*        width: 14%;*/
    /*        padding-top: 0.6rem;*/

    /*    }*/
    /*}*/
</style>
