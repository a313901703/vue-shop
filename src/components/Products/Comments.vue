<template>
    <div id="comments" class="section">
        <div class="comment-header">
            <span>商品评价(300)</span>
        </div>
        <div class="comment-lists">
            <div class="lists-header">
                <yd-flexbox>
                    <yd-icon name="ucenter" size="20px" color="#FF685D"></yd-icon>&nbsp;&nbsp;
                    <span>m****123</span>
                </yd-flexbox>
            </div>
            <div class="small-space"></div>
            <div class="list-body">
                <span>很好很好很好很好很好很好很好很好很好很好很好很好</span>
                <div class="small-space"></div>
                <span style="color:#999">机身颜色迷夜黑;套餐类型:官方标配;存储64G</span>
            </div>
            <div class="list-footer">
                <div class="comment-btn">查看全部</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comments',
    data () {
    return {
            
        } 
    },
    methods:{
        
    },
}
</script>
<style>
    #comments{
        padding: 0 10px;
    }
    .comment-header{
        height:30px;
        line-height: 30px;
        font-size: 14px;
    }
    .list-footer{
        height:50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .comment-btn{
        color:red;
        border:1px solid red;
        border-radius: 20px;
        padding:5px 15px;
    }
</style>


