import axios from 'axios'
const service = axios.create({
  // baseURL: 'http://localhost:3004/',
  // baseURL: 'http://124.223.164.10:6004/',
  // baseURL: 'http://relab.xidian.edu.cn/AgeAnnoMO/#/',
  // baseURL: 'http://127.0.0.1:8090',
  baseURL: 'https://relab.xidian.edu.cn/ageApi',
  timeout: 30000
})

export default service
