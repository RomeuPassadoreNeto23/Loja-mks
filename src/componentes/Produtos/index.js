import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import CardProduto from '../CardProduto';
import Loading from '../Loading';
import { getProduto } from '../Api/produto';



const ProdutosContainer = styled.section` 
    max-height 601px;
    height:601px;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center; 
    background:#FFFFFF;
    margin: 80px 200px 80px;
    position: relative;
    left: 100px;

`




function Products() {
    const [produtos, setProdutos] = useState([])
    const [removeLoad, setRemoveLoad] = useState(false)
    

    useEffect(() => {
        setTimeout(
            () => {

                fetchProduto()
                setRemoveLoad(true)

            }, 3000
        )




    }, [])

    async function fetchProduto() {
        const produtodata = await getProduto()
        console.log(produtodata,"api get")
        setProdutos(produtodata)

    }
       
  
    return (


        <ProdutosContainer>
          

            {produtos && produtos.map(produto => (
                
                    <CardProduto
                        id={produto.id}
                        key={produto.id}
                        text={produto.descricao}
                        preco={produto.price}
                        nome={produto.name} 
                        img={produto.photo} />
                
            ))}
            {!removeLoad && <Loading />}

        </ProdutosContainer>


    )

}
export default Products