import React, { Component } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
background-color: darkcyan;
box-sizing: border-box;
width: 300px;
height:300px;
display: flex;
border-radius: 50%;
align-items: center;
text-align: center;
padding: 100px 5px;
button,div{
  margin: auto;
}
`;

export default class Counter extends Component {
  state = {
    count: 0
  }

  count = () =>{
    this.setState((prevState)=>({
count: prevState.count +1
    }))
  }

  render() {
    const {count} = this.state
    return (
      <>
         <button data-testid ="test002" onClick={this.count}>
         {count}
         </button> 
         <div data-testid ="test001">text</div>
      </>
    )
  }
}
