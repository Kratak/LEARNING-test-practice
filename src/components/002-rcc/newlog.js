import React, { Component } from 'react'
import LogForm from './logform'

export default class NewLog extends Component {
  render() {
    return (
      <>
          <h1 data-testid="page-title">New log</h1>
        <LogForm />
      </>
    )
  }
}
