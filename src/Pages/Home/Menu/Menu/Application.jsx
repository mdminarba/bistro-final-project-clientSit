import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_iapi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Application = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
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
                fatherName: data.fatherName,
                motherName: data.motherName,
                nid: data.nid,
                passportNumber: data.passportNumber,
                phoneNumbe: data.phoneNumbe,
                email: data.email,
                district: data.district,
                policeStation: data.policeStation,
                postOffice: data.postOffice,
                postCode: data.postCode,
                village: data.village,
                gender: data.gender,
                birthday: data.birthday,
                marriedStatus: data.marriedStatus,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.post('/appli', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {

                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: 'Add Item  succssfull',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log('uwith image url', res.data)
    }
    return (
        <div className=" relative">
        <Helmet>
        <title>AUTRALIA GOV | APPLICATION</title>
      </Helmet>
            <h2 className=" bg-white w-full py-3 pl-10 font-bold absolute top-4 shadow-lg ">Application</h2>
            <div className="bg-[#F3F3F3] pb-10 pt-10 lg:px-10 ">

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className=" py-5 flex  lg:flex-row lg:items-center flex-col gap-4">
                        <div className="form-control lg:w-[900px] ">
                            <div className="grid lg:grid-cols-3 my-8 md:grid-cols-2 grid-cols-1 px-10 pb-5 lg:gap-8  bg-white">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Full Name<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="Name" {...register("name", { required: true })} placeholder="Enter Full Name " className="input  border border-slate-400" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Father Name<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="fatherName" {...register("fatherName", { required: true })} placeholder="Enter Father Name " className="input  border border-slate-400" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Mother Name<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="motherName" {...register("motherName", { required: true })} placeholder="Enter Mother Name " className="input  border border-slate-400" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">NID<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="nid" {...register("nid", { required: true })} placeholder="Enter NID Number" className="input  border border-slate-400" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Passport Number<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="passportNumber" {...register("passportNumber", { required: true })} placeholder="Enter Passport Number " className="input  border border-slate-400" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Phone Numbe<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="text" name="phoneNumbe" {...register("phoneNumbe", { required: true })} placeholder="Enter Phone " className="input  border border-slate-400" />
                                </div>
                            </div>
                            {/* 111111 */}
                            <div className="form-control  ">
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 pb-5 lg:gap-5   bg-white">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Email<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Email " className="input  border border-slate-400" />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">District<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="text" name="district" {...register("district", { required: true })} placeholder="Enter District " className="input  border border-slate-400" />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Police Station<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="text" name="policeStation" {...register("policeStation", { required: true })} placeholder="Enter Police Station" className="input  border border-slate-400" />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Post Office<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="text" name="postOffice" {...register("postOffice", { required: true })} placeholder="Enter Post Office" className="input  border border-slate-400" />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Post Code<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="text" name="postCode" {...register("postCode", { required: true })} placeholder="Enter Post Code" className="input  border border-slate-400" />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Village/City<span className="text-red-600">*</span></span>
                                        </label>
                                        <input type="text" name="village" {...register("village", { required: true })} placeholder="Enter Full Name " className="input  border border-slate-400" />
                                    </div>
                                </div>
                            </div>
                            {/* 222222 */}

                        </div>
                        <div className="ml-7">
                            <div className="  ">

                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-lg ">Choose Image<span className="text-red-600">*</span></span>
                                    </label>
                                    <input {...register("image", { required: true })} className="  file-input file-input-bordered file-input-secondary w-full max-w-xs" type="file" name="image" id="" />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-lg ">Gender<span className="text-red-600">*</span></span>
                                        </div>
                                        <select name="gender" {...register("gender", { required: true })} className="select text-lg select-bordered">
                                            <option disabled selected>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </label>


                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-lg ">Married Status<span className="text-red-600">*</span></span>
                                        </div>
                                        <select name="marriedStatus" {...register("marriedStatus", { required: true })} className="select text-lg select-bordered">
                                            <option className="text-black" disabled selected>Select</option>
                                            <option>Merried</option>
                                            <option>Single</option>
                                            <option>Divorced</option>
                                            <option>Widowed</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-lg ">Birthday<span className="text-red-600">*</span></span>
                                    </label>
                                    <input type="date" name="birthday" {...register("birthday", { required: true })} placeholder="" className="input text-lg w-80 shadow-2xl " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input className=" p-2 text-white font-bold  px-6 btn-primary rounded-md " type="submit" value="Submit" />

                    </div>



                </form>
            </div>
        </div>
    )
}

export default Application

