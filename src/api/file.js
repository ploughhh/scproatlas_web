import request from './request'

export const getfile = (params) => {
  return request({
    url: '/download',
    responseType: 'blob',
    params
  })
}
