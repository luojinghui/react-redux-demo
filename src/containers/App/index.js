import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.less'
require('./index.css');

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div className={style.normal}>
        <Header />
        <MainSection todos={todos} actions={actions} addTodo={actions.addTodo} />
        {children}
      </div>
    )
  }
}
App.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object,
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
