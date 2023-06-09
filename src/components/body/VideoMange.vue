<template>
    <div class="big">
        <el-dialog title="新增视频" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="视频名称" :label-width="formLabelWidth">
                    <el-input v-model="all_name.name" autocomplete="off" width="200"></el-input>
                </el-form-item>
                <el-form-item label="视频文件" :label-width="formLabelWidth">
                    <!-- 这里的action为服务器地址 -->
                    <el-upload class="upload-demo"  :data="all_name" ref="upload" :auto-upload="false" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传视频文件，且不超过500Mb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="queding()">确
                    定</el-button>
            </div>
        </el-dialog>


        <div class="body">
            <div class="column" v-for="(item, index) in all_src" :key="index"><a :href="getUrl(item.video_href)"
                    class="a_01"><img :src="item.img_src" alt=""></a><a class="a_02" :href="getUrl(item.video_href)">
                    <p>12333333333</p>
                </a></div>
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
import bus from "../../Bus.js/bus"
import Get_data from "../../api/video";
export default {

    data() {
        return {

            from:"",
            dialogFormVisible: false,
            all_name:{
                name:""
            },
            formLabelWidth: "100px",

            page_count: 1,    //页数量
            img_nums: 2,   //视频数量
            all_src: [{ img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/202105121400.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }, { img_src: require("../../../public/img/1.jpg"), video_href: require("../../../public/video/123.mp4") }],
            // img_src:[require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),require("../../../public/img/1.jpg"),],    //返回数组 图像地址
            // video_href:[require("../../../public/video/123.mp4")]   //视频地址
        }
    },
    methods: {
        getUrl(p) {
            return "/home/num3/" + encodeURIComponent(p);
        },
        get_data() {
            Get_data();
        },
        queding() {
            //上传
            this.$refs.upload.submit();
            this.dialogFormVisible=false;
        }
    },
    created() {
        //在开始之前获取
        //this.all_src=this.get_data();

    },
    mounted() {
        bus.$on("add_video", () => {
            console.log("yes");
            this.dialogFormVisible = true;
        })
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
    display: flex;
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
    display: block;
    width: 100%;
    height: 20%;
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
    height: 100%;

}
</style>