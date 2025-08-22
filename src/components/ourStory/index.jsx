import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../assets/style.css";
import layer from '../../assets/images/layer-1.png'

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'
import about3 from '../../assets/images/about3.webp'
import about4 from '../../assets/images/about4.jpg'
import about5 from '../../assets/images/about5.jfif'

const OurStory = () => {
  return (
    <section className="our-story py-5">
      <div className="container text-center">
        <h2 className="py-3">Our Story</h2>
        <div className="row">
          {/* Swiper Column */}
          <div className="col-md-6">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500, // 2.5 sec between slides
                disableOnInteraction: false, // keeps autoplay after manual swipe
              }}
              loop={true} // makes it infinite
              modules={[Pagination, Autoplay]}
              className="mySwiper h-100"
            >
              <SwiperSlide><img src={about1} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about2} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about3} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about4} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about5} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about1} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about2} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about3} alt="error" /></SwiperSlide>
              <SwiperSlide><img src={about5} alt="error" /></SwiperSlide>
            </Swiper>
          </div>

          {/* Text Column */}
          <div className="col-md-6 text-center p-4">
            <div className="layerImg">
                <img src={layer} alt="error" height={40} width={200}/>
            </div>
            <h3 className="py-3">Crafting Ramen with Passion and Precision</h3>
            <p>
              FUUNJI was born in Shinjuku with a vision to craft ramen and
              tsukemen that go beyond a meal. Our signature chicken-and-seafood
              broth, simmered for hours, embodies dedication, tradition, and an
              unforgettable depth of flavor.
            </p>
            <p>
              From a small ramen counter to celebrated branches in Tokyo and
              Yokohama, FUUNJI continues to serve bowls filled with warmth and
              passion. Every sip and bite reflects our journey—where
              craftsmanship, patience, and Japanese culinary heritage come
              together.
            </p>

            <button className="myBtn btnHover mx-4 bg-transparent border border-primary text-black"><Link to={"/about"}  className="text-decoration-none text-black">Read more</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
