import Modal from "styled-react-modal";

import styled from "styled-components";

const ModalContainer = Modal.styled` 
        width: 486px;
        height:1024px;
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        background-color:#0F52BA;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        `
const ButtonFecharModal = styled.button`
        width:38px;    
        height:38px;
        border-radius: 100%;
        background-color:#000000;
        color:#FFFFFF;
        border: none;
       
        `
const CarrinhoTitulo = styled.p`
        width:180px;    
        height:56px;
        font-weight:700;
        font-size:27px;
        color:#FFFFFF;
       
`
const  MenuCarrinho = styled.div`
      display: flex;
      position: relative;
      top: -470px;
      align-items:center;
      width: 486px;
      justify-content: space-around;

     
       
`
const CarrinhoLista = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        width: 486px;
        
       
`



function ModalCarrinho({abrindo,fechadoModalClicandoFora}) {
        return (
                <div >
                        <ModalContainer 
                        isOpen = {abrindo}
                        onBackgroundClick = {fechadoModalClicandoFora}
                        >
                                <MenuCarrinho>
                                <CarrinhoTitulo>Carrinho<br/>de compras</CarrinhoTitulo>
                                <ButtonFecharModal onClick={fechadoModalClicandoFora} >X</ButtonFecharModal>
                                </MenuCarrinho>
                                <CarrinhoLista>
                           
                
                                </CarrinhoLista>
                    
                        </ModalContainer>
                </div>
        )
}
export default ModalCarrinho