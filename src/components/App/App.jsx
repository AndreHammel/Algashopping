import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Container } from './App.styles'

function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={ <div>Produtos disponiveis</div> }
          middle={ <div>sua lista de compras</div> }
          right={ <div>estatísticas</div> }
        />
      </Container>
    </Wrapper>
  )
}

export default App