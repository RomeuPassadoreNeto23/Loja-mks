import styled from "styled-components";

const CarrinhoCard = styled.div`
      width:379px;
      height:95px;
      background-color:#FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);


`
const buttonQuantida = styled.button`
    width:50px;
    height:19px;
    border-radius: 4px;
    border: 0px, 0px, 0px, 0px;
    border-block-color:#BFBFBF;
     
`
const buttonQuantidaMais = styled.p`
    width:5px;
    color:#000000;
    height:10px;
    font-size: 8px;
    font-weight:400;


`
const buttonQuantidaMenos = styled.p`
    width:5px;
    color:#000000;
    height:15px;
    font-size:12px;
    font-weight:400;


`
const buttonQuantidaNumero = styled.p`
    width:5px;
    color:#000000;
    height:10px;
    font-size: 8px;
    font-weight:400;


`
const CardImg = styled.img`
    width:46px;
    height:57px;
   

`
const NomeProduto = styled.p`
    width:113px;
    color:#2C2C2C;
    height:33px;
    font-size: 13px;
    font-weight:400;


`
const PercoProduto = styled.p`
    width:62px;
    color:#000000;
    height:17px;
    font-size: 14px;
    font-weight:700;

`
const ButtonRemoverIcone = styled.p`
    width:8px;
    color:#FFFFFF;
    height:17px;
    font-size: 14px;
    font-weight:400;

`
const ButtonRemover = styled.button`
    width:18px;
    height:18px;
    border-radius:100%;
    background-color:#000000;
    

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