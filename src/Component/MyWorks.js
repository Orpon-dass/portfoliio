import React from 'react'
import projectImageOne from './../image/projectone.jpg'
import projectImageTwo from './../image/projecttwo.jpg'
import projectImageThree from './../image/projectthree.jpg'
import projectImageFour from './../image/projectfour.jpg'
import projectImageFive from './../image/projectfive.jpg'
import projectImageSix from './../image/projectsix.jpg'
import projectImageSeven from './../image/projectseven.jpg'
import projectImageEight from './../image/projecteight.jpg'
import WorkSubComponent from './WorkSubComponent'
export default function MyWorks({project,heroToggleHandler}) {
    return (
        <div className="container-fluid" data-aos-easing="ease-out" data-aos="slide-left" data-aos-duration="500">
          <div className="row">
             <div className="col position-relative">
             { project ? null :
               <div className="position-absolute">
                 <div className="menu-btn mt-3" onClick={heroToggleHandler}>
                    <div className="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                  </div>
               </div>
             }
               <div>
                 <div className="text-center my-work-title mt-3">
                    <h1>My Works</h1>
                    <h4>Some of my best project</h4>
                 </div>
               </div>

             </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 pb-4">
                    <WorkSubComponent projectTitle={"BLOG"} projectImage={projectImageOne} />
                    <WorkSubComponent projectTitle={"PORTFOLIO"} projectImage={projectImageTwo} />
                    <WorkSubComponent projectTitle={"MOBILE SHOP"} projectImage={projectImageThree} />
                    <WorkSubComponent projectTitle={"PROJECTNAME"} projectImage={projectImageFour} />
                    <WorkSubComponent projectTitle={"PROJECTNAME"} projectImage={projectImageFive} />
                    <WorkSubComponent projectTitle={"PROJECTNAME"} projectImage={projectImageSix} />
                    <WorkSubComponent projectTitle={"PROJECTNAME"} projectImage={projectImageSeven} />
                    <WorkSubComponent projectTitle={"PROJECTNAME"} projectImage={projectImageEight} />
           </div>
        </div>

        
    )
}
