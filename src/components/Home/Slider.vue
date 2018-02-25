<template>
    <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
            </a>
        </yd-slider-item>
    </yd-slider>
</template>

<script>
import Vue from 'vue'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

export default {
    name: 'Slider',
    data () {
        return {
            msg: 'component Slider'
        }
    }
}
</script>

