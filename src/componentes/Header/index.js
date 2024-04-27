import styled from 'styled-components';
import Logo from '../Logo';
import Carrinho from '../../imagens/carrinho.png'
import ModalCarrinho from '../ModalCarrinho';
import { useState } from 'react';

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
    const [abri, setAbri] = useState(false)

     function abrindoModal() {
        setAbri(! abri)
        localStorage.setItem("chave",abri)
    
     }
     console.log(abri,"abindo modal")
     

    
    return (
        <HeaderContainer>
            <Logo />
            <ModalCarrinho
                abrindo = {abri}
                fechadoModalClicandoFora = { abrindoModal } 
                fechadoModalClicandoDentro = { abrindoModal } 
            />
            <CarrinhoButton onClick={abrindoModal}><CarrinhoImg  src={Carrinho}/>0</CarrinhoButton>
        </HeaderContainer>
    )

}
export default Header