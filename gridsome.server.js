// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('Repos')

    const { data } = await axios('https://api.github.com/users/TomCharles92/repos?page=1&per_page=999')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        name: item.name,
        stargazers_count: item.stargazers_count,
        forks_count: item.forks_count,
        watchers_count: item.watchers_count,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
