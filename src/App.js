import Header from './componentes/Header';
import Footer from './componentes/Footer/index';
import styled from 'styled-components';
import Products from './componentes/Produtos'
const AppContainer = styled.div`
      width:100%;
      height:100%;
      background:#FFFFFF;

`


function App() {
  return (
    <AppContainer>
      <Header />
      <Products />
      <Footer />
    </AppContainer>
  );
}

export default App;
