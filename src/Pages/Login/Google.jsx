

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../configFile/firebase.config";


const Google = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const googleHandleSingin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        navigate(location?.state ? location.state : '/')
        console.log(user)

        const users = {
          user,
          provider,
          lastLoggedAt: result.user?.metadata?.lastSignInTime
        }
        fetch('http://localhost:5001/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(users)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.acknowledged) {
              Swal.fire(
                'success',
                'User Createt Successfully.',
                'success'
              )
            }

          })
      })
      .catch(error => {

        console.log('error', error.message)
      })
    console.log("google singin")

  }
  return (
    <div className='w-80 m-auto'>
      <Link onClick={googleHandleSingin} className='lg:w-72 m-auto mt-5'>
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