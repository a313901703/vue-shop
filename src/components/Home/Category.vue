<style scoped>
    #category{
        background: #FFF;
        margin-bottom:10px;
    }
    .cate-item{
        height:80px;
    }
</style>
<template>
    <div id="category">
        <yd-grids-group :rows="3">
            <yd-grids-item>
                <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
                <span slot="text">image</span>
            </yd-grids-item>
            <yd-grids-item>
                <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
                <span slot="text">iconfont</span>
            </yd-grids-item>
            <yd-grids-item>
                <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
                <span slot="text">iconfont</span>
            </yd-grids-item>
        </yd-grids-group>
    </div>
</template>

<script>
import Vue from 'vue'
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.px/flexbox'
import {GridsGroup, GridsItem} from 'vue-ydui/dist/lib.px/grids';

Vue.component(GridsGroup.name, GridsGroup);
Vue.component(GridsItem.name, GridsItem);
Vue.component(FlexBox.name, FlexBox)
Vue.component(FlexBoxItem.name, FlexBoxItem)

export default {
    name: 'Category',
    data () {
        return {
            msg: 'component Category'
        }
    }
}
</script>


