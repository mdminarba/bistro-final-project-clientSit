import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,  FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin"
import useCarts from "../../Hooks/useCarts"


const DashBboard = () => {
    const [isAdmin] = useAdmin()
    const [cart]=useCarts()
    return (
        <div className="flex lg:gap-5  lg:flex-row flex-col ">
            <div className="lg:w-72 min-h-screen p-8 w-full bg-orange-400 ">
                <ul className="menu p-5  space-y-4">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashBboard/admin "
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
                            <li><NavLink to="/dashBboard/managebookings "
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
                                Manage Bookings </NavLink>
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
                                <li><NavLink to="/dashBboard/cart "
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isPending ? " bisque" : "wheat",
                                            backgroundColor: isActive ? "purple" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                >

                                    <FaShoppingCart>5555</FaShoppingCart>
                                    My Cart + {cart.length} </NavLink> 
                                </li>
                                <li className=""><NavLink to="/dashBboard/userHome "
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
                                    User Home </NavLink>
                                </li>
                                <li><NavLink to="/dashBboard/reservation "
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isPending ? " bisque" : "wheat",
                                            backgroundColor: isActive ? "purple" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}

                                >
                                    <FaCalendar></FaCalendar>
                                    Reservation </NavLink>
                                </li>
                                <li><NavLink to="/dashBboard/review "
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isPending ? " bisque" : "wheat",
                                            backgroundColor: isActive ? "purple" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                >
                                    <FaAd></FaAd>
                                    Add Review </NavLink>
                                </li>
                                <li><NavLink to="/dashBboard/mybooking "
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isPending ? " bisque" : "wheat",
                                            backgroundColor: isActive ? "purple" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                >
                                    <FaList />
                                    My Booking </NavLink>
                                </li>
                            </>

                    }
                    <div className="divider"></div>
                    <li><NavLink to="/menu"
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
                    <li><NavLink to="/oderNow/salat"
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
                    <li><NavLink to="/oderNow//contact"
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
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashBboard
