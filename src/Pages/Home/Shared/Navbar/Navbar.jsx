import { Link, NavLink } from "react-router-dom"
import icon from "../../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
import { useContext } from "react"
import { AuthContext } from "../../../../providers/AuthProbider"
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../../Hooks/useCarts";
import useAdmin from "../../../../Hooks/useAdmin";


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext)
  const [cart]=useCarts()
const[isAdmin]=useAdmin()
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const link = <>
    <li className=" transition ease-in-out  delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Home</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/menu" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "white ",
        backgroundColor: isActive ? "purple" : " ",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Our Menu</NavLink></li>

    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/oderNow/contact" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
      
    }}>Contact</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/oderNow/salad" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Our Shop</NavLink ></li>


    <li>
      <NavLink to="/dashBboard/cart" 
      style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }} >
        <button className="flex items-center">
         <FaShoppingCart></FaShoppingCart>
          <div className="btn-secondary  ml-3">+ {cart.length}</div>
        </button>
      </NavLink>
    </li>

    {
      user && isAdmin && <li><Link to="/dashBboard/adminHome">Dashboard</Link></li>
    }
    {
      user && !isAdmin && <li><Link to="/dashBboard/userHome">Dashboard</Link></li>
    }


    {
      user ? <>

        <span className='mr-2 text-black hidden  items-center gap-4  rounded-lg py-2 lg:px-4 lg:font-extrabold'>  {user.displayName} <img className='w-12 border  rounded-full' src={user.photoURL} alt="" />  </span>
        <button onClick={handleSignOut} className=" ml-4 py-2 px-5  rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white font-medium ">Sign Out</button>
      </>
        :
        <Link to="/login">
          <button className=" ml-4 py-2 px-5 text-white font-medium rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Login</button>
        </Link>
    }

  </>
  return (



    <div className="navbar fixed z-10 bg-opacity-50  bg-black  text-white max-w-screen-xl mx-auto">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white  ">Bristo Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link} <img className="w-10" src={icon} alt="" />
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <>

            <span className='mr-2 text-black  flex items-center gap-4   rounded-lg py-2 lg:px-4 lg:font-extrabold'> <span className="navbar-center hidden lg:flex">{user.displayName} </span> <img className='w-12 border  rounded-full' src={user.photoURL} alt="" />  </span>
            <button onClick={handleSignOut} className="bg-lime-400 lg:hidden mr-8 py-2 px-5  rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white font-medium ">Sign Out</button>
          </>
            :
            <Link to="/login">
              <button className="bg-red-500 py-2 px-5 lg:hidden text-white font-medium rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Login</button>
            </Link>
        }
      </div>
    </div>



  )
}

export default Navbar
