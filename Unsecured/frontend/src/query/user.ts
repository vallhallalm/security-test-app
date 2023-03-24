import api from '../api'
import { HTTPMethod } from '../dataType/HTTPMethod'
import conf from "../conf.json"

export async function getAuth (id: string, password: string) {
    const uri=conf.API_BASE_URI+`user/${id}/${password}`
    const result = await api.request(HTTPMethod.GET, uri) 
    return result
}