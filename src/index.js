import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { onChange, subscribe } from 'redux-heat'

const initialState = {
  yay: 1,
  path: window.location.pathname
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        path: action.payload
      }

    default:
      return state
  }
}

const store = createStore(rootReducer)

const mapStateToProps = state => state

const App = connect(mapStateToProps)(props => <h1>Hello {props.yay}</h1>)

const effect = onChange(({path}) => path, async (_, path) => {
  window.history.pushState({}, '', path)

  return undefined
})

window.store = store

subscribe(store, [effect])

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
