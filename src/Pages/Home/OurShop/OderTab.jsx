import { Swiper, SwiperSlide } from 'swiper/react';
import ShopCard from './ShopHome/ShopCard'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  }
  return (

    <>
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 m-auto  gap-10">
      {
        items.map(item => <ShopCard key={item._id} item={item} />)
      }

    </div>

      </SwiperSlide>
    </Swiper>
  </>
 
  )
}

export default OderTab
