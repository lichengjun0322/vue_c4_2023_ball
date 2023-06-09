<template>
  <div>
    <HeaderPage></HeaderPage>
    <div class="main"><router-view></router-view></div>
    <footer>版权所有 © 2023 Mozilla Firefox. 北京谋智火狐信息技术有限公司 <br>
      京ICP备11011334号-1
京公网安备 京公网安备11010102001811号</footer>
  </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
  components: { HeaderPage }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.main {
  margin: 0 auto;
  width: 80%;
  height: 800px;
  padding-top:20px;
}
footer {
  padding-top:30px;
  margin-top:5px;
  width:100%;
  height:150px;
  background-color: #fff;
  line-height:3rem;
  text-align: center;
}
</style>