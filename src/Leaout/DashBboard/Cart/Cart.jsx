import { FaTrashAlt } from "react-icons/fa"
import useCarts from "../../../Hooks/useCarts"
import SectionsTitle from "../../../Pages/Home/Shared/SectionsTitle/SectionsTitle"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"


const Cart = () => {
    const [cart ,refetch] = useCarts()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0){
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });}
                    })
            }
        })
    }
    return (
        <div className=" ">
            <SectionsTitle heading={'WANNA  MORE?'}
                subHeding={"my card"} />
            <div className="flex justify-around font-bold">
                <h2 className=" text-4xl">Item: {cart.length} </h2>
                <h2 className="text-4xl ">Total Price: {totalPrice} </h2>
                <button className="btn btn-primary btn-sm" >Pay</button>

            </div>
            <div className="lg:overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask  w-24 h-20">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-sm text-white bg-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>

                            )}


                    </tbody>


                </table>
            </div>
        </div>
    )
}


export default Cart
