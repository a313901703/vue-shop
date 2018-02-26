<template>
    <yd-navbar slot="navbar" :title="titleName" height="50px" fontSize="20px"></yd-navbar>
</template>

<script>
export default {
    name: 'Paycart',
    props:['title'],
    data () {
    return {
            msg: '购物车页面',
            titleName:this.title,
        } 
    }
}
</script>


