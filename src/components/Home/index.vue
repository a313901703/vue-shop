<template>
    <div class="container">
        <Slider></Slider>
        <Category></Category>
        <Advertisement></Advertisement>
        <Products :_lists="list" :_pageSize="pageSize" :_listType="listType"></Products>
    </div>
</template>

<script>
import Vue from 'vue'
// import Tab from '../Tab'
import Slider from './Slider'
import Category from './Category'
import Advertisement from './Advertisement'
import Products from './Products'
// Vue.component('Tab', Tab)
Vue.component('Slider',Slider)
Vue.component('Category',Category)
Vue.component('Advertisement',Advertisement)
Vue.component('Products',Products)

export default {
    name: 'Home',
    //component:[Tab],
    data () {
    return {
            msg: 'Welcome to Your Vue.js',
            listType:1,
            pageSize: 6,
            list: [
                {
                    img: "/static/product-slider1.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "/static/product-slider2.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "/static/product-slider3.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "/static/product-slider1.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "/static/product-slider2.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "/static/product-slider3.jpg",
                    title: "三星 GALAXY S8 全网通 S8港版港行+曲屏手机 S8现货",
                    marketprice: 56.23,
                    productprice: 89.36
                }
            ],
        } 
    }
}
</script>
