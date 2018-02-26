<template>
    <div>
        <Nav title="购物车"></Nav>
        <yd-checklist v-model="checklist" ref="productList" :label="false" :callback="change" color="#ff0033">
            <yd-checklist-item :val="n" v-for="n in products" :key="n">
                <yd-flexbox style="padding: 10px 0;">
                    <img src="/static/sanxing-thumb.jpg" class="product-thumb">
                    <yd-flexbox-item align="top">
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
            </yd-checklist-item>
        </yd-checklist>
        <div class="counter">
            <yd-flexbox>
                <yd-flexbox-item style="padding:0 15px">
                    <yd-checkbox 
                        v-model="selectAll" 
                        shape="circle" 
                        :change="checkAll"
                        color="#ff0033"
                        >全选</yd-checkbox>
                </yd-flexbox-item>
                <yd-flexbox-item style="text-align:right;padding-right:15px">
                    合计: <span style="color:red">￥ 1000</span>            
                </yd-flexbox-item>
                <yd-button style="height:40px;width:80px;border-radius:0px;" shape="square" type="danger">结算</yd-button>
            </yd-flexbox>
        </div>
        <Tab type="Paycart"></Tab>
    </div>
</template>

<script>
import Nav from '../Nav'
import Tab from '../Tab.vue'
export default {
    name: 'Paycart',
    data () {
        return {
            msg: '购物车页面',
            checklist: [],
            selectAll:false,
            products:[1,2,3],
        }
    },
    components:{
        Nav,
    },
    methods:{
        change:function(value, isCheckAll) {
            this.selectAll = isCheckAll;
        },
        checkAll() {
            this.selectAll = !this.selectAll;
            this.$refs.productList.$emit('ydui.checklist.checkall', this.selectAll);
        }
    },
}
</script>
<style  scoped>
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
    .counter{
        height:40px;
        width:100%;
        background: #fff;
        position: fixed;
        bottom: 50px;
        left:0;
    }
    .counter-item{
        height: 40px;
    }

</style>


