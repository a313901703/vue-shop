<template>
    <div>
        <Nav title="设置" :left="left"></Nav>
        <yd-cell-group>
            <yd-cell-item arrow type="label" @click.native="showHead = true">
                <span slot="left">头像</span>
                <img src="/static/head-1.png" slot="right" style="width:30px;height:30px"> 
            </yd-cell-item>
            <yd-cell-item arrow type="label">
                <span slot="left">用户名</span>
                <span slot="right" class="cell-right">{{username}}</span>
            </yd-cell-item>
            <yd-cell-item arrow type="label">
                <span slot="left">密码</span>
            </yd-cell-item>
            <yd-cell-item arrow type="label" @click.native="showGender = true">
                <span slot="left">性别</span>
                <span slot="right" class="cell-right">男</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-actionsheet :items="showHeadItems" v-model="showHead" cancel="取消"></yd-actionsheet>
        <yd-actionsheet :items="showGenderItems" v-model="showGender" cancel="取消"></yd-actionsheet>
    </div>
</template>

<script>
import Nav from '../Nav'
export default {
    name: 'UserInfo',
    data () {
    return {
            msg: 'UserInfo',
            username:'abc123',
            //passwd:'123123',
            left:true,
            showHead: false,
            showHeadItems: [
                {
                    label: '拍照',
                    callback: () => {
                        this.$dialog.toast({mes: '咔擦，此人太帅！'});
                    }
                },
                {
                    label: '从相册中偷取',
                    callback: () => {
                        this.$dialog.toast({mes: '看到了不该看到的东西！'});
                    }
                }
            ],
            showGender:false,
            showGenderItems:[
                {
                    label: '男',
                    callback: () => {
                        this.$dialog.toast({mes: '选择性别男'});
                    }
                },
                {
                    label: '女',
                    callback: () => {
                        this.$dialog.toast({mes: '选择性别女'});
                    }
                }
            ],

        } 
    },
    components:{
        Nav,
    }
}
</script>
<style  scoped>
    .cell-right{
        color:#999;
    }
</style>


