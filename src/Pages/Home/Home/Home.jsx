import FoodCetagory from "../FoodCetagory/FoodCetagory"
import Bannar from "./Banner/Bannar"
import BistroBoss from "./BistroBoss/BistroBoss"
import ChefRecommends from "./ChefRecommends/ChefRecommends"
import Featured from "./Featured/Featured"
import FormOurManu from "./FormOurManu/FormOurManu"
import Testimonials from "./Testimonials/Testimonials"


const Home = () => {
  return (
    <div>
<Bannar></Bannar>
<FoodCetagory></FoodCetagory>
<BistroBoss></BistroBoss>
<FormOurManu></FormOurManu>
<ChefRecommends></ChefRecommends>
<Featured></Featured>
<Testimonials></Testimonials>
    </div>
  )
}

export default Home
