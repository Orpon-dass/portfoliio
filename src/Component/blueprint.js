import React,{useState} from 'react'
import ParticleBackground from '../Component/ParticleBackground';
export default function Blueprint() {
    const [about, setAbout] = useState(true);
    const [project, setProject]=useState(true)
    const aboutController = ()=>{
        setAbout(false)  
    }
    const projectController =()=>{
        setProject(false)
    }
    const heroToggleHandler= ()=>{
        setProject(true)
        setAbout(true)  
    }
   
    return (
        <div className="container-fluid container-padding">
            <div className={project ? "row hero-class g-0" : "row justify-content-end hero-class g-0"}>
             {project ? 
               <div className={ about ? 'col-12 col-lg-6 hero-left-side-bg position-relative':'col-12 col-lg-12 hero-left-side-bg position-relative  after-animation-height'}>
                <div className="overlay-color position-absolute"></div>
                 {about ? null :
                  <div className="position-absolute end-0 top-0">
                      <div className="cross-icon-div m-2 d-flex justify-content-center align-items-center">
                        <i onClick={heroToggleHandler} className="bi bi-x-square cross-image p-2"></i>
                      </div>
                  </div>
                 }
                   <ParticleBackground />
                  <div className="position-absolute top-50 start-50 translate-middle about-pulse-div">
                    <div className="p-2 hero-about-me border border-1 border-white"> 
                        <h2 onClick={aboutController} className="pt-1 about-me-button">About Me</h2>
                    </div>    
                  </div>     
               </div>
              :null 
              
              }
               
              { about ?
               <div className={ project ? "col-12 col-lg-6 hero-right-side-bg align-self-end position-relative" : "col-12 col-lg-12 hero-right-side-bg after-animation-height align-self-end"}>
                   { project  ? null :
                   <div className="d-flex justify-content-end">
                      <div className="cross-icon-div m-2 d-flex justify-content-center align-items-center">
                        <i onClick={heroToggleHandler} className="bi bi-x-square cross-image p-2"></i>
                      </div>
                    </div>
                     }
                   <div className="position-absolute top-50 start-50 translate-middle w-100">
                       <div className="mb-5">
                         <h3 className="hero-skill text-center">Web Designer & Developer</h3>
                         <p className="text-center hero-country">Bangladesh</p>
                         <div className="d-flex justify-content-center">
                           <div> 
                              <button className="btn btn-primary btn-custom-color" onClick={projectController}>See Projects</button>
                           </div>
                         </div>
                       </div>
                   </div>
               </div>
               :null
               }
               
            </div>            
        </div>
    )
}
