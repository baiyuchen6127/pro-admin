import request from '@/utils/request'


export const getArticle = params=>{
    return request({
      method:"GET",
      url:'/mp/v1_0/articles',
      params
     
    })
    console.log(res);
  }