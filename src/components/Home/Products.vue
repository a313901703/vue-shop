<template>
    <div class="section">
        <!-- <div class="section-title">
            <img src="../../imgs/58ac0ca3Nb71f0444.png">
        </div> -->
        <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
            <yd-list :theme="listType" slot="list">
                <div v-for="item, key in list" :key="key" v-on:click="routers('Product')">
                    <yd-list-item  type="div">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            部分描述信息
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div class="other-lists">
                                <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                                <span class="list-del-price">¥{{item.productprice}}</span>
                            </div>
                            <div>已售3999</div>
                        </yd-list-other>
                    </yd-list-item>
                </div>
            </yd-list>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

            <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

        </yd-infinitescroll>
    </div>
</template>

<script>
export default {
    name: 'Products',
    props:['_lists','_pageSize','_listType'],
    data () {
        return {
            msg: '商品列表组件',
            page: 1,
            listType:this._listType,
            list:this._lists,
            pageSize:this._pageSize,
            // defaultPageSize: 6,
            // defaultList: [
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
            //         title: "标题标题标题标题标题1",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     },
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
            //         title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     },
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
            //         title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     },
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
            //         title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     },
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
            //         title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     },
            //     {
            //         img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
            //         title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
            //         marketprice: 56.23,
            //         productprice: 89.36
            //     }
            // ],
        }
    },
     methods: {
        productDetail(){
            console.log('1231')
            //this.$router.push({name:'ProductDetail'})
        },
        loadList() {
            this.list = [...this.list, ...this.list];
            if (this.page == 3) {
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                return;
            }
            this.page++;
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            // this.$http.get('http://list.ydui.org/getdata.php?type=backposition', {
            //     params: {
            //         page: this.page,
            //         pagesize: this.pageSize
            //     }
            // }).then(function (response) {
            //     const _list = response.body;

            //     this.list = [...this.list, ..._list];

            //     if (_list.length < this.pageSize || this.page == 3) {
            //         /* 所有数据加载完毕 */
            //         this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            //         return;
            //     }

            //     /* 单次请求数据完毕 */
            //     this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

            //     this.page++;
            //     console.log(this.page)
            // });
        },
    }
}
</script>


