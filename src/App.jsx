import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import Display from './Display'
import './App.scss'
import Contract from './contracts/counter'

const Counter = Contract['counter.sol:Counter']
const web3 = Contract.web3

console.log('counter is', Counter)
console.log('web3 is: ', web3)

debugger
const App = React.createClass({
  getInitialState: () => ({
    counter: 0
  }),

  setCounter: function (x) {
    this.setState({
      counter: x
    })
  },

  render: function () {
    const submitHandler = this.submitHandler
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <h1 className='text-center'> Register a number! </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <Display counter={this.state.counter}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <Form setCounter={this.setCounter}/>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
