import Header from './componentes/Header';
import Footer from './componentes/Footer/index';
import styled from 'styled-components';
import Products from './componentes/Produtos'
import { ModalProvider } from "styled-react-modal";
const AppContainer = styled.div`
      width:100%;
      height:100%;
      background:#FFFFFF;

`
const FundoModal = styled.div`
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
    <ModalProvider backgroundComponent={FundoModal}>
      <AppContainer>
        <Header />
        <Products />
        <Footer />
      </AppContainer>
    </ModalProvider>
  );
}

export default App;
