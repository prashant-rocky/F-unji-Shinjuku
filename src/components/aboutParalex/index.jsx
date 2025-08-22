import React from 'react';

import '../../assets/style.css';
import parralex from "../../assets/images/parralex3.jpg";
import { Link } from 'react-router-dom';

import layer from '../../assets/images/layer-1.png'

const AboutParallex = () => {
    return (
        <section
            className=" chose-us py-5 text-white"
            style={{
                backgroundImage: `url(${parralex})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // ✅ fixed background
            }}
        >
            <div className="container px-5 py-5 text-center">
                <div className="layerImg py-3">
                    <img src={layer} alt="error" height={40} width={200} />
                </div>
                <h3>Founded in Shinjuku, FUUNJI was created to serve ramen with heart. Our rich chicken-and-seafood broth, perfected through patience and tradition, reflects a journey of passion and dedication, bringing authentic Japanese flavors to every bowl we serve.</h3>
            </div>
        </section>
    );
};

export default AboutParallex;
