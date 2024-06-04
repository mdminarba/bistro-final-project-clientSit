





import { Helmet } from 'react-helmet-async'
import UseJob from '../../../Hooks/UseJob'
import DataCard from './DataCard'
const Data = () => {
    const [menu] = UseJob()
   
  return (
    <div>
    <Helmet>
    <title>Australia Gov|Job Offer</title>
  </Helmet>
       
    <div className="bg-pink-50">
    <div className="grid lg:grid-cols-4 grid-cols-1 lg:mx-5 gap-3 lg:py-5 ">
      {
        menu.map(cards =><DataCard key={cards._id} card={cards} ></DataCard >)
        }
      </div>
    </div>


    </div>
  )
}

export default Data

