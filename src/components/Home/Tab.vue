<template>
    <yd-tabbar active-color='rgb(52,133,255)' fixed="true">
        <yd-tabbar-item title="首页" link="#" active>
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#" dot>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="#" >
            <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
            <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<script>
import Vue from 'vue'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.px/tabbar'

Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)

export default {
    name: 'Tab',
    data () {
        return {
            msg: 'component tab'
        }
    }
}
</script>

