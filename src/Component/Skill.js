import React from 'react'
import { motion } from 'framer-motion';
const skillVariants={
    hover:{
        fontSize:"30px",
        color:"burlywood",
        originX:0,
        transition:{
            type:"spring",
            stiffness:300
        }
    }
}
export default function Skill() {
    return (
        <div className="container-fluid skill-background" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out"  >
            <div className="row">
              <div className="col d-flex justify-content-center">
                  <div className="skill-title-wraper mt-5">
                     <h1 className="mb-3">Work Expertise</h1>
                      <div className="line mx-auto"></div>
                     <h6 className="text-center mt-4 mb-5">AWESOME SKILLS</h6>
                  </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
               <div className="col">
                    <div className="ms-2 me-2 ms-md-5 me-md-5 mb-5 mt-4 pb-5">
                        <div className ="skill-percent">
                            <motion.h5 className="mb-4" variants={skillVariants} whileHover="hover" >HTML - 95% </motion.h5>
                            <div  className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div  className="progress-bar" role="progressbar" style={{width: "95%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4">CSS - 80%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4">JAVASCRIPT - 90%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "90%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4" >PHP - 85%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "85%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4" >MYSQL - 80%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                  </div> 
               </div>
               <div className="col"> 
                   <div className="ms-2 me-2 ms-md-5 me-md-5 mb-5 mt-4 pb-5">
                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4">REACT - 90% </motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "90%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4">LARAVEL - 85%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "85%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4">TAILWIND - 95%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "95%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4" >BOOTSTRAP - 80%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className ="skill-percent">
                            <motion.h5 variants={skillVariants} whileHover="hover" className="mb-4 mt-4" > VUE- 80%</motion.h5>
                            <div className="progress" style={{height:"3px",backgroundColor:"white"}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%",backgroundColor:"burlywood"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        
                   </div> 
               </div>
            </div>
        </div>
    )
}
