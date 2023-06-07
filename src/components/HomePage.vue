<template>
  <div>
    <HeaderPage></HeaderPage>
    <div class="main"><router-view></router-view></div>
    <footer>Footer</footer>
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
  padding-top:80px;
}
footer {
  margin-top:5px;
  width:100%;
  height:150px;
  background-color: green;
}
</style>