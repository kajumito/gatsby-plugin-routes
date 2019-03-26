# gatsby-plugin-routes

![timestamp](https://img.shields.io/date/1553413394.svg?color=g&label=created)
![downloads](https://img.shields.io/npm/dm/gatsby-plugin-routes.svg)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/gatsby-plugin-routes.svg)
![version](https://img.shields.io/github/package-json/v/kajumito/gatsby-plugin-routes.svg?color=blue)
![minified](https://img.shields.io/bundlephobia/min/gatsby-plugin-routes.svg)

Allows customized route configuration for Gatsby. Defining routes from configuration allows you to create pages from anywhere and with custom path.

Gives more control and helps with file structuring and naming because you don't need to follow Gatsby's default `pages/` folder structure and naming convention to define new routes.

## Install

```sh
npm install --save gatsby-plugin-routes
```

## How to use

Add the plugin to the plugins array in your `gatsby-config.js`. Then define path to your routes file with options.

### `options.path` (required)

String path to the routes configuration file.

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

## Routes -file

At routes configuration file you need to export an array of `route` objects. Every object in the route -array needs to have `path` and `component` fields defined.

### `path` (required)

Path to the page where your defined view component is displayed.

### `component` (required)

React component to be displayed in defined path.

```js
// In your routes configuration file
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/Home.jsx`)
  },
  {
    path: '/order',
    component: path.resolve(`src/containers/Order.jsx`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/containers/404.js`)
  }
];
```

## Contributing

All contributions and PR's are welcome, but code needs to pass eslint with prettier!

Reporting issues will be greatly appreciated!
