import React,{useState} from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import MyWorks from './MyWorks';
import Aboutme from './Aboutme';
import AboutDescription from './AboutDescription';
import Skill from './Skill';
import Service from './Service';
import Contact from './Contact';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
import Testimonial from './Testimonial';

export default function Blueprint() {
    const [rightToggle,setRightToggle]=useState(true);
    const [leftToggle,setLeftToggle]=useState(true);

    //left side animation
    const leftVarint = {
        hidden:{
           width:"0%",
        },
        visible:{
            width: rightToggle ? "50%":"100%",
            height:"100%",
            x:0,
            transition:{
            duration:1,
            ease:"easeIn"
            }
        },
        Exit:{
            x:"-100vw",
            transition:{
                duration:1,
                ease:"easeIn"
            }
        }
    }

    //right side animation
    const rightVarint={
        hidden:{
            width:"0%",
            opacity:0
        },
        visible:{
            width: leftToggle ? "50%" :"100%",
            opacity:1,
            height:"100%",
            x:0,
            transition:{
                ease:"easeIn",
                duration:1,
            } 
        },
        Exit:{
            x:"100vw",
            transition:{
                duration:1,
                ease:"easeIn"
            }
        }
    }

    //left side mobile animation
    const leftvarintMobile ={
        hidden:{
            height:"0%",
            opacity:0
        },
        visible:{
            opacity:1,
            height:rightToggle ? "50%" : "100%",
            transition:{
                duration:1
            }
        },
         Exit:{
             opacity:0,
             transition:{
                 duration:1,
             }
         }
    }

    //right side mobile animation
    const rightvarintMobile ={
        hidden:{
            height:"0%",
            opacity:0,
        },
        visible:{
            opacity:1,
            height:leftToggle ? "50%" : "100%",
            transition:{
                duration:1,
                when:"beforeChildren"
            }
        },
         Exit:{
             opacity:0,
             transition:{
                 duration:1,
             }
         }
    }
    const projectVarint={
        Hover:{
            scale:1.2,
            transition:{
                type:'spring' , 
                stiffness:300
            }
        }
    }

    const leftToggleHandler=()=>{
        setRightToggle(false);
    }

    const rightToggleHandler=()=>{
        setLeftToggle(false)
    }

    const homesectionToggleHandler =()=>{
        setRightToggle(true);
        setLeftToggle(true);
        console.log("ok")
    }

    return (
        <>
        <div className="main-section">
          <AnimatePresence>
            {leftToggle && (
            <motion.div 
            className="left-section position-relative"
            variants={leftVarint}
            initial="hidden"
            animate="visible"
            exit="Exit"
            >
               {rightToggle ? null : <div className="position-absolute">
                  <div className="menu-btn mt-3" onClick={homesectionToggleHandler}>
                    <div className="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
                  </div>}
                <div className="position-absolute top-50 start-50 translate-middle about-pulse-div">
                    { rightToggle ? 
                    <div className="p-2 hero-about-me border border-1 border-white"> 
                        <h2 onClick={leftToggleHandler} className="pt-1 about-me-button">About Me</h2>
                    </div>
                    :
                    <div className="text-center">
                        <h1 class="my-name">OROPON DASS</h1>
                        <p class="my-tag">Available for freelance</p>
                    </div>    
                    }
                </div>  
            </motion.div>
            )}
          </AnimatePresence>
          

          <AnimatePresence>
            { rightToggle && (<motion.div 
            className="right-section"
            variants={rightVarint}
            initial="hidden"
            animate="visible"
            exit="Exit"
            >
                {leftToggle ?
                <motion.div 
                 className="position-absolute top-50 start-50 translate-middle w-100"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:2}}
                >
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} className="mb-5">
                        <h1 className="hero-skill text-center">Web Designer & Developer</h1>
                        <p className="text-center hero-country">Bangladesh</p>
                        <div className="d-flex justify-content-center">
                        <div> 
                           <motion.button variants={projectVarint} whileHover="Hover" className="btn btn-primary btn-custom-color" onClick={rightToggleHandler}>See Projects</motion.button>
                        </div>
                        </div>
                    </motion.div>
                </motion.div>
                 :
                 <MyWorks homesectionToggleHandler={homesectionToggleHandler}/>
                 }


            </motion.div>
            )}
          </AnimatePresence>

        </div>

    {/* moblie section */}
        <div className="main-section-mobile">
        <AnimatePresence>
          {leftToggle && (
          <motion.div 
          className="left-section-moblie"
          variants={leftvarintMobile}
          initial="hidden"
          animate="visible"
          exit="Exit"
          >
               {rightToggle ? null : <div className="position-absolute">
                  <div className="menu-btn mt-3 ms-3" onClick={homesectionToggleHandler}>
                    <div className="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                  </div>
               </div>}
            <div className="position-absolute top-50 start-50 translate-middle about-pulse-div">
                   { rightToggle ? 
                    <div className="p-2 hero-about-me border border-1 border-white"> 
                        <h2 onClick={leftToggleHandler} className="pt-1 about-me-button">About Me</h2>
                    </div>
                    :
                    <div className="text-center">
                          <h1 class="my-name">OROPON DASS</h1>
                          <p class="my-tag">Available for freelance</p>
                    </div>    
                   }
            </div>  
          </motion.div>
          )}
        </AnimatePresence>
        

        <AnimatePresence>
          { rightToggle && (<motion.div 
          className="right-section-mobile"
          variants={rightvarintMobile}
          initial="hidden"
          animate="visible"
          exit="Exit"

          >
               {leftToggle ?
                <motion.div 
                className="position-absolute top-50 start-50 translate-middle w-100"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:2}}
                >
                    <div className="mb-5">
                        <h3 className="hero-skill text-center">Web Designer & Developer</h3>
                        <p className="text-center hero-country">Bangladesh</p>
                        <div className="d-flex justify-content-center">
                        <div> 
                            <button className="btn btn-primary btn-custom-color" onClick={rightToggleHandler}>See Projects</button>
                        </div>
                        </div>
                    </div>
                </motion.div>
                 :
                 <MyWorks homesectionToggleHandler={homesectionToggleHandler}/>
                 } 

          </motion.div>
          )}
        </AnimatePresence>

      </div>
      {rightToggle ? null : <Aboutme /> }
      {rightToggle ? null : <AboutDescription /> }
      {rightToggle ? null : <Skill /> }
      {rightToggle ? null : <Service /> }
      {rightToggle ? null : <Contact /> }
      {rightToggle ? null : <ContactInfo /> }
      {rightToggle ? null : <Testimonial /> }
      {rightToggle ? null : <Footer /> }
      </>
    )
}
