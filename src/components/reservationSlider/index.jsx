import React from "react";
import aboutBanner from "../../assets/images/reservationBanner.jpg"
const ReservationSlider =() => {
    return(
        <section className="tabSlider text-white" style={{backgroundImage : `url(${aboutBanner})`}} >
            <div className="container text-center">
                <h1>Reservation</h1>
                <h3 className="py-2">Reserve Your Table Today</h3>
                <p>Secure your spot at FUUNJI and enjoy authentic ramen crafted with passion, <br /> comfort, and flavor in a warm atmosphere.</p>
            </div>
        </section>
    )
}
export default ReservationSlider;