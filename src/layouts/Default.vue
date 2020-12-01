<template>
  <div class="layout">
    <!-- page-header -->
    <section class="page-header">
      Hello World
    </section>

    <!-- main-content -->
    <el-row class="main-content">
      <el-col :span="6" style="padding-right: 20px;">
        <el-card class="box-card" shadow="never">
          <!-- 菜单 -->
          <el-menu :default-active="currentRoute" router>
            <el-menu-item index="/">
              <i class="el-icon-star-off"></i>
              <span>最新动态</span>
            </el-menu-item>
            <el-menu-item index="/social-circle/">
              <i class="el-icon-mobile-phone"></i>
              <span>社交圈</span>
            </el-menu-item>
            <el-menu-item index="/blog-list/">
              <i class="el-icon-edit-outline"></i>
              <span>博客列表</span>
            </el-menu-item>
            <el-menu-item index="/open-source/">
              <i class="el-icon-service"></i>
              <span>开源项目</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>
      <el-col :span="18">
         <!-- Page 页面出口 -->
        <slot />
      </el-col>
    </el-row>
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
import { Row, Col, Card, Menu, MenuItem } from 'element-ui';

export default {
  created() {
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Card)
    Vue.use(Menu)
    Vue.use(MenuItem)
  },
  computed: {
    currentRoute() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
    padding: 5rem 6rem;
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
}

.main-content {
    max-width: 64rem;
    padding: 30px 0px 30px 0px;
    margin: 0 auto;
    font-size: 1.1rem;
    word-wrap: break-word;
    min-height: 800px;
}

a.nav__link {
  text-decoration: none;
}
</style>

<style>
/* body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
*/
</style>
