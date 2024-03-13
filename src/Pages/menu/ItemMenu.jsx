import { Link } from "react-router-dom"
import Menu from "./Menu"


const ItemMenu = () => {
  return (
    <Link to="/menu">
    <div className="lg:text-right right-5 text-left mb-5 lg:-mt-14 -mt-12">
        <Menu></Menu>
      
    </div>
    </Link>
  )
}

export default ItemMenu
