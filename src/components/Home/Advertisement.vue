<template>
    <div class="section" id="home-advertiserment">
        <div class="section-title">
            <img src="../../imgs/section2.png">
        </div>
        <yd-flexbox>
            <yd-flexbox-item>
                <div class="adv-left">
                    <img  src="http://ooafrn5be.bkt.clouddn.com/adv1.jpg">
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <yd-flexbox direction="vertical">
                    <img v-bind:style="advright"  src="http://ooafrn5be.bkt.clouddn.com/adv2.jpg">
                    <img v-bind:style="advright"  src="http://ooafrn5be.bkt.clouddn.com/adv3.jpg">
                </yd-flexbox>
            </yd-flexbox-item>
        </yd-flexbox>
        <div class="space"></div>
        <img src="http://ooafrn5be.bkt.clouddn.com/slider3.jpg" class="adv-list">
        <img src="http://ooafrn5be.bkt.clouddn.com/slider2.jpg" class="adv-list">
    </div>
</template>

<script>
import Vue from 'vue'
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.px/flexbox'
Vue.component(FlexBox.name, FlexBox)
Vue.component(FlexBoxItem.name, FlexBoxItem)

export default {
    name: 'Advertiserment',
    data () {
        return {
            msg: '首页广告模块',
            advright:{height:'100px',width:'100%'}
        }
    }
}
</script>
<style type="text/css">
    .adv-list{
        width:100%;
        height:100px;
    }
    .space{
        height:10px;
        width:100%;
        background-color: #e1e8eb;
    }
</style>




