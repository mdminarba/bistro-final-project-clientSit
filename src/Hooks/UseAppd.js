import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseAppd = () => {
  const axiosPublic = useAxiosPublic()
    const { data: menu = [] , isPending: loading , refetch} = useQuery({
      queryKey: ['menu'],
      queryFn: async () => {
        const res = await axiosPublic.get('/cards')
        return res.data;
      }
      
    })
    console.log()
  return [menu, loading,refetch]
}

export default UseAppd

