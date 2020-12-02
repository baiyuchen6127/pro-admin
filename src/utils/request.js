// 请求模块
import axios from 'axios'
//创建axios的实例
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn' //配置的基础路径
})
//请求拦截器
request.interceptors.request.use(function (config) {
    const user=JSON.parse(window.localStorage.getItem('user'))
    //如果有登录信息，则设置统一的token
    if(user){
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
}, function (err) {
    return Promise.reject(error)
})

//响应拦截器
export default request