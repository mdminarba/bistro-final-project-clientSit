import axios from "axios"

const axiosPublic = axios.create({
  baseURL: 'https://bistro-finel-project-serve.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
