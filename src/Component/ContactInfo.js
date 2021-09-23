import React from 'react'

export default function ContactInfo() {
    return (
        <div className="container-fluid">
           <div className="row contact-info-backgroud" >
              <div className="col-sm-12 col-md-10 mx-auto">
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col">
                        <div className="contact-info-wraper mt-4 mb-5">
                            <div className="contact-info-icon d-flex justify-content-center">
                            <i class="bi bi-phone"></i>
                            </div>
                            <div className="contact-info-text d-flex justify-content-center mt-2 mb-3 pb-2">
                               01742824292
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="contact-info-wraper mt-4 mb-5">
                            <div className="contact-info-icon d-flex justify-content-center">
                            <i class="bi bi-envelope"></i>
                            </div>
                            <div className="contact-info-text d-flex justify-content-center mt-2 mb-3 pb-2">
                               orpondass@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="contact-info-wraper mt-4 mb-5">
                            <div className="contact-info-icon d-flex justify-content-center">
                            <i class="bi bi-geo-alt"></i>
                            </div>
                            <div className="contact-info-text d-flex justify-content-center mt-2 mb-3 pb-2">
                               Bangladesh
                            </div>
                        </div>
                    </div>

                  </div>
              </div>
           </div> 
        </div>
    )
}
