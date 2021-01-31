import '@babel/polyfill'
import fs from 'fs'
import chokidar from 'chokidar'

import validateRoute from './validateRoute'

exports.createPagesStatefully = ({ actions, reporter, store }, { path }) => {
  if (!path) {
    reporter.panic(
      `"path" is a required option for gatsby-plugin-routes
See docs here -> https://www.gatsbyjs.org/packages/gatsby-plugin-routes/ 
      `
    )
  }

  if (!fs.existsSync(path) || !fs.lstatSync(path).isFile()) {
    reporter.panic(
      `The file path passed to gatsby-plugin-routes does not exist on your file system:

${path}

Please pick a path to an existing routes file.
      `
    )
  }

  const routes = require(path)
  const { createPage, deletePage } = actions

  const createdRoute = route => {
    const pages = store.getState().pages
    if (pages.get(route.path)) {
      if (route.component === pages.get(route.path).component) return true
      pages.get(route.path).component = route.component
    }
    return false
  }

  const checkRoutes = routes => {
    const pages = store.getState().pages
    const pagePaths = [...pages.keys()]
    pagePaths.map(path => {
      const isRoute = routes.find(route => route.path === path)
      if (!isRoute && path !== '/dev-404-page/') {
        deletePage({ path, component: pages.get(path).component })
      }
    })
  }

  const createPagesFromRoutes = routes => {
    checkRoutes(routes)
    routes.forEach(route => {
      try {
        validateRoute(route)
        if (!createdRoute(route)) {
          createPage(route)
        }
      } catch (msg) {
        reporter.error(msg)
      }
    })
  }

  createPagesFromRoutes(routes)

  chokidar.watch(path).on('change', _path => {
    delete require.cache[require.resolve(_path)]
    const routes = require(_path)

    createPagesFromRoutes(routes)
  })
}
