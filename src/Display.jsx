import React from 'react'
import Spinner from 'react-spinkit'

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

const Display = ({counter, isLoading}) => {
  return (
    <div style={displayStyle} className='mx-auto'>
      {isLoading ? <Spinner spinnerName='double-bounce' noFadeIn/>
                 : counter}
        </div>
  )
}

export default Display
