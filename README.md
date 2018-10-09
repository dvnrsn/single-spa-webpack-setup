# single-spa-webpack-setup
A guide to creating a simple single-spa app with webpack for the first time

Single-spa app based on [step-by-step guide on medium](https://medium.com/canopy-tax/a-step-by-step-guide-to-single-spa-abbbcb1bedc6)

Webpack v4.20

## Assumptions:
* Package.json create/update (yarn init) with defaults
* `webpack`, `webpack-dev-server` and `webpack-cli` in devDependencies
* Cool app setup (minus the angular code at end) [step-by-step guide on medium](https://medium.com/canopy-tax/a-step-by-step-guide-to-single-spa-abbbcb1bedc6)

Let’s start with by creating a pretty basic webpack.config.js as per [webpack getting started](https://webpack.js.org/guides/getting-started/):

```js
const path = require('path');

module.exports = {
  mode: 'development', // do this or you might get cryptic errors
  devtool: 'source-map',
  entry: './root-application.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

Let’s add two scripts to package.json
```js
"scripts": {
  "build": "webpack",
  "watch": "webpack-dev-server"
}
```
Now terminal
```
yarn build
```
You should now have two files in the dist directory

At this point, when we run `yarn watch` we’re going to be getting an error about “import” only being allowed in top level modules. Note that in `root-application.js` we are using said "import" inside of `loadCoolApp()` rather than at the top of the page. This is what is called a [Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) and we'll need to handle it via the magic that is [Code Splitting in Webpack](https://webpack.js.org/guides/code-splitting/#dynamic-imports).

Let's add the following line to webpack config:
```diff
filename: 'main.js',
+ chunkFilename: '[name].bundle.js',
path: path.resolve(__dirname, 'dist'),
```

We should now see Hello Justin! In the browser if we navigate to [localhost:8080/#/cool](localhost:8080/#/cool)

## Potential errors:

You might have a cryptic error, something like 
```js
Uncaught TypeError: Application 'cool-app' died in status LOADING_SOURCE_CODE: Cannot read property 'call' of undefined at o (bootstrap:63)
```
Do not try to make sense of this. Rather, first add `mode: ‘development’` to webpack.config.js module.exports object
That might solve all your problems, including the need to continually yarn build prior to yarn watch. If not, try adding `publicPath: ‘/dist/’` and `devServer: {publicPath: ‘/dist/’}`
