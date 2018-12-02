import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form data-testid="log-form">
            <input type="text"/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
