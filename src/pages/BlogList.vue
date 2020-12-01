<template>
  <Layout>
    Blog list
    <ul>
      <li v-for="blog in blogs" :key="blog.node.id">{{blog.node.title}}</li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allStrapiBlog {
    edges {
      node {
        id,
        title,
        subtitle
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "博客列表"
  },
  computed: {
    blogs() {
      return this.$page.allStrapiBlog.edges
    }
  }
}
</script>

<style>

</style>