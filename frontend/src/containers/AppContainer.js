import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const AppContainer  = React.createClass({
  propTypes: {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  },

  shouldComponentUpdate () {
    return false
  },

  render () {
    const { routes, store, history } = this.props

    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    )
  },
})

export default AppContainer
