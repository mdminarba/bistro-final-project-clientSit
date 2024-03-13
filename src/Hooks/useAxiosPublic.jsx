import axios from "axios"

const axiosPublic = axios.create({
  baseURL: 'https://immigrationvisas-mmmmmmmmm.vercel.app/'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
