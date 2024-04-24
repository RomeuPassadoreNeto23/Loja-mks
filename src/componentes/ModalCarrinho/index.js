import Modal from "styled-react-modal";

import styled from "styled-components";

const ModalEstilo = Modal.styled` 
        width: 20rem;
        height: 20rem;
        display: flex;
        align-items:flex-end;
        justify-content:flex-end;
        background-color:#0F52BA;
        `
const ButtonFecharModal = styled.button`
        width:90px;    
        height:40px;
        display:flex;
        justify-content:center;

        `
const CarrinhoTexto = styled.p``

function ModalCarrinho({abrindo,fechadoModalClicandoFora}) {
        return (
                <div >
                        <ModalEstilo 
                        isOpen = {abrindo}
                        onBackgroundClick = {fechadoModalClicandoFora}
                        >
                    
                        </ModalEstilo>
                </div>
        )
}
export default ModalCarrinho