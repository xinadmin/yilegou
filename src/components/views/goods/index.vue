<template>
    <div>
        <div id="slider" class="mui-slider" style="display: block;z-index: 1;">
            <ul class="mui-slider-group " id="mui-slider-group">
                <li class='mui-slider-item'v-for="item  of picture" :key="item">
                    <a href='#'>
                        <img :src='item' data-preview-src='' data-preview-group='1' width='100%' height='100%'/>
                    </a>
                </li>
            </ul>
            <div class="mui-slider-indicator" id="mui-slider-indicator" v-for="(items,index) of picture.length">
                <div class="mui-indicator"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import controller from '@/controller/goodscontrollers'

    export default {
        data() {
            return {
                is_show: true,
                goodsId: "",
                goodsdetail: {},
                picture: []

            }
        },
        created() {

        },
        methods: {
            getgoodsdetail() {
                controller.getgoodsdetail({
                    goodsId: this.goodsId,
                }).then(res => {
                    console.log(res.goodsImages);

                    this.picture = res.goodsImages.split("&");
                    // this.goodsdetail=res.list;
                    //设置标题
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        mounted() {
            if (this.$route.query.goodsId) {
                //获取数据
                this.goodsId = this.$route.query.goodsId;
                this.getgoodsdetail();
            } else {
                this.$Dialog.show({
                    type: 'Message',
                    title: '商品Id为空'
                });
            }
            this.mui("#slider").slider({
                interval: 1500 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    }
</script>

<style scoped>

</style>