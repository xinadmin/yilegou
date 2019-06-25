<template>
    <div>
        <header class="mui-bar mui-bar-nav" style="background-color: #ff3300">
            <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"
                    style="color: #fff;"><span class="mui-icon mui-icon-left-nav"
                                               style="font-size: 1.1rem;font-weight: 500;">设置</span></button>

        </header>

        <section class="set mui-content">
            <ul>
                <li id="my_message" @tap="returnPage('/Message')">
                    <a>我的资料</a>
                </li>
                <li id="zhanghao_anquan" @tap="returnPage('/Security')">
                    <a>账号与安全</a>
                </li>
                <li id="manager_dizhi"  @tap="returnPage('/address')">
                    <a>我的收货地址</a>
                </li>

            </ul>
            <ul>
                <li id="address_set" @tap="returnPage('/about')">
                    <a>地区设置</a>
                </li>
                <li @tap="returnPage('/about')">
                    <a>隐私</a>
                </li>
                <li @tap="returnPage('/about')">
                    <a>通用</a>
                </li>

            </ul>
            <ul>
                <li id="fankui" @tap="returnPage('/about')">
                    <a>帮助与反馈</a>
                </li>
                <li id="about" @tap="returnPage('/about')">
                    <a>关于依乐购</a>
                </li>
            </ul>
        </section>
        <br/>
        <br/>

        <button id="logout" @tap="returnPage('/Login')">
          退出当前账户
        </button>

    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            returnPage:function (item) {
                this.$router.push({
                    path: item
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .mui-bar-nav ~ .mui-content {
        padding-top: 0;
    }
    .set ul {
        margin-bottom: 0.6rem;
        background: #fff;

        li {
            width: 94%;
            margin-left: 3%;
            border-bottom: solid 1px #e0e0e0;

            a {
                display: block;
                width: 100%;
                height: 2.7rem;
                line-height: 2.7rem;
                font-size: 0.9rem;
                color: #000000;
                font-weight: 500;

                s {
                    float: right;
                    color: #9b9b9b;
                    font-weight: 400;
                }

                i {
                    float: right;
                }
            }
        }
    }
        .set ul li:last-child {
            border-bottom: none;
        }

        #logout {
            width: 100%;
            background: #ff5301;
            height: 2.6rem;
            line-height: 2.6rem;
            font-size: 1.1rem;
            color: #fff;
            font-weight: 500;
            position: fixed;
            bottom: 0;
        }
</style>
