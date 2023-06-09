<template>
    <div class="big">
        <div class="body">
            <div class="column" v-for="(item,index) in all_src" :key="index" ><a :href="getUrl(item.video_href)"  class="a_01" ><img :src="item.img_src" alt=""></a><a class="a_02" :href="getUrl(item.video_href)"><p>12333333333</p></a></div>
            <!-- <div class="column" v-for=""></div>  -->
                <!-- <div class="column"><a href="www.baidu.com"  class="a_01"><img src="../../../public/img/1.jpg" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="/home/num3?a=1" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div>
                <div class="column"><a href="www.baidu.com" class="a_01"><img src="" alt=""></a><a class="a_02" href="www.baidu..com">12333333333</a></div> -->
       
    </div>
    <div class="fenye">
        <el-pagination background layout="prev, pager, next" :total=page_count>
        </el-pagination>
    </div>

</div>
</template>

<script>
import get_data from "../../api/video";
export default {

    data(){
        return {
            page_count:1,    //页数量
            img_nums:2,   //视频数量
            all_src:[{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../../picture/202105121400.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")},{img_src:require("../../../public/img/1.jpg"),video_href:require("../../../public/video/123.mp4")}],
            // img_src:[require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),],    //返回数组 图像地址
            // video_href:[require("../../../public/video/123.mp4")]   //视频地址
        }
    },
    methods:{
        getUrl(p){
            return "/home/num3/"+encodeURIComponent(p);
        },
        get_data(params) {
            console.log("123123123")
            getAll_branch(params).then((res) => {
                this.tableData = res.data.data;
                this.temp = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
            this.form.Branch_address = "";
            this.form.Branch_square = "";
            this.form.Branch_name = "";
        },
    },
    created(){
        //console.log(123);
        //在开始之前获取

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
    height: 30%;
    /* background-color: red; */
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
}

.fenye {
    width: 100%;
    height: 10%;
}

.el-pagination {
    text-align: center;
    padding-top: 4%;
}

.a_01 {
    display: block;
    width: 100%;
    height: 76%;
}

.a_02 {
    display:block;
    width:100%;
    height:20%;
    text-decoration: none;
    line-height: 20%;
    text-align: center;
    color: black;
}
.a_01:hover {
    cursor: pointer;
}
img {
    width: 100%;
    height:100%;

}
</style>