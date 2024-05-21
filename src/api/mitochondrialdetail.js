import request from './request'

export const getmitochondrialdetail = (params) => {
  return request({
    url: '/mitochondrialdetail',
    params
  })
}
