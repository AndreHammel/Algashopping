import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox'
import LineChart from '../../shared/LineChart'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [ lettuce, setLettuce ] = useState(false)
  const [ healthy, setHealthy ] = useState(20)

  const colors = [ '#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61' ]

  useEffect(() => {
    setTimeout(() => {
      setHealthy(100)
    }, 1000)
  }, [])

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

          right={
            <div>
              Estatísticass
              <LineChart color={ colors[ 0 ] } title='saudável' percentage={ 80 } />
              <LineChart color={ colors[ 1 ] } title='não tão saudável assim' percentage={ 20 } />
              <LineChart color={ colors[ 2 ] } title='limpeza' percentage={ 35 } />
              <LineChart color={ colors[ 3 ] } title='outros' percentage={ 15 } />
            </div>
          }

        />
      </Container>
    </Wrapper>
  )
}

export default App