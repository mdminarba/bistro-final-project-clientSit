
import { FaGoogle } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Google = () => {

  const navigate = useNavigate()

  const { googleSignIn } = useAuth()
  const exiosPublik = useAxiosPublic()

  const googleHandleSignin = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        const userInfo = {
          email: result.user?.email,
          name : result.user?.diplayName
        }
        exiosPublik.post('/user',userInfo)
        .then(res =>{
          console.log(res.data)
          Swal.fire({
            title: "Login successfully!",
            text: "user profile info  updated",
            icon: "success"
        });
          navigate("/")
        })
      })
    
      
  }

  return (
    <div className=' m-auto'>
      <Link onClick={googleHandleSignin} className='lg:w-72 m-auto mt-5'>
        <button ></button>
        <div className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border-2 text-center rounded-md mt-2 p-2 flex items-center gap-2  border-fuchsia-600 ">
          <div>
            <span className="text-2xl font-extrabold text-red-500"><FaGoogle></FaGoogle></span>
          </div>
          <h2 className="text-xl font-extrabold text-black text-center">Login With Google</h2>
        </div>

      </Link>
    </div>
  )
}

export default Google