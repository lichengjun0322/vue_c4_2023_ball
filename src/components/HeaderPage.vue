<template>
  <div class="header">
    <div class="ico">
        <img src="" alt="">
    </div>
    <div class="header_left">
        <li><router-link to="/home/num1">1</router-link></li>
        <li><router-link to="/home/num2">1</router-link></li>
        <li><router-link to="/home/num3">1</router-link></li>
        <li><router-link to="/home/num4">1</router-link></li>
    </div>
    <div class="header_right">
        <li><a>1</a></li>
    </div>
  </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
* {
    padding:0;
    margin:0
}
a {
  text-decoration: none;
  color:black;
}

.router-link-active {
  text-decoration: none;
  color:black;
}
li {
    list-style: none;
    line-height:80px;
    text-align: center;
}
.header {
    position: fixed;
    z-index:999;
    display: flex;
    height:80px;
    width:100%;
    background-color: rgb(255,255,255);
    border-bottom: solid 1px #eaecef;
}
.ico {
    width:20%;
    height:100%;
}
.header_left{
    display:flex;
    width:55%;
    height:100%;
    justify-content: space-between;
    align-content: stretch;
}
.header_left>li {
    background-color:rgb(255,255,255);
    width:24.8%;
}
.header_left>li:hover {
    cursor:pointer;
    background-color: rgb(240,240,240);
}
.header_right {
    width:25%;
    height: 100%;
}
</style>