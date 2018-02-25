<template>
    <div>
        <my-header></my-header>
        <Orders></Orders>
        <yd-grids-group :rows="4">
            <yd-grids-item v-for="(item, index) in lists" :key="index">
                <yd-icon slot="icon" :name="item.icon" color="#FF685D" v-if="item.icon" size="20px"></yd-icon>
                <img slot="icon" :src="item.img" v-else>
                <span slot="text">{{item.label}}</span>
            </yd-grids-item>
        </yd-grids-group>
        <Tab type="My"></Tab>
    </div>
</template>

<script>
import Vue from 'vue'
import Tab from '../Tab'
import MyHeader from './Header'
import Orders from './Orders'
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);

export default {
    name: 'My',
    data () {
    return {
            msg: '个人中心',
            lists:[
                {label:'我的收藏','icon':'like',img:'',color:'#ff685d'},
                {label:'购物券','icon':'',img:'http://ooafrn5be.bkt.clouddn.com/gouwuquan.png',color:'#ff685d'},
                {label:'订单','icon':'order',img:'',color:'#ff685d'},
                {label:'安全','icon':'verifycode',img:'',color:'#ff685d'},
                {label:'我的地址','icon':'location',img:'',color:'#ff685d'},
                {label:'更多','icon':'more',img:'',color:'#ff685d'},
            ],
        } 
    },
    components:{
        'my-header':MyHeader,
        Orders,
    }
}
</script>
<style  scoped>
    
</style>


