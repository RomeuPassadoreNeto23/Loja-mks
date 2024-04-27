import styled from 'styled-components';
import logo from '../../imagens/logo.png'
const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        position: relative;
        right: 100px;
       
        
    `   
const LogoTexto = styled.p`
    margin: 100px 0px 70px;
    width:200px;
    height:44px;
    font-weight:300;
    font-size:20px;
    text-align: center;
    color:#FFFFFF;

`
const LogoImg = styled.img`
    margin-right:-40px;
    width:128px;
    height:44px;

`



function Logo() {
    return (
        <LogoContainer>

            <LogoImg src={logo} />
            <LogoTexto>Sistemas</LogoTexto>

        </LogoContainer>

    )

}
export default Logo