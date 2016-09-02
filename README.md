# react-redux-demo

### Using React from npm

Configure [babel](https://babeljs.io/) with a .babelrc file:

```
     {"presets": ["react", "es2015"]}
```

#### Note:
     If you are using ES2015, you will want to also use the babel-preset-es2015 package.
     
To install React DOM and build your bundle with webpack:
```     
     $ npm install --save react react-dom babel-preset-react babel-loader babel-core
     $ webpack main.js bundle.js --module-bind 'js=babel-loader'
```     

