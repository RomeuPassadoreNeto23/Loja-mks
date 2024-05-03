import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CardCarrinho from "../CardCarrinho";
import styled from "styled-components";
import formatCurrency from '../../utils/formatCurrency';


const ModalContainer = styled.section`
         width:100%;    
         height:100%;
         box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
         background-color:#0F52BA;
         position: fixed;
         display: flex;
         flex-direction: column;
         max-width:486px;
         max-height: 1024px;
         top: 0;
         right: 0;
         transform: translate(110%, 0);
         transition: all 400ms ease;
         &.cart--active {
                transform: translate(0, 0);
              }
         
`
const CarrinhoLista = styled.section`
        display: flex;
        align-items:center;
        flex-grow: 1;
        overflow: auto;
        justify-content:flex-start;
        flex-direction: column;
        width:486px;
        
     
        
       
`

const MenuCarrinho = styled.div`
      display: flex;
      align-items:flex-start;
      width: 486px;
      justify-content: space-around;

`
const ButtonFecharModal = styled.button`
        width:38px;    
        height:38px;
        border-radius: 100%;
        background-color:#000000;
        color:#FFFFFF;
        border: none;
        position: relative;
        top: 30px;
        &:hover {
                cursor: pointer;
            }
       
        `
const CarrinhoTitulo = styled.p`
        width: auto;    
        height:56px;
        font-weight:700;
        font-size:27px;
        color:#FFFFFF;
       
`
const TotalContainer = styled.div`
        display: flex;
        align-items:center;
        width: 486px;
        justify-content: center;

`
const BtnfContainer = styled.div`
        display: flex;
        justify-content:flex-end;
        align-items:center;
        width: 486px;
       

`
const BtnfinalizarComprar = styled.button`
      display: flex;
      align-items:center;
      width: 486px;
      color:#FFFFFF;
      background-color:#000000;
      font-weight:700;
      font-size:27px;
      justify-content: center;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
      height:100px;
      &:hover {
        cursor: pointer;
    }


      
`


function ModalCarrinho() {
        const { cartItems, isCartVisible, setIsCartVisible, setCartItems } = useContext(AppContext);
        const total = cartItems.reduce((acc, item) => item.quatidade * item.preco + acc, 0)
        console.log(cartItems, "cartcartItems")
        return (
                <ModalContainer className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
                        <MenuCarrinho>
                                <CarrinhoTitulo>Carrinho<br />de compras</CarrinhoTitulo>
                                <ButtonFecharModal onClick={() => setIsCartVisible(!isCartVisible)} >X</ButtonFecharModal>
                        </MenuCarrinho>
                        <CarrinhoLista>
                                {cartItems && cartItems.map(produto => (
                                        <CardCarrinho key={produto.id} data={produto} />
                                ))}
                        </CarrinhoLista>
                        <TotalContainer>
                                <CarrinhoTitulo>{`Total: ${formatCurrency(total, 'BRL')}`}</CarrinhoTitulo>
                        </TotalContainer>
                        <BtnfContainer>
                                <BtnfinalizarComprar onClick={() => setCartItems([])}>FINALIZAR COMPRAR</BtnfinalizarComprar>
                        </BtnfContainer>

                </ModalContainer>
        )
}
export default ModalCarrinho

