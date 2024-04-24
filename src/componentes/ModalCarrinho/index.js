import Modal from "styled-react-modal";

import styled from "styled-components";

const ModalEstilo = Modal.styled` 
        width: 20rem;
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:#000000;
        `
const ButtonFecharModal = styled.button`
        width:90px;    
        height:40px;
        display:flex;
        justify-content:center;

        `
const CarrinhoTexto = styled.p``

function ModalCarrinho({abrindo}) {
        return (
                <div>
                        <ModalEstilo isOpen={abrindo}>
                    
                        </ModalEstilo>
                </div>
        )
}
export default ModalCarrinho