import React from 'react'
import ServiceSubcom from './ServiceSubcom'

export default function Service() {
    return (
        <div className="container-fluid service-wraper" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <div className="row">
              <div className="col d-flex justify-content-center">
                  <div className="service-title-wraper mt-5">
                     <h1 className="mb-3">Services</h1>
                      <div className="line mx-auto"></div>
                     <h6 className="text-center mt-4 mb-5">THINGS I LOVE DOING</h6>
                  </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                   <ServiceSubcom title={"Web Design"}        icon={"bi bi-laptop"} description={"Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
                   <ServiceSubcom title={"Web Development"}   icon={"bi bi-laptop"} description={"Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
                   <ServiceSubcom title={"Graphic Design"}    icon={"bi bi-palette"} description={"Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
                   <ServiceSubcom title={"Branding"}          icon={"bi bi-graph-up"} description={"Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
                   <ServiceSubcom title={"Support"}           icon={"bi bi-headset"} description={"Chuck shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
                   <ServiceSubcom title={"Amazon AWS"}        icon={"bi bi-card-list"} description={"venison alcatra ham turducken short ribs frankfurter meatloaf venison alcatra."} />
            </div> 
        </div>
    )
}
