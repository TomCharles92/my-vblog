<template>
  <Layout>
    <el-card shadow="never">
      <div slot="header">
        <span>{{ followers.login }}</span>
      </div>
      <el-row>
        <!-- 左侧 -->
        <el-col :span="9" style="padding-right: 20px">
            <div>
              <img :src="followers.avatar_url"
                style="width: 250px; border-radius: 5px"
              >
            </div>
            <h2>{{ user.name }}</h2>
            <div>{{ user.login }}</div>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="15">
          <div class="bio">{{ user.bio }}</div>
        </el-col>
      </el-row>
    </el-card>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  followers(id: $id) {
    id,
    login,
    avatar_url,
    html_url
  }
}
</page-query>

<script>
import Vue from "vue"
import { Card, Col, Row } from "element-ui"
import axios from "axios"

export default {
  metaInfo: {
    title: "用户资料"
  },
  data () {
    return {
      user: {}
    }
  },
  computed: {
    followers () {
      return this.$page.followers
    }
  },
  async created() {
    Vue.use(Card)
    Vue.use(Col)
    Vue.use(Row)

    const { data } = await axios(`https://api.github.com/users/${this.followers.login}`)
    this.user = data
  },
}
</script>

<style scoped>
.bio {
  width: 100%;
  min-height: 300px;
  border-radius: 5px;
  border: 1px solid rgb(235, 238, 245);
  padding: 10px;
  font-size: 16px;
  color: rgb(106, 115, 125);
}
</style>