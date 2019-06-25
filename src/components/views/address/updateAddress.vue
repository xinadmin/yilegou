<template>
<div>
    <header class="mui-bar mui-bar-nav">
        <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left" style="color: #fff;"><span class="mui-icon mui-icon-left-nav" style="font-size: 1.1rem;font-weight: 500;">新增地址</span></button>

    </header>
    <div class="mui-content">
        <div class="mui-collapse-content">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>收货人</label>
                    <input type="text" class="mui-input-clear" placeholder="请填写收货人" id="name">
                </div>
                <div class="mui-input-row">
                    <label>手机号码</label>
                    <input type="number" class="mui-input-clear" placeholder="请填写你的手机号码" id="tel">
                </div>
                <div class="mui-input-row" id="show_dizhi">
                    <label>所在地区</label>

                    <s><i id="diqu"></i><img src="img/go.png"/></s>
                </div>
                <div class="mui-input-row">
                    <label>详细地址</label>
                    <input type="text" class="mui-input-clear" placeholder="请填写你的详细地址" id="address">
                </div>
                <div class="mui-input-row">
                    <label>邮政编码</label>
                    <input type="number" class="mui-input-clear" placeholder="请填写邮政编码" id="youbian">
                </div>
            </form>
        </div>
        <ul style="margin-top: 2%;background: #fff;">
            <li class="mui-table-view-cell">设置为默认
                <span style="display: none;" id="zhuangtai">1</span>
                <div class="mui-switch mui-switch-blue mui-switch-mini mui-active" id="switch">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <div class="mui-content-padded">
            <button type="button" id="set_baocun" class="mui-btn  mui-btn-block" style="color: #fff;font-size: 1.0rem;font-weight: 500; background: #ff5301;">保存</button>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "updateAddress"
    }
</script>

<style scoped>
    .mui-bar {
        background-color: #fd4404;
    }

    .mui-input-row input {
        font-size: 0.9rem;
    }

    #show_dizhi s {
        padding: 4% 2% 4% 0;
        font-size: 1.0rem;
    }

    #show_dizhi s i {
        padding-top: 3%;
        display: inline-block;
    }

    #show_dizhi s img {
        width: 8%;
        margin: 2%;
        float: right;
    }
</style>
