
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './AuthProbider'
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

PrivateRoute.propTypes = {}

export default PrivateRoute




// import { useContext } from "react"
// import { AuthContext } from "./AuthProbider"
// import { Navigate, useLocation } from "react-router-dom"




// const PrivateRoute = ({ children }) => {
//     const { user, loding } = useContext(AuthContext)
//     const location = useLocation()
//     if (loding) {
//         return <span className="loading loading-spinner loading-lg"></span>
//     }
//     if (user) {
//         return children
//     }
//     return <Navigate  to="/login" state={{from:location}} replace></Navigate>

// }


// export default PrivateRoute