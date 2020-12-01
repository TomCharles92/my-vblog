<template>
  <Layout>
    open source

    <ul>
      <li v-for="item in repos" :key="item.node.id">{{item.node.name}}</li>
    </ul>
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
export default {
  metaInfo: {
    title: "开源项目"
  },
   computed: {
    repos() {
      return this.$page.allRepos.edges
    }
  }
}
</script>

<style>

</style>