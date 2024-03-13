import axios from "axios"

const axiosPublic = axios.create({
  baseURL: 'https://immigrationvisas-nnnn.vercel.app/'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
