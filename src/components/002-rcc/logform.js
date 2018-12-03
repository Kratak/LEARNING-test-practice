import React, { Component } from 'react'

export default class LogForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <form
        data-testid="log-form"
        onSubmit={() => submitForm({
          text,
        })
        }
      >
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}
