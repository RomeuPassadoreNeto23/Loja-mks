import axios from "axios"

async function getProduto() {

    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC').then(res => {

        return res.data
    }).catch(err => {
        console.log(err)
    })
    return response
}



export {
    getProduto
}