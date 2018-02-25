<template>
    <yd-tabbar active-color='rgb(52,133,255)' :fixed="fixed">
        <yd-tabbar-item title="首页" link="/" :active="selected('Home')">
            <yd-icon name="home-outline" slot="icon" size="20px"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" link="/Categories" :active="selected('Categories')">
            <yd-icon name="shopcart-outline" slot="icon" size="20px"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#" dot :active="selected('paycart')">
            <yd-icon name="shopcart-outline" slot="icon" size="20px"></yd-icon>
            <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/My" :active="selected('My')">
            <yd-icon name="ucenter" slot="icon" size="20px"></yd-icon>
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
    props:['type'],
    data () {
        return {
            msg: 'component tab',
            fixed:true,
            check:this.type
        }
    },
    methods: {
        selected: function (value) {
            return this.type == value
        }
    },
}
</script>

