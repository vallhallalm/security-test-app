import axios from 'axios'
import { HTTPMethod } from './dataType/HTTPMethod'

async function request (method: HTTPMethod, uri: string ) {
    try {

        const result = await axios({
            'method':method,
            'url': uri,
        })
        return result
    }   catch(err) {
        console.log(err)
    }
    
}

export default {request}