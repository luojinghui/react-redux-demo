/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/27
 * Time: 下午5:48
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class FormTest extends Component {
  render() {
    return (
      <div>
        <h1>router form test </h1>
        <Link to="/" style={{marginRight:"30px"}}>home</Link>
        <Link to="/routetest">routetest</Link>
      </div>
    )
  }
}

export default FormTest
