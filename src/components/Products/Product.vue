<template>
    <div>
        <Nav left="true" :title="title"></Nav>
        <!--轮播-->
        <yd-slider autoplay="3000">
            <yd-slider-item>
                <a href="#">
                    <img class="slider-imgs" src="http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img class="slider-imgs" src="http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img class="slider-imgs" src="http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
        <!--商品信息-->
        <div class="section" style="padding:10px">
            <yd-flexbox class="section-line">
                <yd-flexbox-item><h3>
                    三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货
                </h3></yd-flexbox-item>
                <div class="text-right">
                    <yd-icon name="share1" size="20px" ></yd-icon>
                </div>
            </yd-flexbox>
            <div class="small-space"></div>
            <yd-flexbox>
                <h2 class="product-price">￥ 4999</h2>&nbsp;&nbsp;
                <span class="product-delete-price">￥5666</span>
            </yd-flexbox>
            <div class="small-space"></div>
            <div class="small-space"></div>
            <yd-flexbox>
                <yd-flexbox-item><div class="section-left">快递￥10.00</div></yd-flexbox-item>
                <yd-flexbox-item><div class="section-body">月销10笔</div></yd-flexbox-item>
                <yd-flexbox-item><div class="section-right">浙江杭州</div></yd-flexbox-item>
            </yd-flexbox>
        </div>
        <!--规格选择-->
        <Formats/>
        <!--评价-->
        <Comments />
        <!--详情-->
        <div>
            <img src="/static/product-detail.jpg" width="100%" alt="">
        </div>
        <div style="height:50px"></div>
        <div class="payCartBtn">
            <yd-flexbox>
                <yd-flexbox-item>
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <div class="footer-item">
                                <yd-icon name="star-outline" size="25px" color="#FF685D"></yd-icon>
                            </div>
                        </yd-flexbox-item>
                        <yd-flexbox-item>
                            <div class="footer-item">
                                <router-link to="Paycart">
                                    <yd-icon name="shopcart-outline" size="25px" color="#FF685D"></yd-icon>
                                </router-link>
                            </div>
                        </yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <yd-button size="large" bgcolor="#ff0033" color="#fff" type="danger" style="margin-top:0">加入购物车</yd-button>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
    </div>
</template>

<script>
import Nav from '../Nav'
import Formats from './Formats'
import Comments from './Comments'
export default {
    name: 'Product',
    data () {
    return {
            title:'productName'
        } 
    },
    components:{
        Nav,
        Formats,
        Comments,
    }
}
</script>
<style  scoped>
    .slider-imgs{
        height:350px;
    }
    /*.section{
        padding:10px;
    }*/
    .section-left{
        text-align: left;
        color:#999;
    }
    .section-right{
        text-align: right;
        color:#999;
    }
    .section-body{
        text-align: center;
        color:#999;
    }
    .footer-item{
        width:100%;
        height:100%;
        height:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .payCartBtn{
        position: fixed;
        width:100%;
        bottom:0;
        left:0;
    }
</style>


