import React from "react";
import MenuCard from "../menuCard";
import { MenuData1 } from "../../utils/data";
import layer from '../../assets/images/layer-1.png'
import menuimg from "../../assets/images/menu1.png"
const Menu1 = () => {
    return (
        <section className="py-5">
            <div className="container text-center">
                <div className="layerImg py-3">
                    <img src={layer} alt="error" height={40} width={200} />
                </div>
                <h2>Lunch & Breakfast</h2>
                <h3>Delicious Bowls for Breakfast and Lunch</h3>
                <div className="row text-start">
                    <div className="col-md-6">
                        <img src={menuimg} alt="error" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="rwo">
                            {
                                MenuData1.map(item => {
                                    return (
                                        <div className="col-md-12 py-2" key={item.id}>
                                            <MenuCard
                                                image={item.imgSrc}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu1;