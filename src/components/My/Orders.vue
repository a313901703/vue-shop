<style scoped>
    #category{
        background: #FFF;
        margin-bottom:10px;
    }
    .cate-item{
        height:80px;
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
        width:35px;
        height:35px;
    }
    
</style>
<template>
    <div id="category">
         <yd-flexbox>
            <yd-flexbox-item>
                <div class="cate-item">
                    <div class="cate-icon">
                        <img src="../../imgs/dai-fa-huo.png">
                    </div>
                    <div class="cate-text">
                        <span>待付款</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item">
                    <div class="cate-icon">
                        <img src="../../imgs/dai-fa-huo.png">
                    </div>
                    <div class="cate-text">
                        <span>待发货</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item">
                    <div class="cate-icon">
                        <img src="../../imgs/dai-shou-huo.png">
                    </div>
                    <div class="cate-text">
                        <span>待收货</span>
                    </div>
                </div>
            </yd-flexbox-item>
            <yd-flexbox-item>
                <div class="cate-item">
                    <div class="cate-icon">
                        <img src="../../imgs/dai-ping-jia.png">
                    </div>
                    <div class="cate-text">
                        <span>待评价</span>
                    </div>
                </div>
            </yd-flexbox-item>
        </yd-flexbox>
    </div>
</template>

<script>
export default {
    name: 'orders',
    data () {
        return {
                
        } 
    }
}
</script>
<style  scoped>
    
</style>


