import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallary1 from '../../assets/images/chef-1.webp';
import gallary2 from '../../assets/images/chef-2.jfif';
import gallary3 from '../../assets/images/chef-3.jfif';
import layer from '../../assets/images/layer-1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // ✅ optional (styles for autoplay bullets if needed)

import '../../assets/style.css'; // Import your custom styles

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Chef = () => {
    return (
        <section className='py-5'>
            <div className="container text-center">
                <div className="layerImg py-3">
                    <img src={layer} alt="error" height={40} width={200} />
                </div>
                <h2>Our Delicious</h2>
                <h3 className='pb-5'>Meet Our Passionate Chefs</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,   // time between slides (ms)
                        disableOnInteraction: false, // keep autoplay after user interaction
                    }}
                    loop={true} // ✅ makes it infinite
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{   // ✅ Added this
                        0: {       // Mobile
                            slidesPerView: 1,
                        },
                        768: {     // Tablet
                            slidesPerView: 2,
                        },
                        1024: {    // Desktop
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary1} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary2} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Chef Haruto Sato</h4>
                        <p className='pb-5'>Head Ramen Master</p>
                    </SwiperSlide>
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary3} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Chef Yuki Tanaka</h4>
                        <p className='pb-5'>Sous Chef & Flavor Specialist</p>
                    </SwiperSlide>
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary1} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary2} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Chef Haruto Sato</h4>
                        <p className='pb-5'>Head Ramen Master</p>
                    </SwiperSlide>
                    <SwiperSlide className='bg-transparent'>
                        <img src={gallary3} alt="error" className='chefImg ' />
                        <h4 className='pt-3'>Chef Yuki Tanaka</h4>
                        <p className='pb-5'>Sous Chef & Flavor Specialist</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
export default Chef;