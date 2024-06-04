import { Helmet } from "react-helmet-async"
import Bannar from "../Banner/Bannar"
import BannerH from "./BannerH"









const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Australia Gov|Home</title>
      </Helmet>

      <Bannar></Bannar>
      <BannerH></BannerH>
    </div>
  )
}

export default Home
