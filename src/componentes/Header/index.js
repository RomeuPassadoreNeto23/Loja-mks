import styled from 'styled-components';
import Logo from '../Logo';
import Carrinho from '../../imagens/carrinho.png'
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

    return (
        <HeaderContainer>
            <Logo />
            <CarrinhoButton ><CarrinhoImg src={Carrinho}/>0</CarrinhoButton>
        </HeaderContainer>
    )

}
export default Header