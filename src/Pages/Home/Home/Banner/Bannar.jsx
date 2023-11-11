
import "react-responsive-carousel/lib/styles/carousel.min.css";


import  imag1  from '../../../../assets/home/01.jpg';
import  imag2  from '../../../../assets/home/02.jpg';
import  imag3  from '../../../../assets/home/03.png';
import  imag4  from '../../../../assets/home/04.jpg';
import  imag5  from '../../../../assets/home/05.png';
import  imag6  from '../../../../assets/home/06.png';
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
                <div>
                    <img src={imag4} />
                    
                </div>
                <div>
                    <img src={imag5} />
                    
                </div>
                <div>
                    <img src={imag6} />
                    
                </div>
            
                
            
            </Carousel>
  )
  
  
}

export default Bannar
