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
    const value = e.target.number.value
    this.setState({
      counter: value
    })
    e.target.reset()

  },

  render: function () {
    const submitHandler = this.submitHandler
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <h1> Hello world! </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <Display counter={this.state.counter}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
             <Form submitHandler={submitHandler}/>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
