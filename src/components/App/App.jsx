import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox'
import { useState } from 'react'

function App() {
  const [ lettuce, setLettuce ] = useState(false)

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              Produtos disponiveis
              <Checkbox
                title="Alface"
                value={ lettuce }
                onClick={ () => setLettuce(!lettuce) }
              />
              <Checkbox
                title="Arroz"
                value={ false }
                onClick={ () => alert('arroz') }
              />
            </div> }
          middle={ <div>sua lista de compras</div> }
          right={ <div>estatísticas</div> }
        />
      </Container>
    </Wrapper>
  )
}

export default App