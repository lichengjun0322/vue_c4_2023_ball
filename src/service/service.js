import axios from 'axios';

import {Message} from 'element-ui';
const service = axios.create({
    baseUrl:"/api",
    setTimeout:4000,

});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (res,error) {
  let {status,message}=res.data;
  // 请求成功对响应数据做处理，此处返回的数据是axios.then(res)中接收的数据
  if (status!=200) {
    // code值为 0 或 200 时视为成功
    Message({message:message || error});
 }
 return Promise.reject(res)
    // 对响应数据做点什么

  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service;