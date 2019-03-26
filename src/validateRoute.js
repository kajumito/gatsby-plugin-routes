// Needs more validation!!
export default route => {
  const { path, component } = route
  if (!path || !component) {
    throw `
        Skipping! You need to specify path and component for every route.
        See docs here -> https://www.gatsbyjs.org/plugins/gatsby-plugin-routes/
        `
  }
  return route
}
