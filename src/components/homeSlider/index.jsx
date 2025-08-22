import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import "../../assets/style.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const HomeSlider = () => {
  return (
    <section className="home-slider">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className=" mainHeading justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <h6 className="text-uppercase">Welcome to Fūunji Shinjuku</h6>
            <h1 className="fw-bold display-3">The Legendary Tsukemen <br /> Experience.</h1>
            <button className="myBtn mx-4"><Link to={"/about"} className="text-decoration-none text-white">Read more</Link></button>
            <button className="myBtn btnHover mx-4 bg-transparent border border-primary"><Link to={"/reservation"}  className="text-decoration-none text-white">Book Table</Link></button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="mainHeading justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <h6 className="text-uppercase">Welcome to Fūunji Shinjuku</h6>
            <h1 className="fw-bold display-3">From Shinjuku to the World <br /> The Ultimate Bowl</h1>
            <button className="myBtn mx-4"><Link to={"/about"}  className="text-decoration-none text-white">Read more</Link></button>
            <button className="myBtn btnHover mx-4 bg-transparent border border-primary"><Link to={"/reservation"}    className="text-decoration-none text-white">Book table</Link></button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className=" mainHeading justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <h6 className="text-uppercase">Welcome to Fūunji Shinjuku</h6>
            <h1 className="fw-bold display-3">An Unmatched Flavor <br /> Worth the Wait</h1>
            <button className="myBtn mx-4"><Link to={"/about"}  className="text-decoration-none text-white">Read more</Link></button>
             <button className="myBtn btnHover mx-4 bg-transparent border border-primary"><Link to={"/reservation"}  className="text-decoration-none text-white">Book Table</Link></button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
