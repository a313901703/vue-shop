<style scoped>
    #category{
        background: #FFF;
        margin-bottom:10px;
    }
    .cate-item{
        height:100px;
        width:100%;
        padding:15px 0;
    }
    .cate-icon{
        align-items: center;
        display: flex;
        justify-content: center;
    }
    
    .cate-text{
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    .cate-text span{
        color:#999;
    }
    .cate-icon img{
        width:60px;
        height:60px;
    }
    
</style>
<template>
    <div id="category">
         <yd-flexbox>
            <yd-flexbox-item>
                <div class="cate-item">
                    <div class="cate-icon">
                        <img src="http://ooafrn5be.bkt.clouddn.com/cat1.png">
                    </div>
                    <div class="cate-text">
                        <span>热卖爆品</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item" @click="toProducts">
                    <div class="cate-icon">
                        <img src="http://ooafrn5be.bkt.clouddn.com/cat2.png">
                    </div>
                    <div class="cate-text">
                        <span>智慧生活</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item" @click="toProducts">
                    <div class="cate-icon">
                        <img src="http://ooafrn5be.bkt.clouddn.com/cat3.png">
                    </div>
                    <div class="cate-text">
                        <span>好货清单</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item" @click="toProducts">
                    <div class="cate-icon">
                        <img src="http://ooafrn5be.bkt.clouddn.com/cat4.png">
                    </div>
                    <div class="cate-text">
                        <span>智能家电</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item" @click="toProducts">
                    <div class="cate-icon">
                        <img src="http://ooafrn5be.bkt.clouddn.com/cat5.png">
                    </div>
                    <div class="cate-text">
                        <span>分类5</span>
                    </div>
                </div>
            </yd-flexbox-item>
        </yd-flexbox>
    </div>
</template>

<script>
export default {
    name: 'Category',
    data () {
        return {
            msg: 'component Category'
        }
    },
    methods:{
        toProducts(){
            this.$router.push('Products')
        },
    },
}
</script>


