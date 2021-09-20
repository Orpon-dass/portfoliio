import React from 'react'

export default function MyWorks({project,heroToggleHandler}) {
    return (
        <div className="container-fluid">
          <div data-aos-easing="ease-out" data-aos="slide-left" data-aos-duration="1000" className="row justify-content-end work">
             <div className="col position-relative">
             { project ? null :
               <div className="position-absolute end-0 top-0">
                 <div className="cross-icon-div m-2 d-flex justify-content-center align-items-center">
                   <i onClick={heroToggleHandler} className="bi bi-x-square cross-image p-2"></i>
                 </div>
               </div>
             }
               <div className="text-center my-work-title mt-4">
                 <h1>My Works</h1>
                 <h4>Some of my best project</h4>
               </div>

             </div>
          </div>

        </div>

        
    )
}
