

import { FaEdit, FaTrashAlt, } from 'react-icons/fa'

import Swal from 'sweetalert2'

import { Link } from 'react-router-dom'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import SectionsTitle from '../../Shared/SectionsTitle/SectionsTitle'
import UseAppli from '../../../../Hooks/UseMenu/UseAppli'


const AplicationCard = () => {


    // You can also perform other actions or open a modal here
    // For example, if you want to open a modal, you might set a modal state
    // and use that state to conditionally render a modal component.


    const axiosSecure = useAxiosSecure()
    const [menu, , refetch] = UseAppli()
    console.log(menu)
    const handleDelete = (item) => {
        Swal.fire({
            title: `${item.name} has been deleted.`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/appli/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: 'Add Item  succssfull',
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

                        {/* <button className="btn btn-primary btn-sm" >Pay</button> */}

                    </div>
                    <div className="mt-10">
                        <table className="table lg:w-full w-[500px]">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th> IMAGE</th>
                                    <th>NAME</th>
                                    <th>FATHER NAME</th>
                                    <th>MOTHER NAME</th>
                                    <th>NID</th>
                                    <th>PASSPORT NUMBER</th>
                                    <th>EMAIL</th>
                                    <th>PHONE NUMBER</th>
                                    <th>POLICE STATION</th>
                                    <th>DISTRICT</th>
                                    <th>POST OFFICE</th>
                                    <th>POST CODE</th>
                                    <th>VILLAGE/CITY</th>
                                    <th>MARRIED STATUS</th>
                                    <th>MARRIED STATUS</th>
                                    <th>BIRTHDAY</th>
                                    <th>DELET</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, index) =>
                                        <tr key={item._id}>
                                            <div className="">


                                                <div className="card w-96 bg-base-100 shadow-xl">
                                                    <figure> <img className='lg:w-[1200px] md:w-[7000px] w-[7000px] m-auto' src={item.image} alt="" /></figure>
                                                    <div className="card-body">
                                                        <div className="card-title">
                                                        Name: {item.name}
                                                        </div>
                                                        <div className="card-title">
                                                        FatherName: {item.fatherName}
                                                        </div>
                                                        <div className="card-title">
                                                        motherName: {item.motherName}
                                                        </div>
                                                        <div className="card-title">
                                                        NID Number: {item.nid}
                                                        </div>
                                                        <div className="card-title">
                                                        Passport Number: {item.passportNumber}
                                                        </div>
                                                        <div className="card-title">
                                                        Email: {item.email}
                                                        </div>
                                                        <div className="card-title">
                                                        Phone Numbe: {item.phoneNumbe} 
                                                        </div>
                                                        <div className="card-title">
                                                        Police Station: {item.policeStation}
                                                        </div>
                                                        <div className="card-title">
                                                        District: {item.district} 
                                                        </div>
                                                        <div className="card-title">
                                                        Post Office: {item.postOffice}
                                                        </div>
                                                        <div className="card-title">
                                                        Village: {item.village}
                                                        </div>
                                                        <div className="card-title">
                                                        Gender: {item.gender}
                                                        </div>
                                                        <div className="card-title">
                                                        Married Status: {item.marriedStatus}
                                                        </div>
                                                        <div className="card-title">
                                                        Birthday: {item.birthday}
                                                        </div>
                                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                                        <div className="card-actions justify-end">
                                                            <div className="badge badge-outline">Fashion</div>
                                                            <div className="badge badge-outline">Products</div>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask  w-24 h-20">
                                                            <a href={item.pdf}>
                                                                <img className='lg:w-[1200px] md:w-[7000px] w-[7000px] m-auto' src={item.image} alt="" />
                                                            </a>


                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <div className="font-bold">{item.name}</div>

                                            <td> {item.fatherName}</td>
                                            <td> {item.motherName}</td>
                                            <td>{item.nid} </td>
                                            <td>{item.passportNumber} </td>
                                            <td>{item.email} </td>
                                            <td>{item.phoneNumbe} </td>
                                            <td>{item.policeStation} </td>
                                            <td>{item.district} </td>
                                            <td>{item.postOffice} </td>
                                            <td>{item.postCode} </td>
                                            <td>{item.village} </td>
                                            <td>{item.gender} </td>
                                            <td>{item.marriedStatus} </td>
                                            <td>{item.birthday} </td>
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

export default AplicationCard
