import React from "react";
import aboutBanner from "../../assets/images/aboutBanner.jpg"
const AboutSlider =() => {
    return(
        <section className="tabSlider text-white" style={{backgroundImage : `url(${aboutBanner})`}} >
            <div className="container text-center">
                <h1>About Us</h1>
                <h3 className="py-2">The Journey of FUUNJI</h3>
                <p>At FUUNJI, we blend tradition and innovation, crafting ramen that reflects <br /> passion, patience, sand authentic Japanese culinary heritage.</p>
            </div>
        </section>
    )
}
export default AboutSlider;