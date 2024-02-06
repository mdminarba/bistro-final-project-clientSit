import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const UseJob = () => {
  const axiosPublic = useAxiosPublic()
    const { data: menu = [] , isPending: loading , refetch} = useQuery({
      queryKey: ['menu'],
      queryFn: async () => {
        const res = await axiosPublic.get('/job')
        return res.data;
      }
    })
  return [menu, loading,refetch]
}

export default UseJob

