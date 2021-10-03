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
                        <p className="mt-3 lh-base">I am a website designer and developer and a Specialist in Custom Website Application Development with profound knowledge & experience in PHP JAVA JAVASCRIPT HTML CSS BOOTSTRAP MYSQL NODEJS TAILWINDCSS LARAVEL. I have worked on more than 100+ website.I am committed to support my client lifetime and resolved the issue within 24 hours. </p>
                        <div className="social-icon d-flex mt-5">
                             <div className="social-icon-background ps-2 pe-2">
                             <a href="https://www.facebook.com/orpondas.onutap/"> <i className="bi bi-facebook"></i></a>         
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href="https://www.facebook.com/orpondas.onutap/"> <i className="bi bi-instagram"></i>  </a> 
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href="https://www.facebook.com/orpondas.onutap/"> <i className="bi bi-github"></i> </a>   
                             </div>
                             <div className="social-icon-background ms-3 ps-2 pe-2">
                              <a href="https://www.facebook.com/orpondas.onutap/"><i className="bi bi-linkedin"></i> </a>       
                             </div>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5 mb-md-0">
                    <div className="about-description-image-wraper mt-3 mb-3 mt-md-5 mb-md-5 pt-5 pt-md-0 pb-5 pb-md-0 border-2 border-start border-top">
                       <img className="img-fluid" src={myImae} alt="userimage" />
                    </div>
                </div>
            </div>  
        </div>
    )
}
