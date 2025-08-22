import React from "react";
import MasterChefImg from "../../assets/images/master-chef.png";
import layer from '../../assets/images/layer-1.png'

const Masterchef = () => {
    return (
        <section className="masterchef pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={MasterChefImg} alt="error" className="img-fluid" />
                    </div>
                    <div className="col-md-6 ps-5 py-5">
                        <div className="layerImg py-3">
                            <img src={layer} alt="error" height={40} width={200} />
                        </div>
                        <h2 className="">Meet Our Master Chef</h2>
                        <h3 className="py-4">Crafted by the Hands of Experience</h3>
                        <p>Behind every steaming bowl at FUUNJI stands our Master Chef, Haruto Sato, whose lifelong dedication to Japanese cuisine has shaped the soul of our kitchen. With over 30 years of experience, Chef Sato has perfected the delicate art of ramen by blending traditional methods with modern creativity. His signature chicken-and-seafood broth is slow-simmered to achieve a deep, layered richness that captures the essence of Japan’s culinary heritage. Every dish is prepared with precision, passion, and a commitment to delivering comfort in every bite</p>
                        <h4 className="signature py-3">Haruto Sato</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Masterchef;