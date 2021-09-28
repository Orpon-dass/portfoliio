import React from 'react'
export default function ProjectDetails({projectToggle,projectname,clientname,projectdetails,projectImage,setProjectSlide,sildinumber}) {
    const projectSlideIncrement=()=>{
       if(sildinumber===8){
        setProjectSlide(1) 
       }else{
        setProjectSlide(sildinumber+1) 
       }
    }
    const ProjectSlideDecrement=()=>{
      if(sildinumber===1){
        setProjectSlide(8) 
       }else{
        setProjectSlide(sildinumber-1) 
       }
    }
    
    return (
        <div  className="row">
           <div className="col project-details-wraper">
               <div className="project-main position-relative">
                   <div className="position-absolute project-main  d-flex align-items-center" >
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div className="project-image text-center mb-3">
                             <img src={projectImage} alt="project" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7 mt-5 mt-md-0 project-details">
                          <h3 className="ms-2 me-2 mt-4 mt-md-0">{projectname}</h3>
                          <h6 className="ms-2 me-2">Client : {clientname}</h6>
                          <p className="ms-2 me-2 pe-md-5 lh-base " >{projectdetails}</p>
                          <button className="btn btn-primary m-2">See Project</button>
                          <button onClick={projectToggle} className="btn btn-danger d-inline d-md-none m-2">Close</button>
                        </div>
                      </div>
                   </div>
                   <div className="position-absolute top-50 start-0 translate-middle-y project-icon ">
                   <i onClick={ProjectSlideDecrement} className="bi bi-caret-left"></i>
                   </div>
                   <div className="position-absolute top-50 end-0 translate-middle-y project-icon">
                     <i onClick={projectSlideIncrement} className="bi bi-caret-right"></i>
                   </div>
                   <div onClick={projectToggle} className="position-absolute top-0 start-0  project-icon d-none d-md-block">
                      <i className="bi bi-x-lg"></i>
                   </div>
               </div>
           </div>           
        </div>
    )
}
// data-aos-easing="ease-out" data-aos="slide-up" data-aos-duration="500"