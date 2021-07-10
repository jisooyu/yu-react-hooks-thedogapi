import axios from 'axios'

export const API_DEFAULT_PARAMS = {
    api_key:"e67f5a28-ee72-4d60-84b1-2d9f70f35e4a",
    headers: { "Content-Type": "multipart/form-data" }
}
export default axios.create({
    baseURL: "https://api.TheDogAPI.com/v1/images/",
})

