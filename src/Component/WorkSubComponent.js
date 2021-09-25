import React from 'react'

export default function WorkSubComponent({projectImage,projectTitle,btnLink}) {
    return (
        <div className="col mt-4">
            <div className="project-wraper position-relative m-2">
                <div className="project-image position-absolute text-center">
                    <img src={projectImage} className="img-fluid"  alt="project" style={{height:"200px", width:"100%"}}/>
                </div> 
                <div className="project-overlay position-absolute">
                     <div className="project-title d-flex flex-column justify-content-center align-items-center">
                      <h4>{projectTitle}</h4>
                      <button className="btn btn-primary work-button">See More</button>
                    </div>
                </div>
            </div>
       </div>
    )
}
