<template>
        <yd-layout>
            <yd-navbar slot="navbar" title="全部分类" height="50px" fontSize="20px">
            </yd-navbar>
            <yd-scrolltab>
                <yd-scrolltab-panel :label="'分类' + n" icon="demo-icons-category1" v-for="n in 6" :key="n">
                    <div >
                        <yd-grids-group :rows="3">
                            <yd-grids-item v-for="i in 6" :key="i" link="Products">
                                <img slot="icon" src="http://ooafrn5be.bkt.clouddn.com/category1.png">
                                <span slot="text">子分类{{i}}</span>
                            </yd-grids-item>
                        </yd-grids-group>
                    </div>
                    <div v-if="n === 6" style="height:50px"></div>
                </yd-scrolltab-panel>
            </yd-scrolltab>
            <Tab checked="Categories" />
        </yd-layout>

</template>

<script>
import Tab from '../Tab.vue'

export default {
    name: 'Categories',
    components:{Tab},
    data () {
    return {
            msg: '分类页',
        } 
    }
}
</script>
<style  scoped>
    .container{
        height: 100%;
        margin-bottom: 50px;
    }
    .content{
        height:100%;
        padding-bottom: 80px;
    }
</style>


