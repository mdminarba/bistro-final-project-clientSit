import axios from "axios"

const axiosPublic = axios.create({
  baseURL: 'https://australiaimmigrationvisa-hz2zi3dvj-md-minar-babus-projects.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
