import React from "react";
import aboutBanner from "../../assets/images/menuBanner.jpg"
const MenuSlider =() => {
    return(
        <section className="tabSlider text-white" style={{backgroundImage : `url(${aboutBanner})`}} >
            <div className="container text-center">
                <h1>Menu</h1>
                <h3 className="py-2">Discover Our Signature Menu</h3>
                <p>ASavor the essence of FUUNJI with carefully crafted ramen, tsukemen,<br /> and sides, blending authentic Japanese flavors with passion.</p>
            </div>
        </section>
    )
}
export default MenuSlider;