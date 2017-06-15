import React from 'react'
import { AppBar, RaisedButton, TextField } from 'material-ui'

export default function Login({ name, onChange, onSubmit }) {
  return (
    <main>
      <AppBar title="Login" />
      <TextField label="Name" value={name} onChange={onChange} />
      <RaisedButton label="Go" primary onClick={onSubmit} />
    </main>
  )
}
