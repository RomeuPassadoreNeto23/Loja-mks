import Header from './componentes/Header';
import Footer from './componentes/Footer/index';
import React from 'react';
import styled from 'styled-components';
import Provider from './context/Provider';
import Products from './componentes/Produtos'
import { ModalProvider } from "styled-react-modal";
import ModalCarrinho from './componentes/ModalCarrinho';
const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background:#FFFFFF;
      max-width:1440px;
      max-height:1024px;
     
      

`
const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content:flex-end;
  z-index: 30;
  opacity:default;
  
  
`

function App() {
  return (
      <Provider>
        <Header />
        <Products />
        <Footer />
        <ModalCarrinho />
      </Provider>
  );
}

export default App;
