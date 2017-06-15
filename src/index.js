import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { onChange, subscribe } from 'redux-heat'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './components/App'

const initialState = {
  yay: 1,
  path: window.location.pathname,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        path: action.payload,
      }

    default:
      return state
  }
}

const store = createStore(rootReducer)

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  onChangeName: value =>
    dispatch({
      type: 'UPDATE_NAME',
      payload: value,
    }),
  onSubmitName: () =>
    dispatch({
      type: 'SUBMIT_NAME',
    }),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

const navigationEffect = onChange(
  ({ path }) => path,
  async (_, path) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path)
    }

    return undefined
  }
)

window.store = store

subscribe(store, [navigationEffect])

window.addEventListener('popstate', e =>
  store.dispatch({
    type: 'NAVIGATE',
    payload: window.location.pathname,
  })
)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
