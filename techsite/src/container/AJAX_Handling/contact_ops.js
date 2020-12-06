import url from '../AJAX_Handling/basehttp'



const createContact = data => {
    return url.post('/api/contact', data)
}


export default {
    createContact
}