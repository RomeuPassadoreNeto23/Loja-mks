import styled from "styled-components";

const CarrinhoCard = styled.div`
      width:379px;
      height:95px;
      background-color:#FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);


`
const buttonQuantida =styled.button`
    width:50px;
    height:19px;
    border-radius: 4px;
    border: 0px, 0px, 0px, 0px;
    border-block-color:#BFBFBF;
     
`


function CardCarrinho(params) {
    return(
        <>
        <CarrinhoCard>
           
        </CarrinhoCard>
        </>
    )
}
export default CardCarrinho