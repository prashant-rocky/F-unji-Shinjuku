import React from 'react';

import '../../assets/style.css';
import parralex from "../../assets/images/parralex4.jpg";
import { Link } from 'react-router-dom';

import layer from '../../assets/images/layer-1.png'

const MenuParalex = () => {
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
                <h3>“At FUUNJI, every bowl is a reflection of our dedication to flavor and craftsmanship. From our rich chicken-and-seafood tsukemen to our comforting ramen, each dish is carefully prepared to deliver warmth, satisfaction, and an unforgettable taste experience.”</h3>
            </div>
        </section>
    );
};

export default MenuParalex;
