<template>
    <div>
        <yd-navbar slot="navbar" title="商品列表" height="50px" fontSize="20px">
            <div slot="left" @click="back">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </div>
        </yd-navbar>
        <lists :_lists="list" :_pageSize="pageSize" :_listType="listType"></lists>
    </div>
</template>

<script>
import lists from '../Home/Products'

export default {
    name: 'Products',
    components:{
        lists,
    },
    data () {
        return {
            msg: '商品列表页',
            listType:4,
            pageSize: 6,
            list: [
                {
                    img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                    title: "标题标题标题标题标题1",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                    title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                    title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                    title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                    title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                    title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                    marketprice: 56.23,
                    productprice: 89.36
                }
            ],
        } 
    },
    methods:{
        back(){
            console.log(this.$router)
            //this.$router.go(-1);
        }
    },
}
</script>


