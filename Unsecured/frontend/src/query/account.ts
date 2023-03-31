import api from '../api'
import { HTTPMethod } from '../dataType/HTTPMethod'
import conf from "../conf.json"

export async function getAccount (id: number) {
    const uri=conf.API_BASE_URI+`account/${id}/`
    const result = await api.request(HTTPMethod.GET, uri) 
    return result
}