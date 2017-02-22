
# Qantas developer challenge

### Objectives

- Create a single drop down that lists all of the genres found in the data set.
- Create a table where each row is a movie, with a column for the movie name and a column for a list of genres that the movie is in.
- When a genre is selected in the drop down, it should filter the table to show only movies that have the selected genre.

### Overview

- React, Redux, SCSS modules, JS Lint
- 1 example view
- 2 React components (Table & Loader)

### Setup

In project directory run the following:

```
npm install
npm start
npm test (run unit tests) - Enters into watch mode, press 'a' to run all tests

```

### Prototype methods used

- filter (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- includes (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- join (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- toString (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

### Babel plugins

- react (https://babeljs.io/docs/plugins/preset-react/)
- es2015 (https://babeljs.io/docs/plugins/preset-es2015/)
- stage-2 (https://babeljs.io/docs/plugins/preset-stage-2/)
- transform-object-rest-spread (https://babeljs.io/docs/plugins/transform-object-rest-spread/)
- transform-es2015-destructuring (https://babeljs.io/docs/plugins/transform-es2015-destructuring/)

### webpack loaders

- babel-loader (https://www.npmjs.com/package/babel-loader)
- html-loader (https://www.npmjs.com/package/html-loader)
- file-loader (https://www.npmjs.com/package/file-loader)
- url-loader (https://www.npmjs.com/package/url-loader)

### webpack plugins

- HTML Webpack (https://www.npmjs.com/package/html-webpack-plugin)

### JS Linting

- ESLint https://www.npmjs.com/package/eslint
- ESLint Airbnb rules - (https://www.npmjs.com/package/eslint-config-airbnb)
- ESLint Plugins - eslint-plugin-import, eslint-plugin-react, eslint-plugin-jsx-a11y

### SCSS modules

- classnames (https://www.npmjs.com/package/classnames)
- normalize (https://www.npmjs.com/package/node-normalize-scss)
- bourbon mixins (https://www.npmjs.com/package/node-bourbon)

### Unit tests

- jest (https://github.com/facebook/jest)
- enzyme airBnb react testing utilities (https://www.npmjs.com/package/enzyme)
- expect assertions (https://www.npmjs.com/package/expect)
- react add on utilities (https://www.npmjs.com/package/react-addons-test-utils)
