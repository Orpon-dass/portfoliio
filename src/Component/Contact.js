import React from 'react'

export default function Contact() {
    return (
        <div className="container-fluid work-background" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <div className="row">
              <div className="col d-flex justify-content-center">
                  <div className="work-title-wraper mt-5">
                     <h1 className="mb-3">Let's Talk</h1>
                      <div className="line mx-auto"></div>
                  </div>
              </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-8  mx-auto">
                  <div className="contact-form-wraper mt-5 mb-5">
                      <form>
                      <div class="form-floating mb-3">
                           <input type="text" className="form-control form-custom-class " id="floatingInput" placeholder="name@example.com" />
                           <label for="floatingInput" className="custom-label">NAME</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="email" className="form-control form-custom-class" id="floatingPassword" placeholder="Password" />
                          <label for="floatingPassword" className="custom-label">EMAIL</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea className="form-control form-custom-class" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "120px"}}></textarea>
                          <label for="floatingTextarea2" className="custom-label" >MESSAGE</label>
                        </div>
                        <div className="form-custom-button d-flex justify-content-center mt-4">
                        <div className="d-grid col-5 mx-auto">
                           <button className="btn btn-primary btn-lg custom-button shadow-none" type="button" >SEND</button>
                        </div>
                        </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    )
}
