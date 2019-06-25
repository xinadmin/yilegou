<template>
    <div>

        <header id="top" class="HelloWorld">
            <div class="top_bg">
                <div class="huiyuanma" id="saoma">
                    <img src="http://yiyun.zhonyou.cn/webapp_img/saoma.png"/>
                    <p>扫一扫</p>
                </div>
                <div class="huiyuanma fr" id="huiyuanma">
                    <img src="http://yiyun.zhonyou.cn/webapp_img/erweima.png"/>
                    <p>会员码</p>
                </div>
                <p id="sousuo">
                    面膜
                </p>
            </div>
        </header>

        <div id="slider" class="mui-slider">
            <div class="mui-slider-group mui-slider-loop">
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner4.jpg">
                    </a>
                </div>
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner1.jpg">
                    </a>
                </div>
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner2.jpg">
                    </a>
                </div>
                <div class="mui-slider-item" data-id="155">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner3.jpg">
                    </a>
                </div>
                <div class="mui-slider-item" data-id="236">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner4.jpg">
                    </a>
                </div>
                <!-- 第三张 -->
                <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/banner1.jpg">
                    </a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>

            </div>
        </div>
        <nav>
            <ul id="slide_nav">
                <li class="meirong" id="meirong" onclick="launchMiniProgram(this)">
                    美容
                </li>
                <li class="canyin" id="canyin"  onclick="launchMiniProgram(this)">
                    餐饮
                </li>
                <li class="buy_cart" id="buy_cart" onclick="meirongyuan_fujin()">
                    美具
                </li>
                <li class="yule" id="yule" onclick="launchMiniProgram(this)">
                    车美
                </li>
                <li class="luye" id="luye" onclick="no_set()">
                    旅业
                </li>
                <li class="more" id="more">
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: ''
            }
        },
        mounted() {
            this.mui("#slider").slider({
                interval: 1500 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #top {
        overflow: hidden;
        width: 100%;
        padding: 0.1rem 0 0;
        background-color: #fd4504;
        min-height: 3.2rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 222;

        .top_bg {
            width: 100%;
            overflow: hidden;
            position: relative;

            .huiyuanma {
                width: 15%;
                float: left;
                overflow: hidden;
                text-align: center;
                box-sizing: border-box;
                overflow: hidden;

                img {
                    width: 40%;
                    display: block;
                    margin: 0.2rem auto 0;
                }

                p {
                    width: 100%;
                    font-size: 0.7rem;
                    color: #fff;
                }
            }

            #huiyuanma {
                float: right;
            }

            #sousuo {
                width: 69%;
                font-size: 1.0rem;
                display: inline-block;
                height: 2.0rem;
                line-height: 2.0rem;
                color: #999999;
                padding-left: 40px;
                border: solid 1px #fff;
                border-radius: 5px;
                position: absolute;
                left: 15.5%;
                top: 0.55rem;
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_index1.png) no-repeat 8px center;
                background-size: 28px 23px;
            }
        }

    }


    nav {
        width: 100%;
        background: #fff;
        overflow-x: hidden;
        padding: 0.3rem 0;
        position: relative;

        ul {
            width: 150%;
            overflow-x: hidden;
            margin: 0 auto;
            height: 3.5rem;
            line-height: 3.5rem;
            position: relative;
            left: 0%;

            li {
                width: 16.66%;
                float: left;
                overflow: hidden;
                height: 3.5rem;
                line-height: 3.5rem;
                padding-left: 49px;
                font-size: 0.8rem;
                color: #222222;
                padding-bottom: 6px;
                span {
                    font-size: 0.8rem;
                    color: #444444;
                }
            }
            li#canyin {
                padding-left: 57px;
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav2.jpg) no-repeat 8px center;
                background-size: 44px 44px;
            }
            li#meirong {
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav1.jpg) no-repeat 12px center;
                background-size: 44px 44px;
                padding-left: 57px;
            }
            li#buy_cart {
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav3.jpg) no-repeat 8px center;
                background-size: 44px 44px;
                padding-left: 57px;
            }
            li#yule {
                 background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav4.jpg) no-repeat 8px center;
                 background-size: 44px 44px;
                 padding-left: 54px;
             }
            li#luye {
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav5.jpg) no-repeat 8px center;
                background-size: 44px 44px;
                padding-left: 54px;
            }

           li#more {
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_nav6.jpg) no-repeat left center;
                background-size: 15px 15px;
            }
        }
    }






    .fixed {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
