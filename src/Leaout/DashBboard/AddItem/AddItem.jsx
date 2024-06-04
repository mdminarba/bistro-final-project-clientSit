import { useForm } from "react-hook-form"
import SectionsTitle from "../../../Pages/Home/Shared/SectionsTitle/SectionsTitle"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_iapi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {

    const { register, handleSubmit ,reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_iapi, imageFile,{
            headers: {
                'content-type': 'multipart/form-data',
              }
        })

        if (res.data.success) {
            // now send the menu item data to theserver with the image
            const menuItem ={
                name: data.name,
                recipe: data.recipe,
                number: data.number,
                pdf: data.pdf,
                category: data.category,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                setIsLoading(false);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title:'Add Item  succssfull',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        
        console.log('uwith image url',res.data)
    }
    return (

        <div>
             <div className="flex justify-center items-center">
             {isLoading && <span className="loading loading-spinner w-20  m-auto">Loading............</span>}
             </div>
         
            <SectionsTitle heading={'ADD AN ITEM'}
                subHeding={"What's new"} />
            <div className="bg-[#F3F3F3] pb-10  px-10 ">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" py-1">
                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text">Name *</span>
                            </label>
                            <input type="text" name="Name" {...register("name", { required: true })} placeholder="Type Name" className="input input-bordered" />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-5 ">
                         
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Passport Number *</span>
                                </label>
                                <input type="text" name="number" {...register("number", { required: true })} placeholder="Type Passport Number" className="input input-bordered" />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Choose Your Image *</span>
                                </label>
                               
                        <input {...register("image", { required: true })} className=" w-64 file-input" type="file" name="image" id="" />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">PDF LINK *</span>
                                </label>
                                <input type="text" name="pdf" {...register("pdf", )} placeholder="Type  PDF LINK" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className=" form-control mt-8  flex-col">
                        <div className=" w-full text-white rounded-md   "><button className=" w-full  btn-secondary btn" >Submit </button> </div>
                    </div>
                    {isLoading && <progress className="progress w-full"></progress>}

                </form>
            </div>
        </div>
    )
}

export default AddItem

