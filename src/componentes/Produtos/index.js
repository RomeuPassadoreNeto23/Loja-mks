import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import CardProduto from '../CardProduto';
import Loading from '../Loading';
import { getProduto } from '../Api/produto';

const ProdutosContainer = styled.section` 
    max-width: 938px;
    max-height 601px;
    width:938px; 
    height:601px;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center; 
    background:#FFFFFF;
    margin: 80px 200px 80px;

`




function Products() {
    const [produtos, setProdutos] = useState([])
    const [removeLoad, setRemoveLoad] = useState(false)

    useEffect(() => {
        setTimeout(
            () => {

                fetchProduto()
                setRemoveLoad(true)

            }, 30
        )




    }, [])

    async function fetchProduto() {
        const produtodata = await getProduto()

        console.log(produtodata, "res")
        setProdutos(produtodata.products)

    }


    return (


        <ProdutosContainer>

            {produtos && produtos.map(produto => (

                <CardProduto 
                text="Redesigned from scratch and completely revised."
                proc={produto.price}  
                nome={produto.name} 
                key={produto.id}
                img={produto.photo} />
            ))}
            {!removeLoad && <Loading/>}
        </ProdutosContainer>


    )

}
export default Products