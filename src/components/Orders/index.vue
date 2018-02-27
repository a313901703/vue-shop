<template>
    <div>
        <Nav title="我的订单" left="true"></Nav>
        <div class="header">
            <yd-flexbox>
                <yd-flexbox-item>
                    <div class="header-items active">
                        <span class="active-text">全部</span>
                    </div>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <div class="header-items">
                        <span>待付款</span>
                    </div>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <div class="header-items">
                        <span>待收货</span>
                    </div>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <div class="header-items">
                        <span>待发货</span>
                    </div>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <div class="header-items">
                        <span>待评价</span>
                    </div>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <div class="lists">
            <div class="order-items" v-for="i in 3" :key="n">
                <yd-flexbox class="order-products" v-for="n in 3" :key="n">
                    <img src="/static/sanxing-thumb.jpg" class="product-thumb">
                    <yd-flexbox-item align="top" >
                        <div class="product-info-item">
                            <h5 class="product-name">三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货</h5>
                            <span> <small class="product-props">6.2寸迷夜黑S8 +;港澳台;官方标配</small></span>  
                        </div>
                        <yd-flexbox>
                            <div class="product-price">4488.00￥</div>&nbsp;&nbsp;
                            <yd-flexbox-item>
                                <div class="product-delete-price">4499.00￥</div>
                            </yd-flexbox-item>
                            <div>
                                <span class="product-quantity">× 1</span>
                            </div>
                        </yd-flexbox>
                    </yd-flexbox-item>
                </yd-flexbox>
                <div class="total-box">
                    <span>共3件商品  合计：<strong>￥8000.00</strong>(含运费￥20.00)</span>
                </div>
                <div class="total-box">
                    <div class="btns">
                        取消
                    </div>
                    <div class="btns red">
                        付款
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../Nav'
export default {
    name: 'Orders',
    components:{
        Nav,
    },
    data () {
        return {
                
        } 
    }
}
</script>
<style  scoped>
    .header{
        background-color: #fff;
    }
    .header-items{
        height:50px;
        line-height: 50px;
        text-align: center;
    }
    .header-items.active{
        border-bottom: 2px solid rgb(52,133,255);
        color:rgb(52,133,255);
    }
    .lists{
        margin-top: 1px;
    }
    .order-items{
        margin-bottom: 10px;
        background-color: #fff;
    }
    .order-products{
        border-bottom: 1px solid #ececec;
        padding:10px;
    }
    .total-box{
        height:40px;
        line-height: 40px;
        text-align: right;
        padding-right: 10px;
        border-bottom: 1px solid #ececec;
    }
    .product-thumb{
        width: 75px;
        height:75px;
        border: 1px solid #ececec;
        margin-right: 10px;
    }
    .product-info-item{
        height:60px;
    }
    .product-quantity,.product-props{
        color:#999;
    }
</style>


