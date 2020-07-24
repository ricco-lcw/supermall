import  request  from '../request'

// 获取homeSwiperList接口
export const createData = () => request.get('/home/multidata')

// 获取home/data接口
export const createPage = (type,page) => request({ url: '/home/data', params: {type, page} })

