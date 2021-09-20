import React from 'react'

export default function Heroright({project,heroToggleHandler,projectController}) {
    return (
        <div className= "col-12 col-md-6 hero-right-side right-part-bg position-relative click-animation">
         { project ? null :
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
        
    )
}
