import { useForm } from "react-hook-form"
import SectionsTitle from "../../../Pages/Home/Shared/SectionsTitle/SectionsTitle"

import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { FaFileUpload } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_iapi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = ({card}) => {
    // const [datas, setdatas] = useState([])
    // useEffect(()=>{
    //     fetch(`http://localhost:5005/menu`)
    //     .then(res=>res.json())
    //     .then(data=>setdatas(data))
    //   },[])

   

    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { name, recipe, category, number, _id } = card
    console.log(card)
    console.log(name)
    const onSubmit = async (data) => {
        
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_iapi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }


        })

        if (res.data.success) {
            // now send the menu item data to theserver with the image
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                number: data.number,
                pdf: data.pdf,
                category: data.category,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {

                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: 'Add Item updated succssfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
           
        }
        

        console.log('uwith image url', res.data)

    }
    return (

        <div>
        
            <SectionsTitle heading={'UPDATE ITEM'}
                subHeding={"Update info"} />
            <div className="bg-[#F3F3F3] pb-10  px-10 ">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" py-1">
                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text">Name *</span>
                            </label>
                            <input type="text" name="Name" defaultValue={name} {...register("name", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-5 ">
                       
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Number*</span>
                                </label>
                                <input type="text" name="number" defaultValue={number} {...register("number", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">PDF LINK *</span>
                                </label>
                                <input type="text" name="pdf" {...register("pdf", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
              
                    <div className="flex  form-control flex-col">
                        <input {...register("image", { required: true })} className="my-5 w-64 file-input" type="file" name="image" id="" />
                        <div className=" w-32 p-2 text-white rounded-md  btn btn-warning bg-[#B58130] "><button className=" flex ml-2 gap-2 items-center " >UPDATE ITEM<FaFileUpload /></button> </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem
