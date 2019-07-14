<template>
    <div class="Dialog">

        <!-- Mask -->
        <div class="Mask" v-if="isShow" :class="type === 'loading' && isShow ? 'Mask-loading' : ''"></div>

        <!-- <transition name="FadeIn" v-on:after-leave="afterLeave"> -->
            <!-- Dialog -->
            <div class="Dialog-content" v-if="isShow && type == 'confirm'">
                <div class="Dialog-text">
                    {{title}}
                </div>
                <div class="Dialog-btn">
                    <div class="btn-item" v-for="(item, index) of btnArray" :key="'Dialog-btn_' + index" :class="item.class"  @click="handleAction(item.name)">{{item.title}}</div>
                </div>
            </div>
            <div class="Dialog-content" v-if="isShow && type == 'Alert'">
                <div class="Dialog-text">
                    {{title}}
                </div>
                <div class="Dialog-btn">
                    <div class="btn-item" @click="handleAction('confirm')">{{btnArray[1].title}}</div>
                </div>
            </div>
            <div class="Dialog-content Dialog-1" v-if="isShow && type == 'Message'">
                <div class="icon" :class="'icon-'+ messageType"></div>
                <span class="text">{{title}}</span>
            </div>
            <div class="Dialog-content" v-if="isShow && type == 'Slot'">
                <slot name="content"></slot>
            </div>
            <div class="Dialog-loading" :class="title != '' ? 'hasText' : ''" v-if="isShow && type == 'loading'">
                <i class="iconfont icon-loading"></i>
                <span class="text" v-if="title != ''">{{title}}</span>
            </div>
        <!-- </transition> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
            title: '',
            type: '',
            btnArray: [{
                    title: '取消',
                    name: 'cancel',
                    class: ''
                },
                {
                    title: '确定',
                    name: 'confirm',
                    class: 'confirm'
                }
            ],
            messageType: 'success',
            time: 1500,
            callback: null
        }
    },
    methods: {
        //关闭Toast
        Close(){
            setTimeout(()=>{
                this.destroyEl();
            }, 200)
        },
        //处理事件
        handleAction(action){
            if(action === 'maskclose' && !this.allowClose) return;

            this.isShow = false;
            this.Close();
            setTimeout(() => {
                if ((action === 'close' || action === 'maskclose') &&  this.type === 'confirm') return;
                this.callback(action, this);
            }, 0);89
        },
        DialogTimeOut() {
            //定时消失
            if (this.isShow && (this.type === "Message" || this.type === "Slot") && this.time > 0) {
                setTimeout(() => {
                    this.isShow = false;
                    //触发toastClose事件
                    this.callback('confirm', this);
                }, this.time)
            }
        },
		destroyEl(){
			// Destroy El
        	this.$el.remove();
			this.$destroy(true);
		}
    },
    watch:{
        isShow(newVal, oldVal){
            if(!newVal){
                this.Close();
            }else{
                this.DialogTimeOut();  
            }
        }
    }
}
</script>

<style lang="scss">
.Dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9998;
    .Mask{
        position: fixed;
        z-index: 9998;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(0, 0, 0, 0.5);
        &.Mask-loading{
            background: rgba(0, 0, 0, 0);
        }
    }
    .Dialog-content{
        width: 465px;
        background: #FFF;
        position: fixed;
        top: 50%;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 32px;
        border-radius: 10px;
        transform: translate(0, -50%);
        z-index: 9999;
        animation-name: DialogfadeInDown;
        animation-duration: .3s;
        animation-fill-mode: both;
        .Dialog-text {
            line-height: 42px;
            padding: 65px 75px;
            text-align: center;
        }

        .Dialog-btn {
            height: 88px;
            display: flex;
            line-height: 88px;
            text-align: center;
            border-top: 1px solid #ddd;
        }

        .Dialog-btn .btn-item {
            flex: 1;
            box-sizing: border-box;
        }

        .Dialog-btn .btn-item.confirm {
            color: #37c4a4;
        }

        .Dialog-btn .btn-item+.btn-item {
            border-left: 1px solid #ddd;
        }

        &.Dialog-1 {
            padding: 52px 0;
            text-align: center;
            .icon {
                width: 36px;
                height: 36px;
                vertical-align: bottom;
                margin-right: 15px;
                display: inline-block;
                &.icon-success {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAUVBMVEUAAAA3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKQ3xKTnRLhqAAAAGnRSTlMAz/fG7zMUAmk/myEWCdekWezYRHWmRe2yWk1ABGcAAADvSURBVDjLjdTbjoMgFIXhhcwMjCh4qHZmvf+DtimhSjeo/5XGLwET2NjnbFBj04wqWIdiZtDcpQcjzez5kZ8/SN+yUNvvTadZTHc7M7HS9Fa9ZjWdVmx5UBvNzMNe/2j8MfLmiQaeNDxRZdfNHNLeAVcxvzBJOdiaAcxffLEIVYPvr/gWoNIHdasYKozp6Qe3suEdzdsgKmHY7FFUm9nQyFxJwzsUM2WlocLCXEnDAMtcSUMLx1xJQwfoXEmj01HZlDAcxKHzwnhz4fiuFy/C+ZW6eDmTUmWjussDY2udxFLr+RD7Nyjm7BLH4ZKPwwdnAFkWoDdK4AAAAABJRU5ErkJggg==) center center no-repeat;
                    background-size: 36px;
                }

                &.icon-fail {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAAD/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj/XFj9uJGjAAAAFXRSTlMAqCDf2M3G+q+lm1lEFQnsaSLtamjOcD68AAAAy0lEQVQ4y42UWw6EIAxFKwoKvkfv/rc6M0YqaYi556sfJ2kpbaXEndGvfb/6eDqpMwYUhLGiTB0M3WSUJaFCWkpn9qji58LRVJZOrSVAsYScMeGFdL8Lr0yXpAW1A5Sh1bKuHqrjpMlxI06tf1fD44g02ZHHCr9YE4hkq7lCTb7LBk1xWxpkNomwlnUQxcNa1oGXFdayDj7Sw1rWQU9JVDqqcKoFXDN34luYD6ZGhRk6anyZRaBWillOZs2Zg8GfHv6IKe7I5/BwUvAFJ+JDUn2RmNUAAAAASUVORK5CYII=) center center no-repeat;
                    background-size: 36px;
                }
            }
            .text {
                line-height: 36px;
                display: inline-block;
            }
        }

    }
    .Dialog-loading{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 50%;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 10px;
        width: 200px;
        min-height: 100px;
        padding: 50px 0;
        z-index: 9999;
        transform: translate(0, -50%);
        text-align: center;
        i{
            display: inline-block;
            font-size: 100px;
            color: #fff;
            animation: DialogLoading 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .text{
            display: block;
            color: #fff;
            padding-top: 40px;
            line-height: 0;
        }
        &.hasText{
            padding-top: 40px;
            .text{
                margin-bottom: -15px;
            }
        }
    }
}


@keyframes DialogfadeInDown {
    from {
        transform: translate3d(0, -80%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0, -50%);
        opacity: 1;
    }
}

@keyframes DialogLoading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>
