<template>
  <Layout>
    <el-card shadow="hover" v-for="repo in repos" :key="repo.node.id">
      <div slot="header">{{ repo.node.name }}</div>
      <div class="repo-title">{{ repo.node.name }}</div>
    </el-card>
  </Layout>
</template>

<page-query>
query {
  allRepos {
    edges {
      node {
        id,
        name,
        stargazers_count,
        forks_count,
        watchers_count
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue"
import { Card } from "element-ui"

export default {
  metaInfo: {
    title: "开源项目"
  },
  created() {
    Vue.use(Card)
  },
  computed: {
    repos() {
      return this.$page.allRepos.edges
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  &+ .el-card {
    margin-top: 1em;
  }
}
</style>