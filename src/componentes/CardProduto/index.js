import styled from "styled-components"
import sacola from "../../imagens/sacola.png"

const Card = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width:218px;
    max-height:285px
    justify-content: space-around;
    flex-direction: column;
    width: 218px;
    height:285px;
    
`
const Imgbutton = styled.img`

    width:12px; 
    height:13.5px;
    margin-right:10px;
`
const CardImg = styled.img`
    width: 172px; 
    height:118.21px;
    
`

const CardName = styled.p`
    max-width:124px;
    margin-right: 10px;
    max-height:38px
    width: 124px;
    color: #2C2C2C; 
    height:38px;
    font-size: 16px;
    font-weight:400;

`
const CardProc = styled.p`
    width: 70px; 
    display: flex;
    height:26px;
    font-weight:700;
    font-size: 12px;
    color: #FFFFFF;
    text-align:center;
    max-width:70px;
    max-height:26px;
    border-radius: 5px;
    background-color: #2C2C2C;  


`
const CardTexto = styled.p`
    width:192px;
    color:#2C2C2C;
    height:25px;
    font-size: 12px;
    font-weight:400;
`
const CardButton = styled.button`
    width: 218px; 
    margin-top: 16px;
    height:31.91px;
    border-radius:0px 0px 8px 8px;
    background: #0F52BA;
    box-shadow: none;
    border-style: none;
    display: flex;
    justify-content:center;
    align-items: center; 
    text-align: center;
    font-weight:600;
    font-size: 14px;
    color:#FFFFFF;
    &:hover {
        cursor: pointer;
    }

`


function CardProduto({key,img,nome,text,proc}){
    return(
        <Card key={key}>
            <CardImg src={img}></CardImg>
            <div style={{display:'flex'}}>
                <CardName>{nome}</CardName> <CardProc>{`R$${proc}`}</CardProc>
            </div>
            <CardTexto>{text}</CardTexto>
            <CardButton><Imgbutton src={sacola} />Comprar</CardButton>
        </Card>
    )
}
export default CardProduto