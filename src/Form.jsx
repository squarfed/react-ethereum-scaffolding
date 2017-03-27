import React from 'react'

const submitHandler = setCounter => e => {
    e.preventDefault()
    const value = e.target.number.value
  if(value !== '') {
    setCounter(value)
    e.target.reset()
  }
}


const Form = ({setCounter}) => {
  return (
    <form onSubmit={submitHandler(setCounter)}>
      <input type='number' name='number' placeholder='number' className='form-control'/>
      <button type='submit' className='btn btn-primary form-control'> Submit </button>
    </form>
  )
}

export default Form

