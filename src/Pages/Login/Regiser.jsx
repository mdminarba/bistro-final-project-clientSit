import { useForm } from "react-hook-form"
import {   useContext, useState } from "react";
import picture from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Google from "./Google";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProbider";




const Regiser = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUser } = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createUser(  data.email, data.password, data.name,  data.photo)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
    }

    const [showpassword, setshopassword] = useState(false)
   
    
    return (
        <div>
            <div>
            <Helmet>
        <title>Bistro Boss | Reriser</title>

      </Helmet>
                <div className="">
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                            <div className="text-center ">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className=" flex lg:gap-5 ">
                                <div className="">
                                    <img src={picture} alt="" />
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                            {errors.name && <span className="text-red-500 mt-2">Nane is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                            {errors.email && <span className="text-red-500 mt-2">Email is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type={showpassword ? 'text' : "password"} {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z]).{8}/
                                            },)} name="password" placeholder="password" className="input input-bordered " />
                                            {errors.password && <span className="text-red-500  mt-2">Password is required</span>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-500 mt-2">Password must be 6 charaters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-500 mt-2">Password must be less then 20 </p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-500 mt-2"> Password must be one  uppercase one lowercase one number one special charaters. </p>}
                                            <span className='relative -top-8 lg:left-72 left-72 w-6' onClick={() => setshopassword(!showpassword)}>{
                                                showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }</span>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">PhotoURL</span>
                                                </label>
                                                <input type="url" {...register("Photo", { required: true })} name="Photo" placeholder="Photourl"

                                                    className="input input-bordered" />
                                                {errors.Photo && <span className="text-red-500 mt-2">PhotoURL is required</span>}
                                            </div>
                                            <label className="label">
                                                <p className="font-medium">Already have an account <Link className="btn btn-sm btn-primary ml-5 text-white " to="/login">Login</Link></p>
                                            </label>
                                        </div>
                                  
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Register</button>

                                            <Google></Google>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regiser