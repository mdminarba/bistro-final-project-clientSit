
import { Link } from 'react-router-dom'
import MenuItems from '../../../MenuItems/MenuItems'
import Cover from '../../../Shared/Cover/Cover'


const MenuCetagory = ({ items, subHeding, heading, img }) => {
  return (
    <div>
      <div className="">
        {heading && <Cover
          heading={heading}
          subHeding={subHeding}
          img={img}
        >
        </Cover>}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-[1000px] m-auto justify-items-center mt-10 gap-5">
        {
          items.map(item => <MenuItems key={item._id} item={item} />)
        }
      </div>
      <div className="flex justify-center my-10    ">
        <Link to={`/oderNow/${heading}`}><button className="btn text-black  mb-5 ml-5 border-0 border-b-4  btn-outline ">ORDER YOUR FAVOURITE FOOD</button></Link>
      </div>
    </div>
  )
}

export default MenuCetagory
