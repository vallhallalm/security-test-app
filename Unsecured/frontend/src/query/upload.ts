import api from '../api'
import { HTTPMethod } from '../dataType/HTTPMethod'
import conf from "../conf.json"

export async function postFile (file: FormData) {
    const uri=conf.API_BASE_URI+`upload`
    const result = await api.request(HTTPMethod.POST, uri, file) 
    return result
}