<template>
    <div class="section">
        <yd-grids-group :rows="4">
            <yd-grids-item>
                <img slot="icon" src="../../imgs/dai-fu-kuan.png" >
                <span slot="text">待付款</span>
            </yd-grids-item>
            <yd-grids-item>
                <img slot="icon" src="../../imgs/dai-fa-huo.png" >
                <span slot="text">带发货</span>
            </yd-grids-item>
            <yd-grids-item>
                <img slot="icon" src="../../imgs/dai-shou-huo.png" >
                <span slot="text">待收货</span>
            </yd-grids-item>
            <yd-grids-item>
                <img slot="icon" src="../../imgs/dai-ping-jia.png" >
                <span slot="text">待评价</span>
            </yd-grids-item>
        </yd-grids-group>
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


