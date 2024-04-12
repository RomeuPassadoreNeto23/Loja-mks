import styled from 'styled-components';
const FooterContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        height:34px;
        background:#EEEEEE;  

`
const Texto = styled.p`
    width:270px;
    font-weight:400;
    height:17px;
    font-size: 12px;
    
    
`
function Footer() {
    return (
        <FooterContainer>
            <Texto>MKS sistemas © Todos os direitos reservados</Texto>
        </FooterContainer>
    )

}
export default Footer
