import { useForm } from "react-hook-form"
import SectionsTitle from "../../../Pages/Home/Shared/SectionsTitle/SectionsTitle"

import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_iapi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const  {name,  recipe, category,price ,_id}= useLoaderData()

    const { register, handleSubmit ,reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {

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
                price: parseFloat(data.price),
                category: data.category,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){

                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title:'Add Item updated succssfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        
        console.log('uwith image url',res.data)
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
                            <div className="form-control flex-1 ">
                                <label className="label">
                                    <span className="label-text">Category Select *</span>
                                </label>

                                <select   name="category"  className="select select-bordered w-full " defaultValue={category} {...register("category", { required: true })}>
                                    <option disabled value="defaulld">Category</option>
                                    <option value="Salat">Salat</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Drins">Drins</option>
                                </select>
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Price *</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} {...register("price", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Details *</span>
                        </label>
                        <textarea name="recipe" className="textarea textarea-bordered   h-32" defaultValue={recipe} {...register("recipe", { required: true })} placeholder="Details"></textarea>
                    </div>
                    <div className="flex  form-control flex-col">
                        <input {...register("image",  { required: true })} className="my-5 w-64 file-input" type="file"  name="image" id="" />
                        <div className=" w-32 p-2 text-white rounded-md  btn btn-warning bg-[#B58130] "><button className=" flex ml-2 gap-2 items-center " >Add Item <FaFileUpload/></button> </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UpdateItem
