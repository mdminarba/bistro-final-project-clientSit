import { useEffect, useRef, useState } from 'react'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import image from '../../../assets/quote-left 1.svg';
import '@smastrom/react-rating/style.css'
import SectionsTitle from '../Shared/SectionsTitle/SectionsTitle';

const Testimonials = () => {

    const [testimonials, settestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5002/review')
            .then(res => res.json())
            .then(data => settestimonials(data))
    }, [])

    const ratingRef = useRef(null);
    const [ratings, setRating] = useState(0);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!ratingRef.current.contains(event.target)) {
                setRating(0);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <section>
            <SectionsTitle
                heading={'TESTIMONIALS'}
                subHeding={'What Our Clients Say'}
            ></SectionsTitle>
            <div className="my-10 mx-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        testimonials.map(item => <SwiperSlide
                            key={item._id}
                        >

                            <div className=" p-24 text-center">

                                <div className=" flex my-10 gap-10 flex-col items-center justify-center">
                                    <Rating
                                        style={{ maxWidth: 200}}
                                        ref={ratingRef}
                                        value={ratings}

                                        onChange={setRating} />
                                    <img src={image} alt="" />
                                </div>
                                <p className="">{item.details}</p>
                                <h3 className="text-center text-3xl text-yellow-500 my-5">{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
