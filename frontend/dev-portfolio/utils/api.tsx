import axios from 'axios'

export const baseUrl = 'http://127.0.0.1:8000'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api;