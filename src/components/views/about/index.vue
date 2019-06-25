<template>
<div>
    <header class="mui-bar mui-bar-nav" style="background-color: #FF3300;">
        <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left" style="color: #fff;"><span class="mui-icon mui-icon-left-nav" style="font-size: 1.1rem;">关于依乐</span></button>
    </header>

    <div class="mui-content">

        <div id="logo">
            <img src="http://yiyun.zhonyou.cn/webapp_img/yilegou2.png" />
            <p>依乐购<s id="version"></s></p>
        </div>
        <div class="mui-scroll">
            <ul class="mui-table-view">

                <li class="mui-table-view-cell">
                    <a>服务条款</a>
                </li>
                <li class="mui-table-view-cell" id="banben">版本更新</li>
                <li class="mui-table-view-cell" id="about_evian">关于依乐购</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    #logo {
        width: 100%;
        overflow: hidden;
        text-align: center;
        padding: 8% 0;
        img {
            width: 40%;
            display: inline-block;
        }
        p {
            color: #222222;
            font-size: 1.0rem;
            height: 2.5rem;
            line-height: 2.5rem;
        }
    }

    .mui-scroll {
        color: #000000;
        font-size: 0.9rem;
    }
</style>
