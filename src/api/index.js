import axios from 'axios'

const api = axios.create({
    baseURL: 'https://appill-api-main.onrender.com'
})

export default api;