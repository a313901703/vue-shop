<template>
    <div class="section">
        <yd-flexbox>
            <div class="left">
                <yd-icon name="location" size="20px"></yd-icon>
            </div>
            <yd-flexbox-item >
                <div class="body">
                    <yd-flexbox>
                        <strong>收货人: #####</strong>
                        <yd-flexbox-item style="text-align: right">
                            <strong>联系电话: 15895477444</strong>
                        </yd-flexbox-item>
                    </yd-flexbox>
                    <div class="small-space"></div>
                    <div>
                        <span>收货地址:上海上海市徐汇区###路###号15楼</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <div class="right">
                <img slot="icon" src="/static/right-gray.png">   
            </div>
        </yd-flexbox>
    </div>
</template>

<script>
export default {
    name: 'Address',
    props:{
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
    },
}
</script>
<style type="text/css">
    .left,.body,.right{
        height:50px;
    }
    .section{
        padding:10px;
    }
    .left,.right{
        display: flex;
        align-items: center;
    }
    .body{
        padding:0 10px;
    }
    .right img{
        width: 20px;
        height: 20px;
    }
</style>


