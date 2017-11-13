<template>
  <div id="app"  class=" clearfix">
    <leftNav></leftNav>
    <div class="main">
    <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from "@/components/common/leftNav";
export default {
  name: "app",
  components: {
    leftNav
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.clearfix:after {
  /*最简方式*/
  content: '';
  display: block;
  clear: both;
}

.clearfix {
  /*兼容 IE*/
  zoom: 1;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
   height:100%;
}
.main{
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
  overflow: auto;
}
</style>
