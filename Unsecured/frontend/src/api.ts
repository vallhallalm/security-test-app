import axios from 'axios'
import { HTTPMethod } from './dataType/HTTPMethod'

async function request (method: HTTPMethod, uri: string, formData?: FormData ) {
    if (formData) {
        try {

            const result = await axios({
                'method':method,
                'url': uri,
                'data': formData,
                'headers': {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return result
        }   catch(err) {
            console.log(err)
        }
    } else {
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
    
    
}

export default {request}