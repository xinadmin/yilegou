<template>
<div>
    <header id="header" class="mui-bar mui-bar-nav" style="background-color: #FF3300;">
        <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left" style="color: #222222;"><span class="mui-icon mui-icon-left-nav" style="font-size: 1.1rem;color: #fff;">账号与安全</span></button>
        <a class="mui-pull-right mui-icon-more mui-icon" style="color: #fff;" href="#topPopover"></a>
    </header>
    <div class=" set mui-content" style="background: #fff; color: #2222; font-size: 0.9rem;;">
        <ul>
            <li>
                <a>会员名/昵称<i><img src="http://yiyun.zhonyou.cn/webapp_img/go.png" width="18px"/></i><s id="account"></s></a>
            </li>

            <li>
                <a>修改手机号码<i><img src="http://yiyun.zhonyou.cn/webapp_img/go.png" width="18px"/></i><s id="tel"></s></a>
            </li>
            <li>
                <a>绑定身份证号<i><img src="http://yiyun.zhonyou.cn/webapp_img/go.png" width="18px"/></i><s id="idcard"></s></a>
            </li>
            <li>
                <a>设置登录密码 <i><img src="http://yiyun.zhonyou.cn/webapp_img/go.png" width="18px"/></i></a>
            </li>
            <li>
                <a>设置支付密码 <i><img src="http://yiyun.zhonyou.cn/webapp_img/go.png" width="18px"/></i></a>
            </li>

        </ul>
    </div>
</div>
</template>

<script>
    export default {
        name: "security"
    }
</script>

<style scoped>
    .set ul {
        margin-bottom: 0.6rem;
        background: #fff;
    }

    .set ul li {
        width: 94%;
        margin-left: 3%;
        border-bottom: solid 1px #e0e0e0;
    }

    .set ul li:last-child {
        border-bottom: none;
    }

    .set ul li a {
        display: block;
        width: 100%;
        height: 2.7rem;
        line-height: 2.7rem;
        font-size: 0.9rem;
        color: #000000;
        font-weight: 500;
    }

    .set ul li a s {
        float: right;
        color: #9b9b9b;
        font-weight: 400;
    }


    .set ul li a i {
        float: right;
    }
</style>
