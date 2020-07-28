import axios from "axios"

export default axios.create({
    baseURL:'https://techportfolio-be.herokuapp.com/',
    headers: {
        'Content-type' : 'application/json'
    }
})