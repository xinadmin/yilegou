<template>
    <div>

    <header class="mui-bar mui-bar-nav" style="background-color: #ff3300">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #fff;"></a>
        <h1 class="mui-title" style="color: #fff;">我的资料</h1>
    </header>

    <!--个人信息列表项start-->
    <div class="my_list mui-content" style="z-index: -999;">
        <ul>
            <li>
                <a>个人头像<i><img src='http://yiyun.zhonyou.cn/webapp_img/yilegou2.png' width="33px"/></i></a></li>
            <li>
                <a href="javascript:;">会员名<s id="name"></s></a>
            </li>
            <li id="bangding_tel">
                <a href="javascript:void(0);">手机号码<s id="tel"></s></a>
            </li>
            <li>
                <a href="javascript:;">身份证号<s id="idcard"></s></a>
            </li>
            <li id="erweima">
                <a href="javascript:;">我的二维码名片<s></s></a>
            </li>
        </ul>
        <ul>
            <li id="select_sex">
                <a>性别<s id="sex"></s></a>
            </li>
        </ul>
    </div>
    <!--个人信息列表项end-->
    <div id="select_sex_alert"
         style="background:rgba(0,0,0,0.2);display: none; width: 100%;height: 100%;top: 0; left: 0;position: fixed; z-index: 9999;">
        <form class="mui-input-group"
              style="background: #fff;opacity: 1;  z-index: 9999;font-size: 1.2rem;color: #222222;position: relative;top: 45%;width: 95%;border-radius:5px;margin: 0 auto;">
            <div class="mui-input-row mui-radio" style="border-bottom: none;">
                <label>男</label>
                <input name="radio1" type="radio" value="男" id="man">
            </div>
            <div class="mui-input-row mui-radio" style="border-bottom: none;">
                <label>女</label>
                <input name="radio1" type="radio" value="女" id="women">
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "message",

    }
</script>

<style lang="scss" scoped>
    .mui-bar-nav ~ .mui-content {
        padding-top: 0;
    }
    .my_list ul {
        margin-bottom: 0.6rem;
        background: #fff;

        li {
            width: 98%;
            margin-left: 2%;
            border-bottom: solid 1px #e0e0e0;

            a {
                display: block;
                width: 100%;
                height: 2.7rem;
                line-height: 2.7rem;
                font-size: 0.9rem;
                color: #000000;
                font-weight: 500;

                i {
                    width: 2.2rem;
                    display: inline-block;
                    height: 2.4rem;
                    line-height: 2.4rem;
                    float: right;
                    margin-right: 4%;
                }

                s {
                    display: inline-block;
                    float: right;
                    margin-right: 4%;
                    width: auto;
                    color: #9b9b9b;
                    font-weight: 400;
                    font-size: 0.8rem;

                    i {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    .my_list ul li:last-child {
        border-bottom: none;
    }


</style>
