import React from 'react';

import '../../assets/style.css';
import parralex from "../../assets/images/parralex2.jpg";
import { Link } from 'react-router-dom';

import layer from '../../assets/images/layer-1.png'

const ChooseUs = () => {
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
                <h2>Why choose Us</h2>
                <h3 className='py-3'>Crafted With Care, Loved Worldwide</h3>
                <p>At FUUNJI, every bowl is crafted with dedication, patience, and passion. From our signature chicken-and-seafood broth simmered for hours to our custom-made noodles, we ensure a dining experience that blends tradition, quality, and unforgettable flavor.</p>
                <button className='myBtn'><Link to="/about" className='text-decoration-none text-white'>Know more</Link></button>
            </div>
        </section>
    );
};

export default ChooseUs;
