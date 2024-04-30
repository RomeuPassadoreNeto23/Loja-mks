import styled from "styled-components";
import React, { useContext } from 'react';
import propTypes from 'prop-types';

const CarrinhoCard = styled.div`
      width:379px;
      height:95px;
      max-width:379px;
      max-height:95px;
      justify-content:space-evenly;
      align-items: center;
      display: flex;
      background-color:#FFFFFF;
      border-radius: 8px;
      margin: 10px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);


`
const ButtonQuantida = styled.button`
    width:50px;
    height:19px;
    justify-content:space-around;
    align-items: center;
    display:flex;
    border-radius: 4px;
    border: 0px, 0px, 0px, 0px;
    border-block-color:#BFBFBF;
     
`
const ButtonQuantidaMais = styled.p`
    width:5px;
    color:#000000;
    height:10px;
    font-size: 8px;
    font-weight:400;


`
const ButtonQuantidaMenos = styled.p`
    width:5px;
    color:#000000;
    height:15px;
    font-size:12px;
    font-weight:400;


`
const ButtonQuantidaNumero = styled.p`
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
const ProdutoQtd = styled.p`
    width:11px;
    color:#000000;
    height:6px;
    font-size:5px;
    font-weight:400;


`
const PercoProduto = styled.p`
    width:62px;
    color:#000000;
    height:17px;
    font-size: 14px;
    font-weight:700;

`


const ButtonRemover = styled.button`
    width:18px;
    height:18px;
    border: none;
    justify-content:center;
    align-items: center;
    font-size: 14px;
    color:#FFFFFF;
    font-weight:400;
    border-radius:100%;
    background-color:#000000;
    

`





function CardCarrinho({data}) {
    const  {id,img,nome,preco,quatidade} = data 
    return(
        <>
        <CarrinhoCard key={id} >
         <CardImg src={img}/> 
         <NomeProduto>{nome}</NomeProduto>
         <ButtonQuantida><ButtonQuantidaMenos>-</ButtonQuantidaMenos><ButtonQuantidaNumero>{`|${quatidade}|`}</ButtonQuantidaNumero><ButtonQuantidaMais>+</ButtonQuantidaMais></ButtonQuantida>
         <PercoProduto>{`$${preco}`}</PercoProduto>
         <ButtonRemover>x</ButtonRemover>
        </CarrinhoCard>
        </>
    )
}
export default CardCarrinho
CardCarrinho.propTypes = {
    data: propTypes.object
  }.isRequired;