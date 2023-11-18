import { useForm } from "react-hook-form"
import SectionsTitle from "../../../Pages/Home/Shared/SectionsTitle/SectionsTitle"
import { FaUtensils } from "react-icons/fa"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_iapi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
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
            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){

                reset()
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
            <SectionsTitle heading={'ADD AN ITEM'}
                subHeding={"What's new"} />
            <div className="bg-[#F3F3F3] pb-10  px-10 ">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" py-1">
                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text">Name *</span>
                            </label>
                            <input type="text" name="Name" {...register("name", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-5 ">
                            <div className="form-control flex-1 ">
                                <label className="label">
                                    <span className="label-text">Category Select *</span>
                                </label>

                                <select defaultValue="defaulld" name="category" className="select select-bordered w-full " {...register("category",  { required: true })}>
                                    <option disabled value="defaulld">Category</option>
                                    <option value="salat">salat</option>
                                    <option value="pizza">sizza</option>
                                    <option value="soup">soup</option>
                                    <option value="desserts">desserts</option>
                                    <option value="drins">drins</option>
                                </select>
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Price *</span>
                                </label>
                                <input type="text" name="price" {...register("price", { required: true })} placeholder="Type Your Name" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Details *</span>
                        </label>
                        <textarea name="recipe" className="textarea textarea-bordered  h-32" {...register("recipe", { required: true })} placeholder="recipe"></textarea>
                    </div>
                    <div className="flex  form-control flex-col">
                        <input {...register("image", { required: true })} className="my-5 w-64 file-input" type="file" name="image" id="" />
                        <div className=" w-32 p-2 text-white rounded-md   bg-[#B58130] "><button className=" flex ml-2 gap-2 items-center " >Add Item <FaUtensils></FaUtensils></button> </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddItem
