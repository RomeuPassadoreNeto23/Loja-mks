import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CardCarrinho from "../CardCarrinho";
import styled from "styled-components";

/* const ModalContainer = Modal.styled` 
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

const CarrinhoLista = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        width: 486px;
       
` */
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
       
        `
const CarrinhoTitulo = styled.p`
        width:180px;    
        height:56px;
        font-weight:700;
        font-size:27px;
        color:#FFFFFF;
       
`


function ModalCarrinho() {
        const { cartItems, isCartVisible,setIsCartVisible } = useContext(AppContext);

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

                </ModalContainer>
        )
}
export default ModalCarrinho

