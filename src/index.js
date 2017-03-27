import React from 'react'
import ReactDOM from 'react-dom'
import Form from './form.jsx'
import './App.scss'

const App = () => {
  return (
    <div>
    <h1> Hello world! </h1>
    <Form/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
