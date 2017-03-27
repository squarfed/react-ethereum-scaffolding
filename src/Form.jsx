import React from 'React'

const Form = props => {
  const submitHandler = props.submitHandler
  console.log(submitHandler)
  return (
    <form onSubmit={submitHandler}>
      <input type='number' name='number' placeholder='number'/>
      <button type='submit'> Submit </button>
    </form>
  )
}

export default Form

