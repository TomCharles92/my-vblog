<template>
  <Layout>
    <el-row>
      <el-col :span="8" v-for="item in $page.allFollowers.edges" :key="item.node.id">
        <el-card shadow="hover">
          <div class="link" @click="$router.push('/followers/' + item.node.id)">
            <i class="el-icon-star-off"></i>
            <span>{{ item.node.login }}</span>
          </div>
          <div class="link" @click="toHome(item.node.html_url)">
            <i class="el-icon-message"></i>
            <span >TA的主页</span>
          </div>
          <img class="avatar" :src="item.node.avatar_url">
        </el-card>
      </el-col>
    </el-row>

    <Pager :info="$page.allFollowers.pageInfo"/>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      :current-change="handlePage"
      :total="$page.allFollowers.pageInfo.totalItems">
    </el-pagination> -->
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allFollowers (perPage: 9, page: $page) @paginate {
    pageInfo {
      totalItems,
      totalPages,
      currentPage
    },
    edges {
      node {
        id,
        login,
        avatar_url,
        html_url
      }
    }
  }
}
</page-query>

<script>
import Vue from "vue"
import { Row, Col, Card } from "element-ui"
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: "社交圈"
  },
  components: { Pager },
  created() {
    Vue.use(Card)
    Vue.use(Row)
    Vue.use(Col)
  },
  methods: {
    toHome (path) {
      window.open(path, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  padding: 0 20px 20px 0;
}

.el-card {
  font-size: 13px;
  color: rgb(96, 98, 102);
  line-height: 20px;

  .link {
    cursor: pointer;
    span {
      color: #1e6bb8;
      padding-left: 15px;
    }
  }

  .avatar {
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
  }
}
</style>