import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { Link } from 'react-router'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    const style = {
      marginRight: "30px"
    }
    return (
      <header>
        <h1>
          {/*<img src={img59} height="50"/>*/}
          TODOS LIST
          {/*<img src={img592}/>*/}
        </h1>
        <Link to="/" style={style}>home</Link>
        <Link to="/routetest" style={style}>routetest</Link>
        <Link to="/formtest" style={style}>formtest</Link>
      </header>
    )
  }
}

export default Header
