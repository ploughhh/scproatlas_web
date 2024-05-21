import request from './request'

export const getdmrInfo = (params) => {
  return request({
    url: '/dmrInfo',
    params
  })
}
