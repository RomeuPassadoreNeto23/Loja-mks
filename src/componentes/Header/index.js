import styled from 'styled-components';
import Logo from '../Logo';
import Carrinho from '../../imagens/carrinho.png'
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';


const HeaderContainer = styled.div` 
    width:100vw;
    height:101px;
    display: flex;
    max-height:101px;
    justify-content:  space-around;
    align-items: center; 
    background:#0F52BA;
    

`


const CarrinhoButton = styled.button`
    border-radius: 8px;
    position: relative;
    left:100px;
    border: none;
    font-weight:700;
    font-size:18px;
    width:90px;
    padding: 20px;
    height:45px;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`

const CarrinhoImg = styled.img`
    width:19.01px;
    height:18px;
    color:#000000;
`

function Header() {
    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

     
     

    
    return (
        <HeaderContainer>
            <Logo />
            <CarrinhoButton onClick={() => setIsCartVisible(!isCartVisible)}><CarrinhoImg  src={Carrinho}/>{cartItems.length}</CarrinhoButton>
        </HeaderContainer>
    )

}
export default Header