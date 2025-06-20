import axios from "axios"

async function getProduto() {

    const response = await axios.get('http://localhost:8000/produtos').then(res => {

        return res.data
    }).catch(err => {
        console.log(err)
    })
    return response
}



export {
    getProduto
}