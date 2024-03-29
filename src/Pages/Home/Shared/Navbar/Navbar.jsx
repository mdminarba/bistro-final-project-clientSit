import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../../providers/AuthProbider"
import useAdmin from "../../../../Hooks/useAdmin";

import M from '../../../../assets/../../public/Banner-01 (1).webp';
import { useContext } from "react";



const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)

  const [isAdmin] = useAdmin()
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const link = <>
    <li className=" transition ease-in-out btn delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "red" : "",
        color: isPending ? "red" : "black",
        backgroundColor: isActive ? "red" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Home</NavLink></li>
    <li className=" transition ease-in-out btn delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/application" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "red" : "",
        color: isPending ? " red" : "black ",
        backgroundColor: isActive ? "red" : " ",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Application</NavLink></li>

    <li className=" transition ease-in-out delay-150 btn hover:-translate-y-1 hover:scale-110">
      <NavLink to="/jobOffer"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "red" : "",
            color: isPending ? " bisque" : "black",
            backgroundColor: isActive ? "red" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }} >JOB OFFER

      </NavLink>
    </li>

    {
      user && isAdmin && <li className=" transition ease-in-out delay-150 btn hover:-translate-y-1 hover:scale-110"><Link className="text-black" to="/dashBboard/adminHome">Admin Dashboard</Link></li>
    }



    {
      user ? <>

        <span className='mr-2 text-black hidden btn items-center gap-4  rounded-lg py-2 lg:px-4 lg:font-extrabold'>  {user.displayName} <img className='w-12 border  rounded-full' src={user.photoURL} alt="" />  </span>
        <button onClick={handleSignOut} className=" ml-4 py-2 px-5 btn rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-black font-medium ">Sign Out</button>
      </>
        :
        <Link to="/login">
          <button className=" ml-4 py-2 btn px-5 text-black font-medium rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Login</button>
        </Link>
    }

  </>
  return (



    <div className="navbar  z-10 bg-white  text-white max-w-screen-xl mx-auto">

      <div className="ml-[300px]">
        <div className="dropdown mt-5  relative">
          <label tabIndex={0} className="btn  z-50 -mt-4 btn-secondary px-5   lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 ml w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h24M4 12h24m-24 6h24" /></svg>
          </label>
          <ul tabIndex={0} className="menu  menu-sm dropdown-content z-50 mt-3 absolute -right-1 p-2 shadow bg-white text-center rounded-box m-auto w-80">
            {link}
          </ul>
        </div>
        

      </div>
      <div className="navbar-center hidden -lg:mt-5 lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>

      <div className="navbar-start ">
     
      </div>

    </div>



  )
}

export default Navbar
