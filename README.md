# gatsby-plugin-routes

![timestamp](https://img.shields.io/date/1553413394.svg?color=g&label=created)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

Allows customized route configuration for Gatsby. Defining routes from configuration allows you to create pages from anywhere and with custom path.

Gives more control and helps with file structuring and naming because you don't need to follow Gatsby's default `pages/` folder structure and naming convention to define new routes.

## Install

```sh
npm install --save gatsby-plugin-routes
```

## How to use

Add the plugin to the plugins array in your `gatsby-config.js`. Then define path to your routes file with options.

```js
// In your gatsby-config.js
plugins: [
    ...,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/src/routes.js`,
      },
    },
    ...
]
```

## Options

### `options.path` (required)

String path to the routes configuration file.

## Routes -file

At routes configuration file you need to export array of `route` objects. Every object in the route -array need to have `path` and `component` fields defined.

### `path` (required)

Path to the page where your defined view component is displayed.

### `component` (required)

React component to be displayed in defined path.

```js
// In your routes configuration file
const path = require('path')
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/Home.jsx`),
  },
  {
    path: '/order',
    component: path.resolve(`src/containers/Order.jsx`),
  },
]
```

## Contributing

All contributions and PR's are welcome, but code needs to pass eslint with prettier!

Reporting issues will be greatly appreciated!
