<template>
  <Layout>
    <el-card shadow="hover" 
      v-for="blog in blogs" 
      :key="blog.node.id"
      @click.native="routeTo(blog.node.id)"
      >
      <div slot="header" class="blog-title">{{ blog.node.title }}</div>
      <div class="blog-date">最近更新 {{ blog.node.updated_at | dateS }} </div>
      <div class="blog-subtitle">{{ blog.node.subtitle }}</div>
    </el-card>
  </Layout>
</template>

<page-query>
query {
  allStrapiBlog {
    edges {
      node {
        id,
        title,
        subtitle,
        updated_at
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
    title: "博客列表"
  },
  created() {
    Vue.use(Card)
  }, 
  computed: {
    blogs() {
      return this.$page.allStrapiBlog.edges
    }
  },
  methods: {
    routeTo(id) {
      this.$router.push(`/blog/${id}`)
    }
  },
}
</script>

<style lang="scss" scoped>
.el-card {
  cursor: pointer;
  &+ .el-card {
    margin-top: 1em;
  }

  .blog-title {
    font-weight: 600;
    font-size: 18px;
  }

  .blog-date {
    color: gray;
    font-size: 16px;
  }

  .blog-subtitle {
    margin-top: 5px;
  }
}

</style>