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

### Getting Started

Let's look at a really simple example. Create a index.html file with the following code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../bower_components/react/react.js"></script>
    <script src="../bower_components/react/react-dom.js"></script>
    <script src="../bower_components/babel-standalone/babel.min.js"></script>
</head>
<body>
<div id="container"></div>
</body>
<script type="text/babel">
        var HelloWorld = React.createClass({
            render: function() {
                return (
                    <div>
                        Hello, <input type="text" className="input" placeholder="Your name here" />
                        <div>
                            <h3>
                                <span>It is </span>
                                {this.props.date.toTimeString()}
                            </h3>
                        </div>
                    </div>
                )
            }
        });
    
        setInterval(function() {
            ReactDOM.render(
                    <HelloWorld date={new Date()} />,
                    document.getElementById('container')
            )
        }, 500);
</script>
</html>
```

### Components are Just Like Functions 

React components are very simple. You can think of them as simple functions that take in props and state (discussed later) and render HTML. With this in mind, components are easy to reason about.
React组件是非常简单的,你可以想象他们是一个简单的函数,采用props和state呈现给html上,考虑到这一点,组件很容易被推理出来。

#### Note:
     One limitation: React components can only render a single root node. If you want to return multiple nodes they must be wrapped in a single root.
     限制: React组件只能render一个单一的根节点,如果想要返回多个节点,请包裹在一个节点里面并返回,例如:
     
 
 ```
        <div>
            Hello, <input type="text" className="input" placeholder="Your name here" />
            <div>
                <h3>
                    <span>It is </span>
                    {this.props.date.toTimeString()}
                </h3>
            </div>
        </div>
 ```
 
 React状态的改变会引发dom结构或内容的改变
 
 
 
 
 -------------------------------------------
 
 
 # react-tutorial
 a tutorial react collection and sort,let you easily get started and organized
 
 主要是搜集整理react从入门到深入的教程、工具和自己做的demo,以便日后查阅
 
 ## 教程:
 1. [为你定制的 React 学习路线](http://geek.csdn.net/news/detail/88222)
 2. [菜鸟教程react入门](http://www.runoob.com/react/react-tutorial.html)
 3. [阮一峰老师的入门react-demo](https://github.com/cllgeek/react-demos)
 4. [React文档](http://reactjs.cn/react/docs/getting-started.html)
 5. [React Router文档](http://react-guide.github.io/react-router-cn/)
 6. [Redux文档](http://cn.redux.js.org/index.html)
 7. [Redux 莞式教程](https://github.com/kenberkeley/redux-simple-tutorial)
 8. [react-redux-tutorial](https://github.com/lewis617/react-redux-tutorial)
 
 ## 相关好文:
 1. [React初体验](http://hustlzp.com/post/2016/03/react-first-blood)
 2. [React 最佳实践——那些 React 没告诉你但很重要的事](http://www.v2ex.com/t/274697)
 3. [Redux 状态管理方法与实例](https://segmentfault.com/a/1190000005933397)
 4. [高质量的 React 相关文档和翻译](https://github.com/react-guide)
 
 ## 相关工具:
 1. [react-babel-webpack-boilerplate](https://github.com/ruanyf/react-babel-webpack-boilerplate)
 2. [react-webpack-generators](https://github.com/react-webpack-generators/generator-react-webpack)
 3. [React项目可视化生成器](http://www.overreact.io/)
 4. [react-starter-kit](https://github.com/bodyno/react-starter-kit)
 
 ## 规范
 1. [react-style-guide](https://github.com/cllgeek/react-style-guide)
 
 ## demo
 1. [gallery-by-react](https://cllgeek.github.io/gallery-by-react) 地址:[https://github.com/cllgeek/gallery-by-react](https://github.com/cllgeek/gallery-by-react)
 2. [react-router-tutorial](https://github.com/reactjs/react-router-tutorial)
