




import UseAppd from '../../../Hooks/UseAppd'
import HomeCard from './HomeCard'

const BannerH = () => {
    const [menu] = UseAppd()
   
  return (
    <div>
       
    <div className="bg-pink-50">
    <div className="grid lg:grid-cols-4  grid-cols-1 lg:mx-5 gap-3 lg:py-5 ">
      {
        menu.map(card =><HomeCard key={card._id} card={card} ></HomeCard>)
        }
      </div>
    </div>


    </div>
  )
}

export default BannerH

