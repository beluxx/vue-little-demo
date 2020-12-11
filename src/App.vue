<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <hr />

    <!-- 使用 router-link 组件来导航 -->
    <!-- 通过传入 `to` 属性指定链接 -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- 传递路由参数到命名路由 -->
    <router-link :to="{ name: 'category', params: { language: 'php' }}">PHP</router-link>
    <router-link :to="{ name: 'category', params: { language: 'golang' }}">Golang</router-link>
    <router-link :to="{ name: 'category', params: { language: 'javascript' }}">Javascript</router-link>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
