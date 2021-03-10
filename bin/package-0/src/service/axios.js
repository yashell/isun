import axios from 'axios'
import Vue from 'vue'
import Router from '@/router/index'
// 全局默认配置
// 设置 POST 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 60000
// axios.defaults.baseURL = '/' // api 即vue.config.js 中配置的地址

// 配置 CORS 跨域
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

// 请求发起前拦截器
axios.interceptors.request.use(config => {
    const token = window.localStorage.getItem('platformToken')
    if (token || config.url === '/api/login') {
        // 将token放到请求头发送给服务器,将tokenkey放在请求头中
        // config.headers.accessToken = token
        // config.headers.Authorization = 'Bearer ' + token
        // 也可以这种写法
        config.headers.token = token
    }
    config.headers.token = token
    return config
}, error => {
    // 异常处理
    return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(response => {
    const { code, msg } = response.data
    if (code === 407 || code === 405) {
        Vue.prototype.$message.error(msg)
        Router.replace('/Login')
    }
    return response.data
}, error => {
    if (error.response) {
        const statusCode = parseFloat(error.response.status)
        const statusMsg = error.response.data.message
        switch (statusCode) {
        case 401:
            break
        case 403:
            break
        case 404:
        case 504:
            break
        default:
            Vue.prototype.$message.error(`【${statusCode}】 - ${statusMsg}`)
            break
        }
    } else {
        Vue.prototype.$message.error(`【${error}】 - 网络超时`)
    }

    return Promise.reject(error)
})

// 导出
export default axios
