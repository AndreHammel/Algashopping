import React from 'react'
import { Wrapper } from './AppContainer.styles'

function AppContainer({ left, middle, right }) {
  return (
    <Wrapper>
      <div style={ { backgroundColor: 'red' } }>{ left }</div>
      <div style={ { backgroundColor: 'blue' } }>{ middle }</div>
      <div style={ { backgroundColor: 'green' } }>{ right }</div>
    </Wrapper>
  )
}

export default AppContainer