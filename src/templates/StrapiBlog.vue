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
query ($id: ID!) {
  strapiBlog(id: $id) {
    id,
    title,
    subtitle,
    content,
    updated_at,
    created_at
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "博客详情"
  },
  computed: {
    blog() {
      return this.$page.strapiBlog
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