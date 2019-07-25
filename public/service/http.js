import axios from 'axios';
import qs from 'qs';
// 设置默认的请求超时时间
axios.defaults.timeout = 60000

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // form-data参数配置
  if (config.content === 'application/x-www-form-urlencoded') {
    config.headers['Content-Type'] = config.content
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // TODO:根据接口状态判断数据
  return Promise.resolve(response)
}, (error) => {
  return Promise.reject(error)
})

export function Fetch(ajaxOptions = {}, name = '未知文件') {
  // 默认post
  ajaxOptions.method = ajaxOptions.method || 'post'
  return new Promise((resolve, reject) => {
    axios(ajaxOptions).then((response) => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
