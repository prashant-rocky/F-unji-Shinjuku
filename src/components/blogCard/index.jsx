import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, desc, image, date }) => {
    return (
        <div className="blog-card">
            <div className="imgBox">
                <img src={image} alt="error" className="w-100"/>
            </div>
            <div className="detailbox">
                <h5 className="py-3">{title}</h5>
                <p><span>{date}</span></p>
                <p>{desc}</p>
                <hr />
                <button className="myBtn"><Link to="/blog" className="text-decoratin-none text-white">read more</Link></button>
                <p className="d-inline float-end"><span>10</span>Likes</p>
            </div>
        </div>
    );
}
export default BlogCard;