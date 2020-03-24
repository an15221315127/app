import axios from 'axios';
import {Tip} from "beeshell/dist/components/Tip";
import {navigaton} from "@/Screen/Home";

const baseURL = "https://app.btcming.club/api/"
// 创建axios实例
const service = axios.create({
    baseURL: baseURL, // api 的 base_url
    timeout: 5000, // 请求超时时间
    withCredentials:true,
    headers:{
        Accept: 'application/json', // 提交参数的数据方式,这里以json的形式
        'Content-type':'application/json'
    }
})

// request拦截器
service.interceptors.request.use(
  config => {

      return config
  },
  error => {
      // Do something with request error
      Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response:any) => {
      /**
       * code为非200是抛错 可结合自己业务进行修改
       */

      const res = response.data

      if (200 != response.status) {
          return Promise.reject('error')
      } else {
          // 判断后端返回的code如果不是1说明有异常情况，将提示信息展示出来就好
          switch (res.code) {
              case 1:
                  return res;
              case -1:
                  Tip.show(res.msg)
                  setTimeout(()=>{
                      navigaton.navigate("Login")
                  },1500)
                  return Promise.reject('error')
              default:
                  Tip.show(res.msg)
                  return Promise.reject('error')

          }

      }
  },
  error => {
      return Promise.reject(error)
  }
)


/**
 * post方法
 * @param url
 * @param data
 * @param config
 */
export function post(url:string, data:object | undefined, config?:object) {
    return service.post(url, data, config)
}


/**
 * get方法
 * @param url
 * @param params
 * @param config
 */
function get(url:string, params:object | undefined, config?:object) {
    const getConfig = {}
    if (params) {
        Object.assign(getConfig, {
            params
        })
    }
    if (config) Object.assign(getConfig, config)

    return service.get(url, getConfig)
}

/**
 * put方法
 * @param url
 * @param data
 * @param config
 */
function put(url:string, data?:object, config?:object) {
    return service.put(url, data, config)
}

/**
 * delete方法
 * @param url
 * @param params
 * @param config
 * @constructor
 */
function Delete(url:string, params?:object, config?:object) {
    const delConfig = {}
    if (params) {
        Object.assign(delConfig, {
            params
        })
    }
    if (config) Object.assign(delConfig, config)

    return service.delete(url, delConfig)
}

export default {
    post,
    get,
    put,
    Delete
}
