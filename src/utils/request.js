// 请求模块
import axios from 'axios'
//创建axios的实例
const request = axios.create({
    baseURL:'http://ttapi.research.itcast.cn'//配置的基础路径
})
export default request