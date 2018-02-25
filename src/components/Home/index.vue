<template>
    <div class="container">
        <Slider></Slider>
        <Category></Category>
        <Advertisement></Advertisement>
        <Products></Products>
        <Tab type="Home"></Tab>
    </div>
</template>

<script>
import Vue from 'vue'
import {Layout} from 'vue-ydui/dist/lib.px/layout';
import Tab from '../Tab'
import Slider from './Slider'
import Category from './Category'
import Advertisement from './Advertisement'
import Products from './Products'
Vue.component(Layout.name, Layout);
Vue.component('Tab', Tab)
Vue.component('Slider',Slider)
Vue.component('Category',Category)
Vue.component('Advertisement',Advertisement)
Vue.component('Products',Products)

export default {
    name: 'Home',
    //component:[Tab],
    data () {
    return {
            msg: 'Welcome to Your Vue.js '
        } 
    }
}
</script>
