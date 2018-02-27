<template>
    <yd-navbar slot="navbar" :title="titleName" height="50px" fontSize="20px" bgcolor="rgb(52,133,255)" color="#fff">
        <div slot="left" v-if="showGoBack" @click="goBack">
            <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
        </div>
    </yd-navbar>
</template>

<script>
export default {
    name: 'Paycart',
    props:{
        title:String,
        showGoBack:{
            default: true,
            type: Boolean,
        },
    },
    data () {
    return {
            msg: '购物车页面',
            titleName:this.title,
        } 
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        // leftItem(){
        //     return window.history.length > 1;
        // }
    },
}
</script>


