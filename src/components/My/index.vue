<template>
    <div>
        <my-header></my-header>
        <Orders></Orders>
        <yd-grids-group :rows="4">
            <yd-grids-item v-for="(item, index) in lists" :key="index" :link="item.link">
                <yd-icon slot="icon" :name="item.icon" :color="item.color" v-if="item.icon" size="20px"></yd-icon>
                <img slot="icon" :src="item.img" v-else>
                <span slot="text">{{item.label}}</span>
            </yd-grids-item>
        </yd-grids-group>
    </div>
</template>

<script>
import Vue from 'vue'
import MyHeader from './Header'
import Orders from './Orders'

export default {
    name: 'My',
    data () {
    return {
            msg: '个人中心',
            lists:[
                {label:'我的收藏','icon':'like',img:'',color:'#ff685d',link:'Products'},
                {label:'购物券','icon':'',img:'http://ooafrn5be.bkt.clouddn.com/gouwuquan.png',color:'#ff685d',link:'#'},
                {label:'我的会员','icon':'',img:'/static/huiyuan-icon.png',color:'#ff685d',link:'#'},
                {label:'积分中心','icon':'',img:'/static/jifen-icon.png',color:'#ff685d',link:'#'},
                {label:'我的地址','icon':'location',img:'',color:'#ff685d',link:'#'},
                {label:'帮助与反馈','icon':'question',img:'',color:'#FF9933',link:'#'},
                {label:'客服中心','icon':'',img:'/static/kefu-icon.png',color:'#ff685d',link:'#'},
                {label:'更多','icon':'more',img:'',color:'#ff0033',link:'#'},
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


