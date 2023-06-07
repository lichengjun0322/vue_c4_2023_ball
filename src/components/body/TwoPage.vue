<template>
  <el-card class="box-card">
    <img :src="src">
    <img :src="src">
    <img :src="src">
    <img :src="src">
</el-card>
</template>


<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>

<style>
 el-card {
    display:flex;
 }
</style>