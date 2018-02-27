<template>
    <div class="content">
        <Home v-if="isSelected('Home')"></Home>
        <Categories v-else-if="isSelected('Categories')"></Categories>
        <Paycart v-else-if="isSelected('Paycart')"></Paycart>
        <My v-else></My>
        <yd-tabbar active-color='rgb(52,133,255)' :fixed="fixed">
            <yd-tabbar-item title="首页" link="javascript:void(0)" type='a' :active="isSelected('Home')">
                <div slot="icon" @click="select('Home')">
                    <yd-icon name="home-outline"  size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
            <yd-tabbar-item title="分类" link="javascript:void(0)" type='a'  :active="isSelected('Categories')">
                <div slot="icon" @click="select('Categories')">
                    <yd-icon name="shopcart-outline" slot="icon" size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="javascript:void(0)" type='a'  :active="isSelected('Paycart')">
                <div slot="icon" @click="select('Paycart')">
                    <yd-icon name="shopcart-outline" slot="icon" size="20px"></yd-icon>
                </div>
                <yd-badge slot="badge" type="danger">2</yd-badge>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="javascript:void(0)" type='a' :active="isSelected('My')">
                <div slot="icon" @click="select('My')">
                    <yd-icon name="ucenter" slot="icon" size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>

<script>
import Home from './Home/index'
import Categories from './Categories/index'
import My from './My/index'
import Paycart from './Paycart/index'
export default {
    name: 'Tab',
    data () {
        return {
            msg: 'component tab',
            fixed:true,
            selected:'Home',
            check:this.type
        }
    },
    components:{
        Home,
        Categories,
        Paycart,
        My,
    },
    methods: {
        select(v){
            this.selected = v;
        },
        isSelected(v){
            return this.selected == v
        }
    },

}
</script>

