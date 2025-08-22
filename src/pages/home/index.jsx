import React from "react";
import HomeSlider from "../../components/homeSlider";
import OurStory from "../../components/ourStory";
import FoodMenu from "../../components/foodMenu";
import Testimonial from "../../components/testimonial";
import Chef from "../../components/chefs";
import ChooseUs from "../../components/ChoseUs";
import BlogSection from "../../components/blog";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <OurStory />
            <hr />
            <FoodMenu />
            <Testimonial />
            <Chef />
            <ChooseUs />
            <BlogSection />
        </>
    );
}   
export default Home;