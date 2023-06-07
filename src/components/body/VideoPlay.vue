<template>
    <div class="big">
        <div class="top">
            <el-button type="danger" plain>开始转换</el-button>
            <el-button type="danger" plain>文本导出</el-button>
            <el-button type="danger" plain>Word导出</el-button>
        </div>
        <div class="bottom">
            <div class="left"><vue-core-video-player src=""></vue-core-video-player>
            </div>
            <div class="right">
                <div class="come_out"></div>
                <div class="inp">
                    <input type="text" class="enter">
                    <div class="but"> <button type="primary" class="nihao" @click="cli()">主要按钮</button></div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

export default {
    methods: {
        cli() {
            //console.log(document.querySelector(".enter").value)
            if(document.querySelector(".enter").value==""){
                console.log("");
            }else{
                //获取时间
                let valueName =
                    (new Date().getFullYear() +
                    "/" +
                    (new Date().getMonth() + 1) +
                    "/" +
                    new Date().getDate() +
                    " " +
                    (new Date().getHours() >= 10 ? new Date().getHours() : "0" + new Date().getHours()) +
                    ":" +
                    (new Date().getMinutes() >= 10 ? new Date().getMinutes() : "0" + new Date().getMinutes()) +
                    ":" +
                    (new Date().getSeconds() >= 10 ? new Date().getSeconds() : "0" + new Date().getSeconds())).toString();
                    
                let new_node_01 = document.createElement("LI");
                let text_node_01 = document.createTextNode(valueName);
                new_node_01.appendChild(text_node_01);

                new_node_01.classList.add("li_01");


                let new_node=document.createElement("LI");
                let text_node=document.createTextNode(document.querySelector(".enter").value);
                new_node.appendChild(text_node);
                new_node.classList.add("li_02");

                //总的div
                let new_node_02=document.createElement("DIV");
                new_node_02.appendChild(new_node_01);
                new_node_02.appendChild(new_node);

                document.querySelector(".come_out").appendChild(new_node_02);
                document.querySelector(".enter").value="";
            }
        }
    }
}
</script>

<style>
.el-button {
    margin-top: 6px;
    margin-left: 6px;
}

.big {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top {
    width: 100%;
    height: 7%;
    background-color: red;
}

.bottom {
    height: 91%;
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.left {
    width: 74%;
    height: 100%;
    background-color: red;
}

.right {
    width: 24%;
    height: 100%;
    background-color: green;
    display: flex;
    flex-direction: column;
}

.come_out {
    width: 100%;
    height: 90%;
    background-color: #fff;
    border: black solid 1px;
    display:flex;
    flex-direction: column;
    overflow: scroll;

}
.come_out>div {
    width:100%;
    height:10%;
}
/* .come_out>div>li {
    
    height:10%;
    width:100%;

} */
.inp {
    width: 100%;
    height: 10%;
    display: flex;
}

input {
    display: block;
    width: 60%;
    height: 100%;
}

.but {
    width: 40%;
    height: 100%;
    background-color: #fff;
}

.nihao {
    width: 100%;
    height: 100%;

}
.li_01 {
    height:30%;
    font-size:small;
    list-style: none;
}
.li_02 {
    height:70%;
    font-size:large;
    list-style: none;
}
</style>