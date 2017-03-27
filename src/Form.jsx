import React from 'React'

const Form = props => {
  const submitHandler = props.submitHandler
  return (
    <form onSubmit={submitHandler}>
      <input type='number' name='number' placeholder='number' className='form-control'/>
      <button type='submit' className='btn btn-primary' className='form-control'> Submit </button>
    </form>
  )
}

export default Form

