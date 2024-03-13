import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  imag1  from '../../../../src/assets/home/Banner-01 (1).webp';
import  imag2  from '../../../../src/assets/home/Banner-02.webp';
import  imag3  from '../../../../src/assets/home/Banner-03.webp';
class AutoplaySlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust the autoplay speed as per your requirement
    };
    return (
      <Slider className='lg:container m-auto w-[364px] '  {...settings}>
        <div>
          <img src={imag1} alt="" className=' lg:h-screen  h-60' />
        </div>
        <div>
        <img src={imag2} alt="" className='lg:h-screen  h-60' />
        </div>
        <div>
        <img src={imag3} alt="" className='lg:h-screen  h-60' />
        </div>
      </Slider>
    );
  }
}

export default AutoplaySlider;
