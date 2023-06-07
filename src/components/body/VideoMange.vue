<template>
    <div class="big">
        <div class="body">
            <!-- <div class="column" v-for=""></div>  -->
                <div class="column"><a href="www.baidu.com"><img src="../../../public/img/1.jpg" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>
                <div class="column"><a href="www.baidu.com"><img src="" alt=""></a></div>  
    </div>
    <div class="fenye">
        <el-pagination background layout="prev, pager, next" :total=page_count>
        </el-pagination>
    </div>

</div>
</template>

<script>
export default {

    data(){
        return {
            page_count:1,    //页数量
            img_nums:[],   //视频数量
            img_src:[],    //返回数组 图像地址
            video_href:[]   //视频地址
        }
    }
}
</script>

<style scoped>
.big {
    width: 100%;
    height: 100%;
}

.body {
    /* margin:0 auto;
    width:80%;
    height:800px; */
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: stretch;
}

.column {
    width: 24%;
    height: 24%;
    background-color: red;
}

.fenye {
    width: 100%;
    height: 10%;
}

.el-pagination {
    text-align: center;
    padding-top: 4%;
}

a {
    display: block;
    width: 100%;
    height: 100%;
}

a:hover {
    cursor: pointer;
}

img {
    width: 100%;
    height:100%;

}</style>