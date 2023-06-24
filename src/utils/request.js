import axios from "axios"
// import { toast } from '~/composables/util'
// import { getToken } from '~/composables/auth'

// 有一就有二 如果是不同的业务可以有不同的baseURL 总之就是想办法少写重复代码
const service = axios.create({
  // baseURL:"/x_api",
  // baseURL: "yiispace.com:7086/index.php",
  baseURL: "http://127.0.0.1:7086/index.php",
  timeout: 6000,
  headers: {
    //  json应该是浏览器自动行为 只有fetch默认采用的是 'Content-Type':'text/plain',
    // "Content-type": "Application/json; Charset=UTF-8",
  },
  // async: false,
  crossDomain: true,
  withCredentials: true, // 😂 这个鬼bug 最好设置为false 但就不能携带cookie等信息了 请仔细参考文档该字段意义
  // withCredentials: false, // 😂 这个鬼bug 
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {

  config.headers["vue-from"] = 'axios'
  //  'Access-Control-Allow-Origin': '*'
  config.headers["Access-Control-Allow-Origin"] = '*'
  // config.headers["Content-type"] = 'text/plain'


  // 往header头自动添加token
  // const token = getToken()
  // if(token){
  //     config.headers["token"] = token
  // }

  return config;

}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // return response.data.data;

  return response

}, function (error) {
  // 对响应错误做点什么

  // toast(error.response.data.msg || "请求失败","error")

  // 请求失败时的操作
  if (error.response) {
    // HTTP错误状态码
    console.log(error.response.status);
    // 错误信息
    console.log(error.response.data.message);
  } else if (error.request) {
    // 没有收到响应
    console.log(error.request);
  } else {
    // 其他错误
    console.log('Error', error.message);
  }

  return Promise.reject(error);
})

/**
 * 配置实例的拦截器 并返回
 * 
 * const serviceX = configHttpClient(axios.create({...}) )
 */
function configHttpClient(axiosInstance) {
  // ... 把上面👆的两个拦截器配置逻辑移动到这里来  就可以对不同的axios做相同的配置了
  // TODO ...
  return axiosInstance
}

export default service