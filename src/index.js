import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import Display from './Display'
import './App.scss'

const App = React.createClass({
  getInitialState: () => ({
    counter: 0
  }),

  submitHandler: function (e) {
    e.preventDefault()
    console.log('event is:', e)
    const value = e.target.number.value
    console.log('value is: ', value)
    this.setState({
      counter: value
    })
    e.target.reset()

  },

  render: function () {
    const submitHandler = this.submitHandler
    return (
      <div>
      <h1> Hello world! </h1>
      <Display counter={this.state.counter}/>
      <Form submitHandler={submitHandler}/>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
