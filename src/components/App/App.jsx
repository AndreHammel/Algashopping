import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import LineChart from '../../shared/LineChart'
import ShoppingList from './../ShoppingList'
import productsMock from '../../mocks/productsList.json'
import { Wrapper, Container } from './App.styles'

function App() {
  const colors = [ '#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61' ]
  const [ products, setProducts ] = useState(productsMock.products)
  const [ selectedProducts, setSelectedProducts ] = useState([])

  function handleToggle(id, checked) {
    const newProduct = products.map(product => product.id === id
      ? ({ ...product, checked: !product.checked })
      : product)
    setProducts(newProduct)
  }

  useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked)
    setSelectedProducts(newSelectedProducts)
  }, [ products ])

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer

          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={ products }
              onToggle={ handleToggle }
            /> }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={ selectedProducts }
              onToggle={ handleToggle }
            /> }
          right={
            <div>
              Estatísticas:
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