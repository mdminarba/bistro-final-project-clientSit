
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Home/Shared/Navbar/Footer/Footer'
import Navbar from '../Pages/Home/Shared/Navbar/Navbar'

const Main = () => {
  const locetion = useLocation()
  console.log(locetion)
  const notHeaderFoder = locetion.pathname.includes('login')
  return (
    <div>
      {notHeaderFoder || <Navbar></Navbar>}
      
      <Outlet></Outlet>
     
      {notHeaderFoder ||  <Footer></Footer>}
    </div>
  )
}

export default Main
