<template>
    <yd-navbar slot="navbar" :title="titleName" height="50px" fontSize="20px" bgcolor="rgb(52,133,255)" color="#fff">
        <div slot="left" v-if="leftItem" @click="goBack">
            <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
        </div>
    </yd-navbar>
</template>

<script>
export default {
    name: 'Paycart',
    props:['title','left'],
    data () {
    return {
            msg: '购物车页面',
            titleName:this.title,
            leftItem:this.left ? this.left : false,
        } 
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>


