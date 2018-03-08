<template>
    <div class="header">
        <yd-flexbox>
            <div class="header-left header-item">
                <yd-icon name="ucenter-outline" size="50px"></yd-icon>
            </div>
            <yd-flexbox-item>
                <div class="header-body" @click="routers">
                    <div id="username"><h4>WTF-ASDKJHLKJ12</h4></div>
                    <div><span>15958752447</span></div>
                </div>
            </yd-flexbox-item>
            <div class="header-right header-item" @click="routers">
                <img slot="icon" src="../../imgs/right.png">   
            </div>
        </yd-flexbox>
    </div>
</template>

<script>
export default {
    name: 'my-header',
    data () {
        return {
                
        } 
    },
    methods:{
        routers(){
            this.routers('UserInfo')
        }
    }
}
</script>
<style  scoped>
    .header{
        height:120px;
        background-color: rgb(52,133,255);
        color:#fff;
        margin-bottom: 10px;
    }
    .header-item{
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-left{
        width:80px;
    }
    
    .header-right{
        width:40px;
    }
    .header-right >>> img{
        width:20px;
        height:20px;
    }
    #username{
        margin-bottom: 8px;
    }
</style>


