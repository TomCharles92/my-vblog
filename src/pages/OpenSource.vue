<template>
  <Layout>
    <el-card shadow="hover" v-for="repo in $page.allRepos.edges" :key="repo.node.id">
      <div slot="header">{{ repo.node.name }}</div>
      <div class="repo-updated">最近更新 {{ repo.node.updated_at | dateS }}</div>
      <p class="repo-title">{{ repo.node.name }}</p>
      <div class="repo-feature">
        <!-- 收藏、关注、Fork -->
        <div class="repo-feature-counts">
          <div class="repo-feature-counts-item">
            <i class="el-icon-star-off"></i>
            <span>{{ repo.node.stargazers_count }}</span>
          </div>
          <div class="repo-feature-counts-item">
            <i class="el-icon-view"></i>
            <span>{{ repo.node.watchers_count }}</span>
          </div>
          <div class="repo-feature-counts-item">
            <i class="el-icon-knife-fork"></i>
            <span>{{ repo.node.forks_count }}</span>
          </div>
        </div>
        <!-- 标签 -->
        <div class="repo-feature-tags">
          <el-tag type="danger" v-if="repo.node.license">{{ repo.node.license.spdx_id }}</el-tag>
          <el-tag type="success" v-if="repo.node.language">{{ repo.node.language }}</el-tag>
        </div>
      </div>
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
        watchers_count,
        language,
        license {
          spdx_id
        },
        updated_at
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue"
import { Card, Tag } from "element-ui"

export default {
  metaInfo: {
    title: "开源项目"
  },
  created() {
    Vue.use(Card)
    Vue.use(Tag)
  },
}
</script>

<style lang="scss" scoped>
.el-card {
  &+ .el-card {
    margin-top: 1em;
  }
}

.repo-updated {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(96, 108, 113);
}

.repo-feature {
  display: flex;
  justify-content: space-between;
  .repo-feature-counts {
    display: flex;
    .repo-feature-counts-item {
      span {
        padding: 0 20px 0 10px;
      }
    }
  }
  .repo-feature-tags {
    .el-tag+.el-tag {
        margin-left: 10px;
    }
  }
}
</style>