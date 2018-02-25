<template>
    <div class="container">
        <Slider></Slider>
        <Category></Category>
        <Tab></Tab>
    </div>
</template>

<script>
import Vue from 'vue'
import Tab from './Tab'
import Slider from './Slider'
import Category from './Category'
Vue.component('Tab', Tab)
Vue.component('Slider',Slider)
Vue.component('Category',Category)

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

