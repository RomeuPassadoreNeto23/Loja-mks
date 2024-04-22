import Modal from "styled-react-modal";
import { ModalProvider } from "styled-react-modal";
import styled from "styled-components";

const ModalEstilo = Modal.styled` 
        width:500px; 
        height:1000px;
        background:#0F52BA;
        padding:100%;
        display:flex;
        justify-content:space-around;
        flex-direction: column;
        `
const ButtonFecharModal = styled.button`
        width:90px;    
        height:40px;
        display:flex;
        justify-content:center;

        `
const CarrinhoTexto =styled.p``

function ModalCarrinho({nomeProduto,precoProdoto,quatidaProduto}) {
   return(
    <ModalProvider>
        <ModalEstilo>

        </ModalEstilo>
    </ModalProvider>
   ) 
}