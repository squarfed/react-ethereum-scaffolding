import React from 'React'

const Form = (props) => {
  const submitHandler = props.submitHandler
  return (
    <form>
      <input type='number' placeholder='number'/>
      <button type='submit' onSubmit={submitHandler}> Submit </button>
    </form>
  )
}

export default Form

