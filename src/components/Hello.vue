<template>
  <div class="hello">
    <div class="level">
      <router-link :to="{ name: 'Third'}" class="router-link">三等奖（5名）</router-link>
      <router-link :to="{ name: 'Second'}" class="router-link">二等奖（2名）</router-link>
      <router-link :to="{ name: 'First'}" class="router-link">一等奖（1名）</router-link>
    </div>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.router-link {
  font-size: 18px;
  color: #888;
  text-decoration: none;
  font-weight: bold;
}

.router-link-active {
  color: #db1315;
}



/* .hello {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
} */

.level {
  padding-top: 200px;
  padding-bottom: 10px;
}
</style>
