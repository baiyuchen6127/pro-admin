//用户的相关请求模块
//用户登录
import request from "@/utils/request.js";
export const login = data => {
  return  request({
        method: "POST",
        url: "/mp/v1_0/authorizations",
        data: data,
      })
}
//获取登录信息
export const getUserProfile = () => {
    return request({
      method:"GET",
      url:'/mp/v1_0/user/profile',
      headers:{
        Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mzc5OTUyMjEsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.JHbBj4dtZ6Uy0VBbiIqg0CpzOEf-HdQjbN5qmCa9beo'
      }
      
    })
}
//修改用户信息
export const updateUser = () => {

}