import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://192.168.100.10:3000'
   baseURL: 'http://192.168.100.13:3000'
})

export default api