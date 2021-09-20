import React from 'react'
import myImae from "../image/men.jpg"
export default function AboutDescription() {
    return (
        <div className="container-fluid">
            <div className="row about-description-height row-cols-1 row-cols-md-2   align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out" >
                <div className="col mt-5 mt-md-0 mb-5 mb-md-0">
                    <div className="about-description-wraper p-2 ms-1 me-1 ms-md-3 pt-5 pt-md-0 pb-5 pb-md-0">
                        <h2>About Me</h2>
                        <div className="line"></div>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. </p>
                        <div className="social-icon d-flex mt-5">
                             <div className="social-icon-background ps-2 pe-2">
                             <a href=""> <i class="bi bi-facebook"></i></a>         
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href=""> <i class="bi bi-instagram"></i>  </a> 
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href=""> <i class="bi bi-github"></i> </a>   
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href=""><i class="bi bi-linkedin"></i> </a>       
                             </div>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5 mb-md-0">
                    <div className="about-description-image-wraper pt-5 pt-md-0 pb-5 pb-md-0 border-2 border-start border-top">
                       <img className="img-fluid" src={myImae} alt="image" />
                    </div>
                </div>
            </div>  
        </div>
    )
}
