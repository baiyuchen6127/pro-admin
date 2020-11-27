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
export const getUserInFO = () => {

}
//修改用户信息
export const updateUser = () => {

}