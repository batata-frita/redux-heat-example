import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = { yay: 1 }

const rootReducer = (state = initialState, action) => state

const store = createStore(rootReducer)

const mapStateToProps = state => state

const App = connect(mapStateToProps)(props => <h1>Hello {props.yay}</h1>)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
