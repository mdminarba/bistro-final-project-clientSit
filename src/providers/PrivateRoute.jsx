
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './AuthProbider'
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

PrivateRoute.propTypes = {}

export default PrivateRoute




