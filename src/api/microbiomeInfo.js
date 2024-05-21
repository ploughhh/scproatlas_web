import request from './request'

export const getmicrobiomeInfo = (params) => {
  return request({
    url: '/microbiomeInfo',
    params
  })
}
