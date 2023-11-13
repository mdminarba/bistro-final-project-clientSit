import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slide4  from '../../../assets/home/slide1.jpg';
import Slide5  from '../../../assets/home/slide2.jpg';
import Slide6  from '../../../assets/home/slide3.jpg';
import Slide9  from '../../../assets/home/slide4.jpg';
import SectionsTitle from '../Shared/SectionsTitle/SectionsTitle';

const FoodCetagory = () => {
  return (
    <>
   <section>
    <SectionsTitle   heading={'ORDER ONLINE'}
     subHeding={"From 11:00am to 10:00pm"} />
   
   
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-16"
    >
  
    
     
      <SwiperSlide>
        <img className=' relative  '   src={Slide4} alt="" />
        <h3 className="text-4xl uppercase text-center absolute left-20 text-white  font-bold -mt-16">Chalat </h3> 
        </SwiperSlide>
      <SwiperSlide>
        <img className=' relative  '   src={Slide5} alt="" />
        <h3 className="text-4xl uppercase text-center absolute left-20 text-white  font-bold -mt-16">Sups</h3> 
        </SwiperSlide>
      <SwiperSlide>
        <img className='relative  '   src={Slide6} alt="" />
        <h3 className="text-4xl uppercase text-center absolute left-20 text-white  font-bold -mt-16">pizzas</h3> 
        </SwiperSlide>
   
      <SwiperSlide>
        <img className='relative  '   src={Slide9} alt="" />
        <h3 className="text-4xl uppercase text-center absolute left-20 text-white  font-bold -mt-16">Ceck </h3> 
        </SwiperSlide>
 
    </Swiper>
   </section>
  </>
  )
}

export default FoodCetagory
