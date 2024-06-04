import axios from "axios"

const axiosPublic = axios.create({
  baseURL: 'https://parsonal-habib2.vercel.app/'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
