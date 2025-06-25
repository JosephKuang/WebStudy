import axios  from "axios";

//创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 60000
})

//创建响应拦截器

request.interceptors.response.use(response => { 
    return response
},err=>{
    return Promise.reject(err)
})

export default request


