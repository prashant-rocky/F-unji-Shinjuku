import React from "react";
import { Blogs } from "../../utils/data";
import BlogCard from "../blogCard";
import layer from '../../assets/images/layer-1.png'

const BlogSection = () => {
    return (
        <section className="blog py-5">
            <div className="container text-center">
                <div className="layerImg py-3">
                    <img src={layer} alt="error" height={40} width={200} />
                </div>
                <h2 className="py-3">Latest News</h2>
                <h3>From FUUNJI With Flavor</h3>
                <div className="row text-start">
                    {
                        Blogs.map(blog => {
                            return (

                                <div className="col-md-4 py-3" key={blog.id}>
                                    <BlogCard
                                        image={blog.imgSrc}
                                        title={blog.title}
                                        desc={blog.description}
                                        date={blog.date}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogSection;