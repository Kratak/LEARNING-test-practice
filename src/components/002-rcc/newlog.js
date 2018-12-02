import React, { Component } from 'react'
import Form from './form'

export default class NewLog extends Component {
  render() {
    return (
      <>
          <h1 data-testid="page-title">New log</h1>
        <Form />
      </>
    )
  }
}
