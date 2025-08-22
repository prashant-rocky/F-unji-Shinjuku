import React from "react";
import aboutBanner from "../../assets/images/blogBanner.jpg"
const BlogSlider =() => {
    return(
        <section className="tabSlider text-white" style={{backgroundImage : `url(${aboutBanner})`}} >
            <div className="container text-center">
                <h1>Our Blogs</h1>
                <h3 className="py-2">Stories Beyond the Bowl</h3>
                <p>Explore FUUNJI’s blog for culinary stories, ramen culture, chef inspirations, and updates that celebrate Japanese flavors and traditions.</p>
            </div>
        </section>
    )
}
export default BlogSlider;