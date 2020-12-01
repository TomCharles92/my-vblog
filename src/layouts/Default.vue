<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/recent-news/">最新动态</g-link>
        <g-link class="nav__link" to="/social-circle/">社交圈</g-link>
        <g-link class="nav__link" to="/blog-list/">博客列表</g-link>
        <g-link class="nav__link" to="/open-source/">开源项目</g-link>
      </nav>
    </header>
    <el-button>dd</el-button>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Vue from 'vue';
import { Button, Select } from 'element-ui';

export default {
  created() {
    Vue.use(Button)
  }  
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
