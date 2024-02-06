import {  FaBook,  FaHome, FaList,  FaSearch, FaShoppingCart,  FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin"
import { Helmet } from "react-helmet-async"



const DashBboard = () => {
    const [isAdmin] = useAdmin()
 
    return (
        <div className="flex lg:gap-5  lg:flex-row  ">
                <Helmet>
    <title>AUTRALIA GOV | ADMIN DESH BOARD</title>
  </Helmet>
            <div className="lg:w-80 min-h-screen w-full bg-orange-400 ">
                <ul className="menu p-5  space-y-4">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashBboard/adminHome"
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? " bisque" : "wheat",
                                        backgroundColor: isActive ? "purple" : "",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >

                                <FaShoppingCart></FaShoppingCart>
                                Admin Home </NavLink>
                            </li>
                            <li className=""><NavLink to="/dashBboard/addItems "
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? " bisque" : "wheat",
                                        backgroundColor: isActive ? "purple" : "",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                <FaUtensils></FaUtensils>
                                Add Items </NavLink>
                            </li>
                            <li><NavLink to="/dashBboard/manageitems "
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? " bisque" : "wheat",
                                        backgroundColor: isActive ? "purple" : "",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}

                            >
                                <FaList></FaList>
                                Manage Items </NavLink>
                            </li>
                            <li><NavLink to="/dashBboard/aplicationCard "
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? " bisque" : "wheat",
                                        backgroundColor: isActive ? "purple" : "",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                <FaBook></FaBook>
                                Aplication</NavLink>
                            </li>
                            <li><NavLink to="/dashBboard/users "
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? " bisque" : "wheat",
                                        backgroundColor: isActive ? "purple" : "",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                <FaUsers></FaUsers>
                                All User </NavLink>
                            </li>

                            </>
                            :
                            <>
                              
                            </>

                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? " bisque" : "wheat",
                                backgroundColor: isActive ? "purple" : "",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >
                        <FaHome></FaHome>
                        Home </NavLink>
                    </li>
                    <li><NavLink to="/"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? " bisque" : "wheat",
                                backgroundColor: isActive ? "purple" : "",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                    </li>
                    <li><NavLink to="/"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? " bisque" : "wheat",
                                backgroundColor: isActive ? "purple" : "",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >
                        <FaVoicemail></FaVoicemail>
                        Contact </NavLink>
                    </li>


                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashBboard
