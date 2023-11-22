import { FaAd, FaBook, FaCalendar, FaHistory, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart,  FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin"
import useCarts from "../../Hooks/useCarts"


const DashBboard = () => {
    const [isAdmin] = useAdmin()
    const [cart]=useCarts()
    return (
        <div className="flex lg:gap-5  lg:flex-row flex-col ">
            <div className="lg:w-80 min-h-screen p-8 w-full bg-orange-400 ">
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

                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart + {cart.length} </NavLink> 
                                </li>
                                <li className=""><NavLink to="/dashBboard/userHome"
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
                                <li className=""><NavLink to="/dashBboard/paymint "
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
                                    Payment History </NavLink>
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
                                <li><NavLink to="/dashBboard/paymintHestory "
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isPending ? " bisque" : "wheat",
                                            backgroundColor: isActive ? "purple" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                >
                                    <FaHistory />
                                    Payment Real History  </NavLink>
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
