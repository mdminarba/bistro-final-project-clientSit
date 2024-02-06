



import Swal from 'sweetalert2'


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
            <SectionsTitle heading={'Success Application'}
                subHeding={"Application"} />

            <div className="">
                <div className=" ">

                    <div className="flex justify-around font-bold">
                        <h2 className=" text-4xl">Mane: {menu.length} </h2>

                        {/* <button className="btn btn-primary btn-sm" >Pay</button> */}

                    </div>
                    <div className="my-10 w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {
                            menu.map((item) => 
                            <div key={item._id} className="  border-2 rounded-md  bg-base-100  shadow-xl">
                                    <div  className=" flex gap-4">
                                        
                                        <figure> <img className=' w-32' src={item.image} alt="" /></figure>
                                        <div className="">
                                            <div className="">
                                                <span className='font-bold  text-black'>Name:</span> {item.name}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>FatherName:</span> {item.fatherName}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>MotherName:</span>  {item.motherName}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>NID Number:</span>  {item.nid}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Passport Number:</span>  {item.passportNumber}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Email:</span>  {item.email}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Phone Numbe:</span>  {item.phoneNumbe}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Police Station:</span>  {item.policeStation}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>District:</span>  {item.district}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Post Office:</span>  {item.postOffice}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'> Village:</span>  {item.village}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Gender:</span>  {item.gender}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Married Status:</span>  {item.marriedStatus}
                                            </div>
                                            <div className="">
                                                <span className='font-bold  text-black'>Birthday:</span>  {item.birthday}
                                            </div>
                                           
                                            <button onClick={() => handleDelete(item)} className="btn btn-sm my-5 text-white  bg-red-600">Detet</button>
                                        </div>
                                    </div>
                                    </div>
                            )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AplicationCard
