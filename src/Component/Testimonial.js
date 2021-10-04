import React from 'react'
import clientImage from "../image/men2.jpg"
import clientImagetwo from "../image/1631591648713-men.jpeg"
export default function Testimonial() {
    return (
        <div className="container-fluid testimonial-background" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <div className="row">
              <div className="col d-flex justify-content-center">
                  <div className="work-title-wraper mt-5">
                     <h1 className="mb-3">Testimonial</h1>
                      <div className="line mx-auto"></div>
                  </div>
              </div>
            </div>
            <div className="row testimonial-wraper">
               <div className="col-sm-12 col-lg-6">
                    <div className="testimonial-details mt-5 mb-5">
                            <div className="client-details d-flex">
                                <img className="img-fluid rounded m-2" src={clientImage} alt="client" />
                                <div>
                                <h5 className="ms-1">Ms Mario</h5>
                                <p className="ms-1 fs-6">From UK</p>
                                <div className="d-flex testimonial-icon">
                                <i className="bi bi-star ms-1"></i>
                                <i className="bi bi-star ms-1"></i>
                                <i className="bi bi-star ms-1"></i>
                                <i className="bi bi-star ms-1"></i>
                                <i className="bi bi-star ms-1"></i>
                                </div>
                                </div>
                            </div>
                            <p className="ms-2 me-1 mt-2 fs-6">
                                orpon is an outstanding partner who delivered great value without compromising excellence! We are looking forward to working with him in the future.  
                            </p>
                    </div>
               </div> 
                {/* <div  className="col-lg-6 test-class d-none d-lg-inline" >one</div> */}
            </div>

            <div className="row testimonial-wraper">
               <div className="col-sm-12 col-lg-6 offset-lg-6">
                <div className="testimonial-details mt-3 mb-5">
                    <div className="client-details d-flex">
                        <img className="img-fluid rounded m-2" src={clientImagetwo} alt="client" />
                        <div>
                        <h5 className="ms-1">Simo Edwin</h5>
                        <p className="ms-1 fs-6">CEO at MRB IT</p>
                        <div className="d-flex testimonial-icon">
                        <i className="bi bi-star ms-1"></i>
                        <i className="bi bi-star ms-1"></i>
                        <i className="bi bi-star ms-1"></i>
                        <i className="bi bi-star ms-1"></i>
                        <i className="bi bi-star ms-1"></i>
                        </div>
                        </div>
                    </div>
                    <p className="ms-2 me-1 mt-2 fs-6">
                        Very professional and unique style for a website. The design was perfect and all expectations were met very friendly and easy to work with too.  
                </p>
                </div>
               </div> 
            </div>  
        </div>
    )
}
