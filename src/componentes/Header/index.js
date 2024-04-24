import styled from 'styled-components';
import Logo from '../Logo';
import Carrinho from '../../imagens/carrinho.png'
import ModalCarrinho from '../ModalCarrinho';
import { useState } from 'react';
import Modal from 'styled-react-modal'
const HeaderContainer = styled.div` 
    width:100%;
    height:101px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    background:#0F52BA;
    

`



const CarrinhoButton = styled.button`
    border-radius: 8px;
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

     function abrindoModal( e ) {
        setAbri(! abri)
     }
     console.log(abri,"abindo modal")
    return (
        <HeaderContainer>
            <ModalCarrinho
                abrindo={abri}
                onBackgroundClick = { abrindoModal } 
                onEscapeKeydown = { abrindoModal } 
            />
            <Logo />
            <CarrinhoButton onClick={abrindoModal}><CarrinhoImg  src={Carrinho}/>0</CarrinhoButton>
        </HeaderContainer>
    )

}
export default Header