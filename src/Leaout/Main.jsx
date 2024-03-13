
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Home/Shared/Navbar/Footer/Footer'
import Navbar from '../Pages/Home/Shared/Navbar/Navbar'
import ItemMenu from '../Pages/menu/ItemMenu'

const Main = () => {
  const locetion = useLocation()
  const notHeaderFoder = locetion.pathname.includes('login')
  return (
    <div>
      {notHeaderFoder || <Navbar></Navbar>}
      {notHeaderFoder || <ItemMenu/>}
      <Outlet></Outlet>
     
      {notHeaderFoder ||  <Footer></Footer>}
    </div>
  )
}

export default Main
