import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { FaTrashAlt, FaUsers } from "react-icons/fa"
import Swal from "sweetalert2"

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');

            return res.data
        }


    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-senter",
                        icon: "success",
                        title: `${user.name} is an admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className=" flex lg:justify-evenly gap-5  w-full">
                <h2 className=" text-center lg:text-3xl font-bold text-2xl">All Users</h2>
                <h2 className=" text-center lg:text-3xl font-bold text-2xl ">Total Users : {user.length}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm text-white bg-orange-500 text-xl">
                                            <FaUsers />
                                        </button>}

                                    </td>
                                    <th>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-sm text-white bg-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers
