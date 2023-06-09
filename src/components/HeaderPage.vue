<template>
    <div class="all">
        <!-- <div class="show_out" ref="out">
            <button ref="add_video" @click="add_video()">视频添加</button>
        </div> -->
        
        <div class="header">

            <div class="ico">
                <img src="../../public/img/8.jpg" alt="">
            </div>
            <div class="header_left">
                <li><router-link to="/home/num1">首页</router-link></li>
                <li @mouseover="come_out()" @mouseleave="cone_over()"><router-link to="/home/num2">视频管理</router-link></li>
                <li><router-link to="/home/num3">录像分析</router-link></li>
                <li><router-link to="/home/num4">战术集合</router-link></li>
            </div>
            <el-button type="danger" round style="width: 200px;">危险按钮</el-button>
            <el-button type="primary" round @click="add_video()">上传视频<i class="el-icon-upload el-icon--right"></i></el-button>
            <el-button type="info" round style="width: 100px;" @click="logout()">退出</el-button>
        </div>
    </div>
</template>

<script>
import bus from "../Bus.js/bus"
export default {
    data() {
        return {
            is_selected: 0
        }
    },

    methods: {
        come_out() {
            this.$refs.out.style = "display:block";
        },
        cone_over() {
            this.$refs.out.style = "display:block";
        },
        add_video() {
            bus.$emit("add_video", "yes");
        },
        logout() {
            const h = this.$createElement;
                this.$notify({
                    title: '提示信息',
                    type: 'success',
                    message: h('i', { style: 'color: teal' }, '您已经成功退出系统')
                });
            this.$router.push("/")
        },

    },

}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0
}

.el-menu-item {
    margin-top: 25px;
    margin-right: 200px;
    font-size: 20px;
}

.all {
    position: relative;
    width: 100%;
    height: 80px;
}

.show_out {
    line-height: 60px;
    text-align: center;
    display: block;
    position: fixed;
    height: 60px;
    background-color: #fff;
    left: 33.8%;
    top: 80px;
    width: 13.64%;
    z-index: 999;
}

img {
    width: 95%;
    height: 95%;
}


button:hover {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
}

.router-link-active {
    text-decoration: none;
    color: black;
}

li {
    list-style: none;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
}


/* .header_left :nth-child(2) {
    background-color: red;
} */
.header {
    position: fixed;
    z-index: 999;
    display: flex;
    height: 80px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-bottom: solid 1px #eaecef;
}

.ico {
    width: 20%;
    height: 100%;
}

.header_left {
    display: flex;
    width: 55%;
    height: 100%;
    justify-content: space-between;
    align-content: stretch;
}

.header_left>li {
    background-color: rgb(255, 255, 255);
    width: 24.8%;
}

.header_left>li:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
}

.header_right {
    width: 25%;
    height: 100%;
}

.el-button{
    font-size: 20px;
}
</style>
