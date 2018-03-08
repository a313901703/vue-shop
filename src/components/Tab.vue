<template>
    <div class="content">
        <yd-tabbar active-color='rgb(52,133,255)' :fixed="fixed">
            <yd-tabbar-item title="首页" link="javascript:void(0)" type="a" :active="isSelected('Home')">
                <div slot="icon" v-on:click="routers('Home')">
                    <yd-icon name="home-outline"  size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
            <yd-tabbar-item title="分类" link="javascript:void(0)" type="a"  :active="isSelected('Categories')">
                <div slot="icon" v-on:click="routers('Categories')">
                    <yd-icon name="shopcart-outline"  size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="javascript:void(0)" type="a"  :active="isSelected('Paycart')">
                <div slot="icon" v-on:click="routers('Paycart',{showTab:true})">
                    <yd-icon name="shopcart-outline"  size="20px"></yd-icon>
                </div>
                <yd-badge slot="badge" type="danger">2</yd-badge>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="javascript:void(0)" type="a" :active="isSelected('My')">
                <div slot="icon" v-on:click="routers('My')" >
                    <yd-icon name="ucenter"  size="20px"></yd-icon>
                </div>
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    props:{
        checked:String,
    },
    data () {
        return {
            msg: 'component tab',
            fixed:true,
            selected:this.checked,
            check:this.type
        }
    },
    methods: {
        select(v){
            this.selected = v;
        },
        isSelected(v){
            return this.selected == v
        },
        routers(name,params={}){
            this.replaceRouter(name,params)
        },
    },

}
</script>

