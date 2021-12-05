import React from 'react'
import HappyClient from './HappyClient';
import { motion } from 'framer-motion';
const mydetailsVarint={
    hover:{
        color:'#f8e112',
        scale:1.3,
        originX:0,
        transition:{
            type:'spring' ,
            stiffness:300
        }
    }
}
export default function Aboutme() {
    return (
        <section className="about">
        <div className="container-fluid about">
            
            <div className="row about-height d-flex align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
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
                         <div className="row row-cols-1 row-cols-md-2">
                             <div className="col info text-center text-lg-start">
                                 <ul className="ms-3">
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title">First Name : </span>
                                         <span  className="value">Orpon</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Age : </span>
                                         <span className="value" >25</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Residence : </span>
                                         <span className="value" >Bangladesh</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2" >
                                         <span className="title" >Phone : </span>
                                         <span className="value" >01742824292</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Frelance : </span>
                                         <span className="value" >Available</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Skype : </span>
                                         <span className="value" >orpon_dass</span>
                                     </motion.li>
                                 </ul>
                             </div>
                             <div className="col info text-center text-lg-start">
                             <ul className="pointer">
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Last Name : </span>
                                         <span className="value" >Dass</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title"  >Birthdate : </span>
                                         <span className="value" >25/05/1996</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Language : </span>
                                         <span className="value" >English</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2" >
                                         <span className="title" >Email : </span>
                                         <span className="value"  >orpondass@gmail.com</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Experience : </span>
                                         <span className="value" >3 years</span>
                                     </motion.li>
                                     <motion.li variants={mydetailsVarint} whileHover="hover" className="mt-2">
                                         <span className="title" >Address : </span>
                                         <span className="value" >Sylhet,Bangladesh</span>
                                     </motion.li>
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
