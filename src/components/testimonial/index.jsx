import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../assets/style.css';
import parralex from "../../assets/images/parralex.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '../../utils/data';

const Testimonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${parralex})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ fixed background
      }}
    >
      <div className="container px-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper text-white"
            style={{ height: "500px" }} // ✅ fixed height
            >
          {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="bg-transparent d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className='pb-5'>Testimonials</h2>
              <h3>{testimonial.feedback}</h3>
              <p>- {testimonial.name}</p>
              <p className="mb-5">{testimonial.rating}</p>
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
