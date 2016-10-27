import React, { Component } from 'react'
import { Link } from 'react-router'

class RouteTest extends Component {
    constructor(props) {
        super(props)


    }
    handleClick(i) {
        console.log(this);
        console.log('You clicked: ' + i);
    }

  render() {
    return (
      <div>
        <h1>router test </h1>
        <Link to="/" style={{marginRight:"30px"}}>home</Link>
        <Link to="/routetest">routetest</Link>

          <div>
              <div>
                  <ul>
                      <li>123</li>
                      <li>zxcv</li>
                      <li>asd</li>
                  </ul>
                  {this.props.items.map(function(item, i) {
                      return (
                          <div className="demo">
                              <div onClick={this.handleClick.bind(this,i)} key={i}>{item}</div>
                          </div>
                      );
                  }, this)}
              </div>
          </div>
      </div>
    )
  }
}

RouteTest.defaultProps = {"items" :['Apple', 'Banana', 'Cranberry']};

export default RouteTest
