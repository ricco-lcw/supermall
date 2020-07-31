import axios from 'axios'
import baseURL from '@/baseURL'

const service = axios.create({
    baseURL
    // timeout: 5000
})

// 拦截器请求
service.interceptors.request.use( request => {
    return request
},err => {
    console.log(err)
})

// 拦截器响应
service.interceptors.response.use( response =>{
    return response.data
},err =>{
    console.log(err)
})

export default service
