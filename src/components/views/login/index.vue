<template>
<div>
    <div style="width: 100%;height: 100%;float: left;position: relative;">
        <!--头部start-->
        <header class="login_form">
            <div>
                <span class="mui-action-back"></span>
                <button id="resigter" @tap="returnPage('/Reg')">注册</button>
            </div>
        </header>
        <!--头部end-->
        <!--登录输入start-->
        <div class="form_login">
            <div class="form_login_username mui-input-row">
                <input type="text" class="username mui-input-clear" id="username" oninput="oninput_select(this)" placeholder="请输入手机号/账号" onfocus="input_focus(this)" onblur="input_blur(this)" onkeyup="checkInput(this)" />
            </div>
            <div class="form_login_password mui-input-row" id="form_login_password">
                <input type="password" placeholder="请输入密码" class="login_password mui-input-clear" oninput="oninput_select(this)" id="login_password" onfocus="input_focus(this)" onblur="input_blur(this)" onkeyup="checkInput(this)" />
            </div>

            <div class="form_login_code" id="form_login_code" style="display: none;">
                <input type="tel" placeholder="请输入验证码" class="login_code" id="login_code" onfocus="oninput_select(this)" oninput="input_focus()" onkeyup="checkInput(this)" /><button id="code_take" onclick="sendCode(this)">获取验证码</button>
            </div>
            <div class="form_login_btn">
                <input type="button" value="登录" id="login_ok" disabled="disabled" />
            </div>
            <div class="form_login_method">
                <span class="methor_login_title" onclick="method_login(this)">手机验证码登录</span>
                <span class="fr" id="upset_password" @tap="returnPage('/RetPass')">忘记密码</span>
            </div>
        </div>
        <!--<div class="login_other_method">
            <h1>一键登录</h1>
        <div class="login_other_method_content">
            <span class="ali"></span>
            <span class="wx"></span>
            <span class="weibo"></span>

        </div>
    </div>-->
        <div class="mui-content-padded oauth-area">

        </div>
    </div>

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

<style scoped>
    header.login_form {
        width: 100%;
        overflow: hidden;
        min-height: 12.6rem;
        background: #E0E0E0 url(http://yiyun.zhonyou.cn/webapp_img/login_bg.jpg) repeat center center;
        background-size: 100% 100%;
    }

    header.login_form div {
        width: 86%;
        margin: 1.6rem auto;
    }

    header.login_form div span {
        display: inline-block;
        width: 39px;
        height: 39px;
        background: url(http://yiyun.zhonyou.cn/webapp_img/login_delete_03.jpg) no-repeat center center;
        background-size: 36px 34px;
    }

    header.login_form div button {
        float: right;
        padding: 0;
        min-height: 23px;
        height: 23px;
        line-height: 23px;
        background-color: #f6ece7;
        border-radius: 12px;
        padding: 0 0.5rem;
        text-align: center;
        color: #d6a38b;
        font-size: 1.1rem;
        text-align: center;
        font-weight: 600;
        outline: none;
    }
    input[type=button], input[type=submit], input[type=file], button {
        cursor: pointer;
        -webkit-appearance: none;
    }
    .form_login {
        width: 86%;
        overflow: hidden;
        margin: 2.2rem auto;
    }
    .form_login .form_login_username,
    .form_login .form_login_password,
    .form_login .form_login_code,.form_login_yaoqing_code {
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
    .form_login .form_login_password input, .form_login_yaoqing_code input
    {
        width: 100%;
        font-size: 1.0rem;
        outline: none;
        -webkit-appearance: none;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        resize: none;
        box-sizing: border-box;
        appearance: button;
        -moz-appearance: button;
        -webkit-appearance: button;
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
    .form_login  .form_login_yaoqing_code {
        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/login4.jpg) no-repeat 1px center;
        background-size: 28px 30px;
    }
    .form_login .form_login_code input {
        width: 45%;
        /*height: 98%;*/
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
        background-color:rgba(255,102,52,1) ;
        -webkit-tap-highlight-color:rgba(255,102,52,1);
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
        bottom:2%
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
        background-color: rgba(255,255,255,1);
    }
    /*错误提示样式*/
    .error_bg {
        width: 100%;
        min-height: 3.6rem;
        background: rgba(0,0,0,0.6);
        position: fixed;
        left: 0;
        top: -3.6rem;
        z-index: 444;
        text-align: center;
    }
    .error_bg span {
        height:3.6rem;
        line-height: 1.8rem;
        color: #fff;
        font-size: 1.0rem;
    }

    /*提示样式*/
    .tishi_bottom {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
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
        background-color: rgba(0,0,0,0.8);
        text-align: center;
        z-index: 555;
    }
    .tishi_bottom .tishi_bottom_content span  {
        color: #ddd;
        font-size: 0.8rem;
        height: 1.6rem;
        line-height: 1.6rem;

    }
    .tishi_bottom .tishi_bottom_content i  {
        color: #ddd;
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 0.9rem;

    }
    .tishi_bottom .tishi_bottom_content i s {
        font-weight: 600;
    }
</style>
