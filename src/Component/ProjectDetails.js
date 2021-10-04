import React from 'react'
export default function ProjectDetails({projectToggle,projectname,clientname,projectdetails,projectImage,setProjectSlide,sildinumber,btnlink}) {
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
    <div className="row">
       <div className="col-1 project-details-height d-flex align-items-center justify-content-center project-icon">
        <i onClick={ProjectSlideDecrement} className="bi bi-caret-left"></i>
       </div>
       
       <div className="col-10 d-flex align-items-center">
           <div className="Project-details-wraper">
             <div className="row">
                <div className="col-sm-12 col-lg-5">
                   <div className="project-image text-center mb-3">
                        <img src={projectImage} alt="project" />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-7 mt-5 mt-lg-0 project-details">
                    <h3 className="ms-2 me-2 mt-4 mt-md-0">{projectname}</h3>
                    <h6 className="ms-2 me-2">Client : {clientname}</h6>
                    <p className="ps-2 pe-2 pe-md-5 fs-6" >{projectdetails}</p>
                    <a href={btnlink} target="_blank" rel="noreferrer" >
                      <button className="btn btn-primary m-2">See Project</button>
                    </a>
                    <button  onClick={projectToggle} className="btn btn-danger d-inline m-2">Close</button>
                </div>
             </div>
           </div>
       </div>

       <div className="col-1 d-flex align-items-center justify-content-center project-icon">
         <i onClick={projectSlideIncrement} className="bi bi-caret-right"></i>
       </div>
    </div>
  )
}
