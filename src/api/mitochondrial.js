import request from './request'

export const getmitochondrial = (params) => {
  return request({
    url: '/mitochondrial',
    params
  })
}
