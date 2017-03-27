import React from 'react'

const displayStyle = {
  height: '100px',
  width: '100px',
  padding: '2px',
  margin: '10px',
  border: '2px solid',
  borderRadius: '10px',
   alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px'
}

const Display = props => {
  return(
    <div style={displayStyle} className='mx-auto'>
      {props.counter}
    </div>
    )
}

export default Display
