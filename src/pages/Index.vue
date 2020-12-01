<template>
  <Layout>
    <article class="blog">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.subtitle }}</h3>
      <div class="date">发布：{{ blog.created_at | dateS }}</div>
      <div class="date">发布：{{ blog.updated_at | dateS }}</div>
      <p v-html="blog.content"></p>
    </article>
  </Layout>
</template>

<page-query>
query {
  allStrapiBlog (order: DESC, sortBy: "created_at", limit: 1) {
    edges {
      node {
        id,
        title,
        subtitle,
        content,
        updated_at,
        created_at
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "最新动态"
  },
  computed: {
    blog() {
      return this.$page.allStrapiBlog.edges[0].node
    }
  }
}
</script>

<style lang="scss" scoped>
.date {
  color: gray;
  font-size: 16px;
}
</style>