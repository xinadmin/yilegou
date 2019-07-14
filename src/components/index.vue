<template>
    <div style="background-color: #eeeeee">

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
                <li class="canyin" id="canyin" onclick="launchMiniProgram(this)">
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
        <div class="fengge">
        </div>
        <!--礼包专区start-->
        <div class="more_gift">
            <span class="gift_title">礼包专区</span><span class="fr index_color_orange" onclick="no_set()">查看更多&nbsp;&nbsp;></span>
        </div>
        <!--礼包专区end-->
        <div class="fengge">
        </div>
        <!--产品板块start-->
        <div class="produce_classification">
            <div class="fl produce_classification_index" id="meizhuang">
                <div class="produce_classification_fl">
                    <div class="produce_classification_fl_title">
                        <span>限时抢购</span>
                        <s><i id="hour"></i>:<i id="minuter"></i>:<i id="miao"></i></s>
                        <h1>水透白细致再生原液蚕丝冰膜</h1>
                        <h2>给肌肤从未有过的水润感</h2>
                    </div>
                    <div class="produce_classification_fl_pic">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/qianggou.png"/>
                    </div>
                </div>
            </div>
            <div class="fr produce_classification_second">
                <div class="produce_classification_fr" id="youhaohuo">
                    <div class="produce_classification_fr_title">
                        <span>有好货</span>
                        <br/>
                        <s>高颜值美货</s>
                        <img src="http://yiyun.zhonyou.cn/webapp_img/youhaohuo1.png"/>
                    </div>
                    <div class="produce_classification_fr_img fl">
                        <img src="http://yiyun.zhonyou.cn/webapp_img/youhaohuo2.png"/>
                    </div>
                </div>
                <div class="fengge">
                </div>
                <div class="produce_classification_fr_one_all">
                    <div class="fl produce_classification_fr_one" id="aiguanjie">
                        <h1>爱逛街</h1>
                        <h2>超热网红款</h2>
                        <img src="http://yiyun.zhonyou.cn/webapp_img/aiguanjie1.png"/>
                        <img src="http://yiyun.zhonyou.cn/webapp_img/aiguanjie2.png"/>
                    </div>
                    <div class="fr produce_classification_fr_one" id="bimaiqingdan">
                        <h1 class="">必买清单</h1>
                        <h2>一站式攻略</h2>
                        <img src="http://yiyun.zhonyou.cn/webapp_img/bimai1.png"/>
                        <img src="http://yiyun.zhonyou.cn/webapp_img/bimai2.png"/>

                    </div>
                </div>

            </div>

        </div>
        <div class="fengge">
        </div>
        <div class="more_gift">
            <span class="gift_title">热销商品</span><span class="fr index_color_orange" onclick="open_all_goods()">查看更多&nbsp;&nbsp;></span>
        </div>
        <!--进口水果end-->

        <div class="fengge">
        </div>
        <div id="chanpin_list">
            <ul class="mui-table-view" style="border-top: none;">
                <router-link :to="{ path: '/Goodsdetail', query: { goodsId: item.goodsId } }" v-for="item  of items" :key="item.goodsId">
                <li id="list_item" >
                        <div class="produce_img">
                            <img :src="item.picture"></div>
                        <div class="produce_item">
                            <h1>{{item.goodsName}}</h1>
                            <div class="biaoqian">
                                <span class="biao_a">乐购币抵扣{{item.pointExchange}}元</span>
                                <span class="biao_b">会员价¥{{(item.promotionPrice*0.95).toFixed(2)}}</span>
                            </div>
                            <h2><s class="fl index_color_red">￥<i class="price "> <span
                                    style="font-size: 1.0rem;float: unset;color: red;">{{item.promotionPrice}}</span></i>
                            </s>
                                <span>{{item.count_num}}人已付款</span></h2>
                        </div>
                </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    import  controller from '@/controller/indexcontrollers'
    export default {
        name: 'index',
        data() {
            return {
                PageNum:0,
                pageSize:'10',
                msg: '',
                goodslist:{},
                items: [{picture:"",goodsName:"12332",pointExchange:"123",promotionPrice:220,promotionPrice:"123",count_num:"123"}]
            }
        },
        mounted() {
            this.mui("#slider").slider({
                interval: 1500 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        },
        created() {
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                controller.getgoodsInfo({
                    pageNum: 1, pageSize: 10
                }).then(res => {
                     console.log(res);
                    this.items=res.list;
                    // this.items = res.list;
                    //设置标题
                }).catch(err => {
                    console.log(err);
                });
            }
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

    #slider {
        margin-top: 3.2rem;
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

    /*礼包专区*/

    .more_gift {
        width: 100%;
        overflow: hidden;
        background: #fff;
        height: 2.6rem;
        line-height: 2.6rem;
        padding: 0 0.6rem;
    }

    .more_gift span {
        font-size: 0.9rem;
        color: #333333;
        font-weight: 600;
        height: 1.2rem;
    }

    .more_gift span.gift_title {
        padding: 0.1rem 0 0.1rem 7px;
        position: relative;
        font-weight: 600;
        border-left: solid 6px #ff3300;
    }


    /*化妆品板块样式*/

    .produce_classification {
        width: 100%;
        overflow: hidden;

        .produce_classification_index {
            width: 47.5%;
            overflow: hidden;
            background-color: #fff;
            padding-bottom: 220px;
            margin-bottom: -220px;

            .produce_classification_fl {
                margin: 0 0.4rem 0 0.6rem;
                padding: 0.6rem 0;

                .produce_classification_fl_title {
                    width: 100%;
                    padding-bottom: 1rem;

                    span {
                        display: inline-block;
                        color: #333333;
                        font-weight: 600;
                        font-size: 0.9rem;
                        padding-left: 22px;
                        height: 2.2rem;
                        line-height: 2.2rem;
                        background: url(http://yiyun.zhonyou.cn/webapp_img/new_index12.png) no-repeat left center;
                        background-size: 20px 20px;
                    }

                    s {
                        display: inline-block;
                        color: #ff3300;
                        font-weight: 400;
                        font-size: 0.8rem;
                        padding-left: 3px;

                        i {
                            display: inline-block;
                            background: #ff3300;
                            padding: 0.2rem;
                            color: #fff;

                        }
                    }

                    h1 {
                        width: 100%;
                        color: #666666;
                        width: 100%;
                        height: 1.7rem;
                        line-height: 1.7rem;
                        font-size: 0.7rem;
                        font-weight: 600;
                    }

                    h2 {
                        width: 100%;
                        color: #666666;
                        font-size: 0.8rem;
                    }
                }

                .produce_classification_fl_pic {
                    width: 100%;

                    img {
                        width: 100%;
                        margin: 0.6rem 0;
                    }
                }
            }
        }

        .produce_classification_second {
            width: 50.5%;
            overflow: hidden;

            .produce_classification_fr {
                overflow: hidden;
                background-color: #fff;
                padding: 0.6rem 0;

                .produce_classification_fr_title {
                    width: 48%;
                    overflow: hidden;
                    float: left;
                    padding: 0 0.4rem;

                    span {
                        display: inline-block;
                        overflow: hidden;
                        color: #40b366;
                        padding-left: 22px;
                        height: 1.6rem;
                        line-height: 1.6rem;
                        font-size: 0.85rem;
                        background: #fff url(http://yiyun.zhonyou.cn/webapp_img/new_index22.png) no-repeat left center;
                        font-weight: 600;
                        background-size: 22px 22px;
                    }

                    s {
                        color: #666666;
                        height: 1.2rem;
                        font-size: 0.8rem;
                    }

                    img {
                        width: 150%;
                    }
                }

                .produce_classification_fr_img {
                    width: 50%;
                    margin-top: 10%;

                    img {
                        width: 110%;
                        text-align: right;
                    }
                }
            }
        }
    }

    .produce_classification_fr_one_all {
        width: 100%;
        overflow: hidden;

        .produce_classification_fr_one {
            width: 48%;
            overflow: hidden;
            background-color: #fff;
            padding: 0.6rem 0 220px;
            margin-bottom: -220px;

            h1 {
                width: 90%;
                margin: 0 auto;
                padding-left: 24px;
                line-height: 1.7rem;
                height: 1.7rem;
                font-weight: 600;
                background: #fff url(http://yiyun.zhonyou.cn/webapp_img/buy.png) no-repeat left center;
                background-size: 20px 20px;
                font-size: 0.85rem;
            }

            h2 {
                width: 90%;
                margin: 0 auto;
                color: #666666;
                height: 1.0rem;
                line-height: 1.0rem;
                font-size: 0.8rem;
                font-weight: 500;
            }

            img {
                width: 45%;
                float: left;
                margin: 2%;
            }

        }

        .produce_classification_fr_one_all .produce_classification_fr_one:last-child h1 {
            background: #fff url(http://yiyun.zhonyou.cn/webapp_img/cart_index.png) no-repeat left center;
            background-size: 20px 20px;
        }
    }

    /*产品列表*/

    #chanpin_list {
        width: 100%;
        overflow: hidden;
        border-top: none;

        ul {
            margin-top: 1%;
            border-top: none;

            #list_item {
                width: 46%;
                float: left;
                overflow: hidden;
                background: #fff;
                cursor: pointer;
                margin: 0% 2% 2% 2%;
                border: 1px solid #F4F4F4;

                .produce_img {
                    width: 100%;
                    margin-bottom: 2%;

                    img {
                        width: 100%;
                        max-height: 10.0rem;
                        min-height: 10.0rem;
                    }
                }

                .produce_item {
                    position: relative;

                    h1 {
                        width: 92%;
                        margin: .5rem auto 0;
                        font-size: 0.8rem;
                        height: 1.2rem;
                        padding: 0.1rem 0 0.1rem;
                        line-height: 1.1rem;
                        color: #333333;
                        text-align: left;
                        letter-spacing: 0.2px;
                        overflow-y: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                    }

                    h2 {
                        width: 92%;
                        margin: 0 auto;
                        height: 2.2rem;
                        line-height: 2.2rem;

                        s {
                            display: inline-block;
                            font-size: 0.8rem;

                            i {
                                font-weight: 600;
                                font-size: 0.9rem;
                                display: inline-block;
                            }
                        }

                        span {
                            float: right;
                            font-size: 0.75rem;
                            text-align: right;
                            display: inline-block;
                            color: #666666;
                        }

                        em {
                            color: #777777;
                            display: inline-block;

                        }
                    }

                    h3 {
                        text-align: left;
                        padding: 0 0 0.6rem 0.1rem;
                        width: 100%;
                        overflow: hidden;

                    }
                }
            }

            #list_item:active {
                background: #F0F0F0;
            }

            #list_item:nth-child(even) {
                margin-left: 1%;
            }
        }
    }


    .fixed {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
