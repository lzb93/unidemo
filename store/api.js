
import request, { get, post } from '../store/util'
import config from '../store/config'
// 登录（获取token）
export function thirdLogin(params) {
  return post(config.http + '/User/thirdLogin', params,true)
}

export function channel(params) {
  return get(config.host + '/channel', params,false)
}