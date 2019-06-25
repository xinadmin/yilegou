<template>
    <div>
        <header>
            <div>
                <h1>
                    <span class="mui-action-back"></span>
                    <s></s>
                    找回密码
                </h1>
            </div>
        </header>
        <!--头部end-->
        <!--登录输入start-->
        <div class="form_login">
            <div class="form_login_username mui-input-row">
                <input type="tel" class="tel mui-input-clear" oninput="oninput_select()" id="tel" placeholder="请输入手机号"
                       onkeyup="checkInput(this)"/><i class="none error" id="close_one"></i>
            </div>
            <div class="form_login_code mui-input-row">
                <input type="tel" placeholder="请输入验证码" oninput="oninput_select()" class="code " id="code"
                       onkeyup="checkinput_code(this)" onchange="checkinput_code(this)"/>
                <button id="code_take" onclick="sendCode(this)">获取验证码</button>
            </div>
            <div class="form_login_password mui-input-row">
                <input type="password" placeholder="请输入新密码" oninput="oninput_select()" class="password mui-input-clear"
                       id="password" onkeyup="checkInput(this)"/><i class="none error" id="close_two"></i>
            </div>
            <div class="form_login_btn">
                <input type="button" value="确定" id="update_ok" class="" disabled="disabled"/>
            </div>
        </div>
        <!--登录输入end-->

        <div class="error_bg">
            <span>账号或密码不存在</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "upsetpass"
    }
</script>

<style scoped lang="scss">

    header {
        width: 100%;
        overflow: hidden;

        h1 {
            width: 86%;
            margin: 5% auto 3%;
            text-align: center;
            height: 2.5rem;
            position: relative;
            line-height: 2.5rem;
            font-size: 1.1rem;
            color: #333333;
            font-weight: 500;

            span {
                display: inline-block;
                float: left;
                width: 35px;
                height: 35px;
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/resigter_back.jpg) no-repeat center center;
                background-size: 36px 32px;
            }

            s {
                display: inline-block;
                float: right;
                width: 35px;
                height: 35px;
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/resigter_close.jpg) no-repeat center center;
                background-size: 36px 32px;
            }
        }
    }


    .form_login {
        width: 86%;
        overflow: hidden;
        margin: 2.2rem auto;
    }

    .form_login .form_login_username,
    .form_login .form_login_password,
    .form_login .form_login_code, .form_login_yaoqing_code {
        width: 100%;
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 1.1rem;
        border-bottom: solid 1px #EEEEEE;
        padding-left: 46px;
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login1.jpg) no-repeat 1px center;
        color: #333333;
        background-size: 28px 35px;
        font-weight: 500;
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 1.0rem;
    }

    .form_login .form_login_username input,
    .form_login .form_login_password input, .form_login_yaoqing_code input {
        width: 100%;
        font-size: 1.0rem;
        outline:  none;
        -webkit-appearance:  none;
        -webkit-appearance:  none;
        -webkit-tap-highlight-color:  rgba(0, 0, 0, 0);
        resize:  none;
        box-sizing:  border-box;
        appearance:  button;
        -moz-appearance:  button;
        -webkit-appearance:  button;
        border: none;
        padding-left: 0;
    }

    .form_login .none {
        display: none;
    }

    .form_login .form_login_password {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login2.jpg) no-repeat 2px center;
        background-size: 28px 35px;
    }

    .form_login .form_login_code {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login3.jpg) no-repeat 1px center;
        background-size: 30px 35px;

    }

    .form_login .form_login_yaoqing_code {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login4.jpg) no-repeat 1px center;
        background-size: 28px 30px;
    }

    .form_login .form_login_code input {
        width: 45%;
        font-size: 0.95rem;
        border: none;
        padding-left: 0;
    }

    .form_login .form_login_code button {
        float: right;
        display: inline-block;
        background-color: #999999;
        color: #fff;
        height: 1.8rem;
        line-height: 1.8rem;
        padding: 0 0.6rem;
        border-radius: 13px;
        margin-top: 0.4rem;
        /*outline: none;*/
    }

    .form_login .form_login_code button.active {
        background-color: #66cc00;
    }

    .form_login .form_login_btn {
        width: 100%;
        color: #fff;
        height: 2.6rem;
        line-height: 2.6rem;
        text-align: center;
        border-radius: 5px;
        margin: 2rem 0 0.3rem;
        background: url(http://yiyun.zhonyou.cn/webapp_img/login_btn.jpg) repeat center center;
        background-size: 100% 100%;
    }

    .form_login .form_login_btn input {
        width: 100%;
        height: 100%;
        /*background-color: rgba(102,102,102,1);*/
        border-radius: 5px;
        color: #fff;
        text-align: center;
        font-size: 1.1rem;
        z-index: 333;
        background: url(http://yiyun.zhonyou.cn/webapp_img/login_btn.jpg) repeat center center;
        background-size: 100% 100%;
    }

    .form_login .form_login_btn .active {
        background-color: rgba(255, 102, 52, 1);
        -webkit-tap-highlight-color: rgba(255, 102, 52, 1);
        background: url(http://yiyun.zhonyou.cn/webapp_img/my13.png) repeat center;
        background-size: 100% 100%;
    }

    .form_login .form_login_method {
        width: 100%;
    }

    .form_login .form_login_method span {
        display: inline-block;
        height: 2.3rem;
        line-height: 2.3rem;
        color: #333333;
        font-weight: 500;
        font-size: 1.0rem;
    }

    .login_other_method {
        width: 90%;
        margin: 0 auto 0;
        overflow: hidden;
        position: absolute;
        left: 5%;
        bottom: 2%
    }

    .login_other_method h1 {
        height: 2.8rem;
        line-height: 2.8rem;
        text-align: center;
        font-size: 1.0rem;
        font-weight: 500;
    }

    .login_other_method .login_other_method_content {
        width: 100%;
        overflow: hidden;
        text-align: center;

    }

    .login_other_method .login_other_method_content span {
        display: inline-block;
        width: 32%;
        overflow: hidden;
        height: 45px;
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login1_1.jpg) no-repeat left center;
        background-size: 39px 36px;
    }

    .login_other_method_content span.wx {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login1_2.jpg) no-repeat center center;
        background-size: 39px 36px;
    }

    .login_other_method_content span.weibo {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login1_3.jpg) no-repeat right center;
        background-size: 38px 36px;
    }

    .form_login .form_login_username input:focus,
    .form_login .form_login_password input:focus, .form_login_yaoqing_code input:focus {
        background-color: rgba(255, 255, 255, 1);
    }

    /*错误提示样式*/
    .error_bg {
        width: 100%;
        min-height: 3.6rem;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        left: 0;
        top: -3.6rem;
        z-index: 444;
        text-align: center;
    }

    .error_bg span {
        height: 3.6rem;
        line-height: 1.8rem;
        color: #fff;
        font-size: 1.0rem;
    }

    /*提示样式*/
    .tishi_bottom {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 444;
        position: fixed;
        left: 0;
        top: 0;
        display: none;

    }

    .tishi_bottom .tishi_bottom_content {
        width: 100%;
        max-height: 15%;
        min-height: 10%;
        position: absolute;
        bottom: -12%;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        z-index: 555;
    }

    .tishi_bottom .tishi_bottom_content span {
        color: #ddd;
        font-size: 0.8rem;
        height: 1.6rem;
        line-height: 1.6rem;

    }

    .tishi_bottom .tishi_bottom_content i {
        color: #ddd;
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 0.9rem;

    }

    .tishi_bottom .tishi_bottom_content i s {
        font-weight: 600;
    }
</style>
