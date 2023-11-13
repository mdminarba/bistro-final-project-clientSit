import { Helmet } from "react-helmet-async"
import Bannar from "../Banner/Bannar"
import FoodCetagory from "../FoodCetagory/FoodCetagory"
import BistroBoss from "../BistroBoss/BistroBoss"
import ChefRecommends from "../ChefRecommends/ChefRecommends"
import Featured from "../Featured/Featured"
import Testimonials from "../Testimonials/Testimonials"
import PopularManu from "../FormOurManu/PopularManu"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Bannar></Bannar>
      <FoodCetagory></FoodCetagory>
      <BistroBoss></BistroBoss>
      <PopularManu></PopularManu>
      <div className=" bg-black text-center py-28 text-3xl text-white">
        <div className="">Call Us: +88 0192345678910</div>
      </div>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
