<template>
  <div id="app">
    <router-view></router-view>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  // metaInfo: {
  //   meta: [{
  //     name: 'keyWords',
  //     content: 'My Example App'
  //   }, {
  //     name: 'viewport',
  //     content: 'width=device-width,minimum-scale=0.5,maximum-scale=1.0'
  //   }]
  // },
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #57ab1e;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('../static/bg.jpg') no-repeat top center;
}

.el-carousel {
  position: relative;
  width: 80%;
  left: 10%;
  margin-top: 30px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
