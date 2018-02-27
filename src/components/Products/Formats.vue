<template>
    <div class="section">
        <yd-cell-group style="margin-bottom:0">
            <yd-cell-item arrow @click.native="showProps = true">
                <span slot="left">请选择规格</span>
            </yd-cell-item>
            <yd-cell-item arrow @click.native="showFormat = true">
                <span slot="left">产品参数</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-popup v-model="showFormat" position="bottom" height="60%">
            <div class="model-header">
                <span>产品参数</span>
            </div>
            <yd-cell-group>
                <yd-cell-item v-for="n in 10" :key="n">
                    <div slot="left" >
                        <span class="item-key">上市时间</span>
                        <span class="item-value">2017-5</span>
                    </div>
                </yd-cell-item>
            </yd-cell-group>
        </yd-popup>

        <yd-popup v-model="showProps" position="bottom" height="70%">
            <div class="modal-line">
                <yd-flexbox>
                    <img src="/static/sanxing-thumb.jpg" alt="" style="width:100px;height:100px;">
                    <yd-flexbox-item>
                        <div style="width:100px;height:100px;">
                        <yd-flexbox direction="vertical">
                            <yd-flexbox-item></yd-flexbox-item>
                            <yd-flexbox-item>
                                <span class="product-price">￥4888</span><br>
                                <span >库存30</span><br>
                                <span >请选择机身颜色</span>
                            </yd-flexbox-item>
                        </yd-flexbox>
                        </div>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
            <div class="modal-props-body">
                <div class="modal-line" v-for="(item,n) in propslist" :key="n">
                    <strong>{{item.name}}</strong>
                    <div class="small-space"></div>
                    <div>
                        <yd-flexbox>
                            <div class="props-items" v-bind:class="{active:isChecked(props.id)}"
                                v-for="props in item.props" @click="checkProps(item.id,props.id)">{{props.name}}</div>
                        </yd-flexbox>
                    </div>
                </div>
                <div class="modal-line">
                    <yd-flexbox>
                        <yd-flexbox-item>购买数量</yd-flexbox-item>
                        <div>
                            <yd-spinner max="99" unit="1" height="30px" width="80px" v-model="quantity"></yd-spinner>
                            <span></span>
                        </div>
                    </yd-flexbox>
                </div>
            </div>
            <div @click="addPayCart" class="payCartBtn">
                <yd-button size="large" bgcolor="#ff0033" color="#fff" type="danger" >加入购物车</yd-button>
            </div>
        </yd-popup>
    </div>
</template>

<script>
export default {
    name: 'Formats',
    data () {
        return {
            showFormat: false,
            showProps: false,
            quantity:1,
            propslist:[
                {id:1,name:'机身颜色',props:[
                    {id:1,name:'烟晶灰'},
                    {id:2,name:'迷夜黑'},
                ]},
                {id:2,name:'版本',props:[
                    {id:3,name:'港澳台'},
                    {id:4,name:'美国'},
                    {id:5,name:'中国'},
                ]},
            ],
            checkPropsList:{},
        } 
    },
    methods:{
        addPayCart(){
            let keys = Object.keys(this.checkPropsList)
            let _item
            for (var i = 0; i < this.propslist.length; i++) {
                _item = this.propslist[i]
                if (!keys.find((n)=> n == _item.id)) {
                    this.$dialog.toast({
                        mes: '请选择'+_item.name,
                        timeout: 1500,
                        icon: 'error'
                    });
                    return 
                }
            }
            this.showProps = false;
            //加入购物车
            this.$dialog.toast({
                mes: '加入购物车成功',
                timeout: 1500,
                icon: 'success'
            });
        },
        checkProps(key,value){
            this.checkPropsList = Object.assign({},this.checkPropsList,{[key]:value})
        },
        isChecked(value){
            return Object.values(this.checkPropsList).includes(value)
        }
    },
}
</script>
<style>
    .item-key{
        color:#999;
        margin-right:10px;
    }
    .model{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .model-header{
        height:40px;
        width:100%;
        line-height: 40px;
        text-align: center;
        font-size:18px;
    }
    .model-props-header{
        padding:10px;
        border-bottom: 1px solid #999;
    }
    .modal-props-body{

    }
    .modal-line{
        padding:10px;
        border-bottom: 1px solid #999;
    }
    .props-items{
        margin-top: 7px;
        border:1px solid #fbfbfb;
        border-radius: 20px;
        height: 25px;
        width:80px;
        line-height: 25px;
        text-align: center;
        margin-right: 10px;
        background: #f8f8f8;
    }
    .props-items.active{
        color:#fff;
        border:1px solid red;
        background: red;
    }
    .payCartBtn{
        position: absolute;
        width:100%;
        bottom:0;
        left:0;
    }
    ::-webkit-scrollbar{
        display: none;
    };
</style>


