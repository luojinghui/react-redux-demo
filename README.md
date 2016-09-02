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