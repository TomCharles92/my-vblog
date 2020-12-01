// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_STRAPI_URL,
        queryLimit: 1000, // Defaults to 100 查询数据的数量限制
        contentTypes: ['blog'], // 数据类型
        // singleTypes: ['general'], // 设置单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // 设置登录信息，获取 token
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiBlog: [
      {
        path: '/blog/:id',
        // component 默认会去找 src/templates/{Collection}.vue
        // component: './src/templates/Post.vue'
      }
    ],
    Followers: [
      {
        path: '/followers/:id'
      }
    ]
  }
}
