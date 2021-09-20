import React from 'react'
import HappyClient from './HappyClient'
export default function Aboutme() {
    return (
        <section className="about">
        <div className="container-fluid about">
            
            <div className="row about-height d-flex align-items-center" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out">
                <div className="col-12">
                <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center mt-5 about-text">
                       <h1>About <span>Me</span></h1>
                    </div>
                </div>
            </div>
                   <div className="row mt-5 mb-5  about-wraper m-1">
                      <div className="col-12 col-lg-6 mt-5 mb-5">
                         <div className="row row-cols-1 row-cols-lg-2">
                             <div className="col info text-center text-lg-start">
                                 <ul className="ms-3">
                                     <li className="mt-2">
                                         <span className="title">First Name : </span>
                                         <span className="value">Orpon</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Age : </span>
                                         <span className="value" >25</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Residence : </span>
                                         <span className="value" >Bangladesh</span>
                                     </li>
                                     <li className="mt-2" >
                                         <span className="title" >Phone : </span>
                                         <span className="value" >01742824292</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Frelance : </span>
                                         <span className="value" >Available</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Skype : </span>
                                         <span className="value" >orpon_dass</span>
                                     </li>
                                 </ul>
                             </div>
                             <div className="col info text-center text-lg-start">
                             <ul>
                                     <li className="mt-2">
                                         <span className="title" >Last Name : </span>
                                         <span className="value" >Dass</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title"  >Birthdate : </span>
                                         <span className="value" >25/05/1996</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Language : </span>
                                         <span className="value" >English</span>
                                     </li>
                                     <li className="mt-2" >
                                         <span className="title" >Email : </span>
                                         <span className="value"  >orpondass@gmail.com</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Experience : </span>
                                         <span className="value" >3 years</span>
                                     </li>
                                     <li className="mt-2">
                                         <span className="title" >Address : </span>
                                         <span className="value" >Sylhet,Bangladesh</span>
                                     </li>
                                 </ul>
                             </div>
                        </div> 
                      </div>
                      <div className="col-12 col-lg-6 mt-5 mb-5">
                        <div className="row">
                            <HappyClient title={"Happy Client"} total={"340"} icon={"bi bi-emoji-smile-fill"} />
                            <HappyClient title={"Project Done"} total={"200"} icon={"bi bi-wallet-fill"} />
                            <HappyClient title={"Award Won"}    total={"204"} icon={"bi bi-award-fill"} />
                            <HappyClient title={"Cup of Tea"}   total={"560"} icon={"bi bi-suit-heart-fill"} />
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
        </section>
    )
}
