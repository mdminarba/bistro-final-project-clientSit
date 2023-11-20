import Swal from "sweetalert2"
import useAuth from "../../../../Hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom"

import useCarts from "../../../../Hooks/useCarts"
import useAxiosSecure from "../../../../Hooks/useAxiosSecure"



const ShopCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item
  const navigate = useNavigate()
  const locetion = useLocation()
  const { user } = useAuth()
  const axiosSecur = useAxiosSecure()
  const [,refetch,] = useCarts()
  const handleAddtoCard = () => {
    if (user && user.email) {
    
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecur.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            let timerInterval;
            Swal.fire({
              title: `${name} added to your carts`,
              html: "I will close in <b></b> milliseconds.",
              timer:1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);

                refetch();
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add card ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please login  ?"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: locetion } })
        }
      });
    }


  }

  return (

    <div className="  relative shadow-xl">
      <p className='absolute  font-extrabold text-white bg-black px-2   rounded-md md:left-72 left-72 lg:top-3  lg:left-70'>$ {price} </p>
      <figure> <img className="" src={image} /></figure>
      <div className="card-body text-center">
        <h2 className="'card-title'">
          <div className="font-bold text-2xl">{name}</div>
        </h2>
        <p >{recipe} </p>
        <div className="card-actions justify-center">

          <button
            onClick={handleAddtoCard}
            className='border-0 border-b-4 bg-gray-100 btn-outline text-yellow-600 btn' >add to cart</button>
        </div>
      </div>
    </div>


  )
}

export default ShopCard
