
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const axiosSecure = axios.create({
  baseURL: 'https://immigrationvisas-nnnn.vercel.app/'
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut } = useAuth()
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('requst stopped by interceptors', token)
    config.headers.authorization = `Bearer ${(token)}`;
    // console.log(config)
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axiosSecure.interceptors.request.use(function (response) {
    return response
  }, async (error) => {
    const status = error.response.status
    // console.log('status error in the interceptors', status)
    if (status === 401 || status === 403) {
      await logOut()
      navigate('/login')

    }
    return Promise.reject(error)
  })
  return axiosSecure;
}

export default useAxiosSecure
