import axios from 'axios'
//loading功能
import { loadingStart, loadingOver } from '@/module/common.js'

const XXXRequest = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`
})
//解決api緩存
XXXRequest.defaults.headers.common.Pragma = 'no-cache'
//請求攔截
XXXRequest.interceptors.request.use(
    function (config) {
        loadingStart()
        return config
    },
    function (error) {
        loadingOver()
        return Promise.reject(error)
    }
)
//返回攔截
XXXRequest.interceptors.response.use(
    function (response) {
        loadingOver()
        if (response.data.StatusCode === 1000) {
            return response
        }
    },
    function (error) {
        loadingOver()
        return Promise.reject(error)
    }
)
export const XXX = (data) => XXXRequest.post("", data)