<template>
  <div class="left-nav">
      <ul>
          <router-link to="/Pos">
          <li>
            <i class="icon iconfont icon-wodezichan"></i>
              <p>收银</p>
          </li>
          </router-link>
          <router-link to="/Chart">
          <li>
            <i class="icon iconfont icon-tongji"></i>
              <p>统计</p>
          </li>
          </router-link>
          <li>
            <i class="icon iconfont icon-dianpu"></i>
              <p>店铺</p>
          </li>
          <li>
            <i class="icon iconfont icon-hanbao"></i>
              <p>商品</p>
          </li>
          <li>
            <i class="icon iconfont icon-huiyuanqia"></i>
              <p>会员</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {};
  }
};
</script>

<style scoped>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.iconfont {
  font-size: 24px;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav ul a{
    color: #fff;
    text-decoration: none;
}
.router-link-active li{
    color: #fff;
    background-color: #33a8ff;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>

