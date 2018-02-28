<template>
    <div style="padding-bottom: 50px">
        <Nav title="确认订单"></Nav>
        <Address />
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
                    </yd-flexbox-item>
                    <div>
                        <span class="product-quantity">× 1</span>
                    </div>
                </yd-flexbox>
            </yd-flexbox-item>
        </yd-flexbox>
        <yd-cell-group>
            <yd-cell-item arrow type="label">
                <span class="input-group-text" slot="left">配送费</span>
                <span class="input-group-text" slot="right">￥6.00</span>
            </yd-cell-item>
            <yd-cell-item>
                <span class="input-group-text" slot="left">买家留言 &nbsp;</span>
                <input style="font-size:13px" slot="right" type="text"  placeholder="选填:内容请和卖家确认">
            </yd-cell-item>
            <yd-cell-item>
                <span class="input-group-text" slot="right">共3件商品 &nbsp;合计：<span class="product-price">￥1388.00</span></span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group>
            <yd-cell-item arrow type="label" @click.native="showPayType = true">
                <span class="input-group-text" slot="left">支付方式</span>
                <span class="input-group-text" slot="right">{{payTypes[picked]['name']}}</span>
            </yd-cell-item>
        </yd-cell-group>

        <yd-popup v-model="showPayType" position="bottom" height="20%">
            <yd-cell-item type="radio" v-for="(payType,n) in payTypes" :key="n">
                <img :src="payType['img']" slot="icon">
                <span slot="left">{{payType['name']}}</span>
                <input slot="right" type="radio" :value="n" v-model="picked"/>
            </yd-cell-item>
        </yd-popup>

        <yd-popup v-model="showConfirm" position="center" width="80%">
            <yd-preview :buttons="btns">
                <yd-preview-header>
                    <div slot="left">付款金额</div>
                    <div slot="right" class="product-price">¥2400.00</div>
                </yd-preview-header>

                <yd-preview-item>
                    <div slot="left">商品</div>
                    <div slot="right">啦啦啦啦啦啦啦</div>
                </yd-preview-item>
                <yd-preview-item>
                    <div slot="left">商品</div>
                    <div slot="right">啦啦啦啦啦啦啦</div>
                </yd-preview-item>
                <yd-preview-item>
                    <div slot="left">商品商品</div>
                    <div slot="right">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
                </yd-preview-item>
            </yd-preview>
        </yd-popup>
    </div>  
</template>
<script>
import Nav from '../Nav'
import Address from './Address'
export default {
    name: 'ConfirmOrder',
    components:{
        Nav,
        Address,
    },
    data () {
        return {
            showPayType:false,
            picked: 1,
            payTypes:{
                1:{name:'支付宝',img:'/static/alipay.png'},
                2:{name:'微信支付',img:'http://ooafrn5be.bkt.clouddn.com/wechart-pay.png'},
            },
            showConfirm:false,
            btns: [
                {
                    color: '#F00',
                    text: '确认订单',
                    click: () => {
                        this.showConfirm = false;
                        this.$dialog.toast({mes: '前往支付！！！', timeout: 1000});
                    }
                },
            ]
        } 
    }
}
</script>
<style  scoped>
    .order-products{
        background-color: #fafafa;
        padding:5px 10px;
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
    .input-group-text{
        font-size: 13px;
    }
</style>


