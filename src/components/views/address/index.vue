<template>
    <div>
        <header class="mui-bar mui-bar-nav" style="background-color: #ff3300;">
            <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"
                    style="color: #fff;"><span class="mui-icon mui-icon-left-nav"
                                               style="font-size: 1.1rem;font-weight: 500;">管理收货地址</span></button>

        </header>
        <div class="mui-content" id="mui-content">
            <p id="tishi" style="text-align: center;display: none; height: 4.0rem;line-height: 4.0rem;">
                当前物地址可用，请添加新的地址</p>
            <div id='shouhuo'><p class='shouhuo_name'><i id='shouhuo_name'>item.shouhuoName</i> <s id='shouhuo_tel'>
                item.shouhuoTel</s></p>
                <p class='shouhuo_dizhi'><s>item.shouhuoAddress</s></p>

                <div class='bianji'>
                    <input name='checkbox' value='Item 1' type='radio' id='danxuan'>
                    <label>默认地址</label>

                    <button id='delete' onclick='delete(this)' data-id='" + item.uid + "'>删除</button>


                </div>
            </div>
        </div>
        <br/>
        <br/>

        <br/>

        <div class="new_dizhi" id="new_dizhi">
            <router-link :to="{path:'/updateAddress'}">
                <button>新增收货地址</button>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "index",
        methods:{
            delete:function () {

            }
        }
    }
</script>

<style scoped>
    #shouhuo {
        width: 96%;
        background: #fff;
        box-sizing: border-box;
        overflow: hidden;
        padding: 0 3% 3%;
        max-height: 6.3rem;
        min-height: 5.6rem;
        margin: 2px auto 10px;
        box-shadow: 0 2px 10px 1px #CDCDCD;
    }

    #mui-content .moren_address {
        border: solid 1px #FF4404;
    }

    #shouhuo p {
        width: 100%;
    }

    #shouhuo .shouhuo_name {
        color: #333333;
        height: 2.3rem;
        line-height: 2.3rem;

    }

    #shouhuo .shouhuo_name s {
        float: right;
    }

    #shouhuo .shouhuo_dizhi {
        color: #4D4D4D;
    }

    #shouhuo .shouhuo_dizhi img {
        float: right;
        width: 8%;
    }

    #shouhuo .shouhuo_dizhi i.moren {
        display: inline-block;
        height: 1.5rem;
        line-height: 1.5rem;
        float: right;
        margin: 4% 0 0;
        padding: 0 0.6rem;
        border-radius: 10px;
        border: solid 1px #FF900D;
    }

    /*地址按鈕*/

    .new_dizhi {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        min-height: 50px;
        overflow: hidden;
        background: #fff;
    }

    .new_dizhi button {
        width: 100%;
        line-height: 50px;
        min-height: 50px;
        display: inline-block;
        text-align: center;
        float: left;
        color: #fff;
        font-size: 1.0rem;
        background: #ff5301;
        border-radius: 0;
        font-weight: 500;
    }

    /*編輯地址*/

    .bianji {
        width: 100%;
        padding: 2% 0 0;
        overflow: hidden;
    }

    .bianji button {
        float: right;
        display: inline-block;
        min-height: 30px;
        border-radius: 12px;
        border: solid 1px #B6B6B6;
        padding: 0 5%;
    }

    .bianji button#bianji {
        border: solid 1px #DAA520;
        color: #DAA520;
        margin-right: 3%;
    }

    .mui-btn:active {
        border: none;
    }
</style>
