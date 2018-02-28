<template>
    <div class="section" style="position:relative;overflow:hidden">
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
        <div :style="bottomLine" class="divider-box">
        <div class="divider" 
            v-bind:style="[dividerStyle,n %2 == 0 ? dividerBlueStyle : '']" 
            v-for="n in 9">
        </div>
    </div>
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
            dividerStyle:{
                width:document.body.clientWidth / 12 + 'px',
                //height:7 + 'px',
                backgroundColor:'#ff0033',
                marginRight:document.body.clientWidth/24 + 'px',
            },
            dividerBlueStyle:{
                backgroundColor:'#3485ff',
            },
            bottomLine:{
                width:document.body.clientWidth * 1.25 + 'px',
                display:'flex',
                transform:[{translateX:document.body.clientWidth/24 + 'px'}],
                //flexWrap:'nowrap',
                //left:-document.body.clientWidth/24 + 'px',
            },
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
    .divider-box{
        transform: translateX(-4%);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .divider{
        transform:skewX(30deg);
        height: 7px;
    }
</style>


