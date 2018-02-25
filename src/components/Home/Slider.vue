<template>
    <div class="slider">
        <yd-slider autoplay="3000">
            <yd-slider-item>
                <a href="#">
                    <img src="http://ooafrn5be.bkt.clouddn.com/slider1.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img src="http://ooafrn5be.bkt.clouddn.com/slider2.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="#">
                    <img src="http://ooafrn5be.bkt.clouddn.com/slider3.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
    </div>
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

