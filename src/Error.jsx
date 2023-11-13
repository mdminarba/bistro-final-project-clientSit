import { Link } from 'react-router-dom'
import image from '../src/assets/404.gif'

const Errore = () => {
  return (
    <div className='text-center'>
      <div className="  lg:w-[1000px] lg:h-[600px] h-full m-auto">
      <img src={image} alt="" />
      </div>
      <div className="-mt-16 ">
       <Link to="/"><button className='btn btn-secondary w-80'>Mome</button></Link>
      </div>
    </div>
  )
}

export default Errore
