<template>
  <div id="header">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#444"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/articleList">文章</el-menu-item>
      <el-menu-item index="/album">相册</el-menu-item>
      <el-menu-item index="/msgboard">留言板</el-menu-item>
      <el-menu-item index="/game">小游戏</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
    <player></player>
    <!-- <hr> -->
    <router-view></router-view>
  </div>
</template>

<script>
import player from "@/views/home/player/player";
export default {
  data() {
    return {
      activeIndex1: "homepage"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: { player: player }
};
</script>

<style lang="scss">
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 0px;
}
</style>
