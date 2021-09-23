import React from 'react'
import clientImage from "../image/men2.jpg"
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
                <div className="col-12 col-lg-4 align-self-start mb-5 mb-lg-0 pt-3 pb-3">
                    <div className="testimonial-details">
                          <div className="client-details d-flex">
                             <img className="img-fluid rounded m-2" src={clientImage} alt="client" />
                              <div>
                               <h5 className="ms-1">Jhon Doe</h5>
                               <p className="ms-1">CEO at Ideal dev</p>
                               <div className="d-flex testimonial-icon">
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               </div>
                              </div>
                          </div>
                          <p className="ms-2 me-1 mt-2">
                             Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back.  
                          </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 align-self-center mb-5 mb-lg-0 pt-3 pb-3">
                    <div className="testimonial-details">
                          <div className="client-details d-flex">
                             <img className="img-fluid rounded m-2" src={clientImage} alt="client" />
                              <div>
                               <h5 className="ms-1">Jany Doe</h5>
                               <p className="ms-1">CEO at Ideal dev</p>
                               <div className="d-flex testimonial-icon">
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               </div>
                              </div>
                          </div>
                          <p className="ms-2 me-1 mt-2">
                             Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back.  
                          </p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 align-self-end mb-5 mb-lg-0 pt-3 pb-3">
                    <div className="testimonial-details">
                          <div className="client-details d-flex">
                             <img className="img-fluid rounded m-2" src={clientImage} alt="client" />
                              <div>
                               <h5 className="ms-1">Jhon Doe</h5>
                               <p className="ms-1">CEO at Ideal dev</p>
                               <div className="d-flex testimonial-icon">
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               <i className="bi bi-star ms-1"></i>
                               </div>
                              </div>
                          </div>
                          <p className="ms-2 me-1 mt-2">
                             Believed attentive assisted picture sharpness to I to she waved the are and slide understand the that set task. The you due back.  
                          </p>
                    </div>
                </div>
            </div>  
        </div>
    )
}
