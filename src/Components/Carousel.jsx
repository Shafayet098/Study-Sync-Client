import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import Hero from './Hero';
import './Carousel.css'
import study from './../assets/Study.json'
import learning  from './../assets/learning.json'
import study2  from './../assets/study2.json'
import study3  from './../assets/Happy Students Studying..json'


const Carousel = () => {
     const data = [
        {
            heading: 'Study Together, Achieve More',
            title: 'Collaborate on assignments, share ideas, and succeed as a team.'
        },
        {
            heading: 'Smarter Group Study Starts Here',
            title: 'Connect with classmates, manage assignments, and learn better together.'
        },
        {
            heading: 'Your All-in-One Study Hub',
            title: 'Organize group assignments, track progress, and stay ahead.'
        },
        {
            heading: 'Learn Better. Together.',
            title: 'Join study groups, share knowledge, and complete assignments faster.'
        }
     ]
    return (
        <Swiper
            modules={[Scrollbar, Autoplay]}

            scrollbar={
                {
                    draggable: true,
                }
            }
            loop={true}
            speed={2000}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

            className="mySwiper"
        >
            <SwiperSlide><Hero 
            heading={data[0].heading} 
            title={data[0].title} 
            study={study}></Hero></SwiperSlide>
            <SwiperSlide><Hero 
            heading={data[1].heading} 
            title={data[1].title} 
            study={learning}></Hero></SwiperSlide>
            <SwiperSlide><Hero 
            heading={data[2].heading} 
            title={data[2].title} 
            study={study2}></Hero></SwiperSlide>
            <SwiperSlide><Hero 
            heading={data[3].heading} 
            title={data[3].title} 
            study={study3}></Hero></SwiperSlide>

        </Swiper>
    );
};

export default Carousel;


