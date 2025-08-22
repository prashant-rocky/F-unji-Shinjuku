import React from "react";
import { Blogs2 } from "../../utils/data";
import layer from '../../assets/images/layer-1.png'
const BlogDetail = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        Blogs2.map(blog => {
                            return (
                                <div className="col-md-12 py-3" key={blog.id}>
                                    <div className="blog-card">
                                        <div className="blogImg">
                                            <img src={blog.imgSrc} alt="Blog" className="img-fluid w-100" />
                                        </div>
                                        <div className="content py-3">
                                            <div className="layerImg py-3">
                                                <img src={layer} alt="error" height={40} width={200} />
                                            </div>
                                            <h2>{blog.title}</h2>
                                            <p className="py-2">20 August 2025</p>
                                            <p>{blog.content}</p>
                                            <p>{blog.content2}</p>
                                            <p>{blog.content3}</p>
                                            <h3 className="pt-3">Comments</h3>
                                            <div className="firstComment py-4">
                                                <div className="personImage">
                                                    <img src={blog.person1} alt="error" height={100} width={100} className="px-3 rounded-5" />
                                                    <span>{blog.comment1}</span>
                                                    <h5 className="d-inline px-3">{blog.name1}</h5>
                                                </div>
                                            </div>
                                            <div className="secondComent ps-5 py-4">
                                                <div className="personImage">
                                                    <img src={blog.person12} alt="error" height={100} width={100} className="px-3 rounded-5" />
                                                    <span>{blog.comment2}</span>
                                                    <h5 className="d-inline px-3">{blog.name2}</h5>
                                                </div>
                                            </div>
                                            <div className="thirdComment py-4">
                                                <div className="personImage">
                                                    <img src={blog.person3} alt="error" height={100} width={100} className="px-3 rounded-5" />
                                                    <span>{blog.comment3}</span>
                                                    <h5 className="d-inline px-3">{blog.name3}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default BlogDetail;