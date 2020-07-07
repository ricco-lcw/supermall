import axios from 'axios'

export function request(config) {
  const intance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截器
  intance.interceptors.request.use( request => {

    console.log('请求成功---',request)
    return request
    },error => {

      console.log('请求失败---',error)

    }
  )

  // 响应拦截器
  intance.interceptors.response.use(response => {

      console.log('响应成功---',response)

      return response.data
    },error => {

      console.log('响应失败---',error)

    }
  )

  return intance(config)
}
