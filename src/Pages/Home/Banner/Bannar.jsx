
import "react-responsive-carousel/lib/styles/carousel.min.css";


import  imag1  from '../../../../src/assets/home/Banner-01 (1).webp';
import  imag2  from '../../../../src/assets/home/Banner-02.webp';
import  imag3  from '../../../../src/assets/home/Banner-03.webp';
import { Carousel } from "react-responsive-carousel";

const Bannar = () => {
  return (

      <Carousel>
                <div>
                    <img src={imag1} />
                    
                </div>
                <div>
                    <img src={imag2} />
                    
                </div>
                <div>
                    <img src={imag3} />
                    
                </div>
            
             
                
            
            </Carousel>
  )
  
  
}

export default Bannar
