import { Link, NavLink } from "react-router-dom"
// import pic5 from '../../../../assets/magi.svg';


const Navbar = () => {
  // const { logOut, user, } = useContext(AuthContext)
  // const handleSignOut = () => {
  //     logOut()
  //         .then()
  //         .catch()
  // }
  const link = <>
    <li className=" transition ease-in-out  delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "wheat" : "black",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Home</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/addJob" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "white ",
        backgroundColor: isActive ? "purple" : " ",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Add Job</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/postedJobs" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Posted Jobs</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/mybits" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>My Bids</NavLink></li>
    <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"><NavLink to="/bidRequests" style={({ isActive, isPending, isTransitioning }) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? " bisque" : "wheat",
        backgroundColor: isActive ? "purple" : "",
        viewTransitionName: isTransitioning ? "slide" : "",
      };
    }}>Bid Requests</NavLink></li>


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
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
 


  )
}

export default Navbar
