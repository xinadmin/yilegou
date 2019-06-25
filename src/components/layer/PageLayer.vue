<template>
    <div class="app-warp pageLayer">



        <router-view name="pageLayer"></router-view>

        <NavBar />

    </div>
</template>

<script>

import NavBar from '@/components/nav/NavFooter'

export default {
    mounted(){
        this.getUserInfo();
    },
    methods: {
        // 获取UserInfo，并用于token前置检测
        getUserInfo(){
            // myIndexVisit.getMemberInfo().then(res=>{
            //     this.$store.commit('setUserInfo', {
            //         mobile: res.mobile,
            //         nickName: res.nickName,
            //         userheaderimg: res.userImg
            //     });
            // }).catch(err=>{
            //     if(err.code === 25030){
            //         //token失效
            //         this.$store.commit('setToken', '');
            //     }
            // });
        }
    },
    components: {
        NavBar
    }
}
</script>

<style lang="scss">
.pageLayer{
    padding-bottom: 95px;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    &.header-p{
        padding-top: 88px;
    }
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 88px;
        line-height: 88px;
        /*text-align: center;*/
        background-color: #37C4A4;
        font-size: 36px;
        color: #FFF;
    }
}
</style>

