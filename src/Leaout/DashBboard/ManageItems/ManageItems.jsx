
import SectionsTitle from '../../../Pages/Home/Shared/SectionsTitle/SectionsTitle'
import { FaEdit, FaTrashAlt,  } from 'react-icons/fa'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import UseMenu from '../../../Hooks/UseMenu/UseMenu'
import { Link } from 'react-router-dom'

const ManageItems = () => {

    const axiosSecure = useAxiosSecure()
    const [menu, , refetch] =UseMenu()
console.log(menu)
    const handleDelete = (item) => {
        Swal.fire({
            title:  `${item.name} has been deleted.`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
                if (res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title:'Add Item  succssfull',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    }
                })
                console.log(res.data)
            }
        })
    }
  return (
    <div>
         <SectionsTitle heading={'MANAGE ALL ITEMS'}
                subHeding={"manage new items"} />

                <div className="">
                <div className=" ">
           
            <div className="flex justify-around font-bold">
                <h2 className=" text-4xl">Item: {menu.length} </h2>
 
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
                            <th>ACTION</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>
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
                                        <div className="font-bold">{item.name}</div>
                                    <td>
                                    <td>{item.price}</td>
                                    </td>
                                    <td> <Link to={`/dashBboard/updateItem/${item._id}`}> <button className="btn btn-sm text-white text-lg bg-[#D1A054]">
                                            <FaEdit />
                                        </button></Link></td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn btn-sm text-white bg-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>

                            )}


                    </tbody>


                </table>
            </div>
        </div>
                </div>
            
    </div>
  )
}

export default ManageItems
