import request from './request'

export const getinterventions = (params) => {
  return request({
    url: '/interventions',
    params
  })
}
