import url from './basehttp'



const createContact = data => {
    return url.post('/api/contact', data)
}


export default {
    createContact
}