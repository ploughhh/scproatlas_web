import request from './request'

export const getlifespan = (params) => {
  return request({
    url: '/lifespan',
    params
  })
}
