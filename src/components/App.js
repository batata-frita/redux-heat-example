import React from 'react'
import Login from './Login'

export default function App({ path }) {
  switch (path) {
    case '/login':
      return <Login />

    default:
      return <h1>404</h1>
  }
}
