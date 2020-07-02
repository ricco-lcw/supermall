import axios from 'axios'

export function resquest(config) {

    const server = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 请求拦截
    server.interceptors.request.use( resquest => {
        return resquest
    }, error => {
        console.log(error)
    })

    // 响应拦截
    server.interceptors.response.use( response => {
        return response.data
    }, error => {
        console.log(error)
    })

    return server(config)
}
