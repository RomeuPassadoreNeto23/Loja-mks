import Header from './componentes/Header';
import Footer from './componentes/Footer/index';
import React from 'react';
import Provider from './context/Provider';
import Products from './componentes/Produtos'
import ModalCarrinho from './componentes/ModalCarrinho';


 


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
